import { http, HttpResponse } from "msw";

// Mock data for schedules
const generateMockSchedules = (count: number, filter?: string) => {
  const schedules = [];
  const mealTypes = ["Morning", "Lunch", "Dinner", "Snack"];
  const images = [
    "/src/assets/d01.svg",
    "/src/assets/d02.svg",
    "/src/assets/l01.svg",
    "/src/assets/l02.svg",
    "/src/assets/l03.svg",
    "/src/assets/m01.svg",
    "/src/assets/s01.svg",
  ];

  for (let i = 0; i < count; i++) {
    const mealType = mealTypes[Math.floor(Math.random() * mealTypes.length)];
    const image = images[Math.floor(Math.random() * images.length)];
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));

    const schedule = {
      id: i + 1,
      imageUrl: image,
      time: `${date.getDate().toString().padStart(2, "0")}.${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${mealType}`,
      mealType,
      date: date.toISOString().split("T")[0],
    };

    // Apply filter if specified
    if (!filter || schedule.mealType === filter) {
      schedules.push(schedule);
    }
  }

  return schedules;
};

// Generate 100 mock schedules for pagination testing
const allSchedules = generateMockSchedules(100);

export const handlers = [
  // GET schedules with pagination and filtering
  http.get("/api/schedules", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "20");
    const filter = url.searchParams.get("filter") || "";

    // Filter schedules based on meal type
    let filteredSchedules = allSchedules;
    if (filter) {
      filteredSchedules = allSchedules.filter(
        (schedule) => schedule.mealType === filter
      );
    }

    // Calculate pagination
    const total = filteredSchedules.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const schedules = filteredSchedules.slice(startIndex, endIndex);

    return HttpResponse.json({
      schedules,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  }),

  // GET schedule by ID
  http.get("/api/schedules/:id", ({ params }) => {
    const { id } = params;
    const schedule = allSchedules.find((s) => s.id === parseInt(id as string));

    if (!schedule) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(schedule);
  }),

  // POST new schedule
  http.post("/api/schedules", async ({ request }) => {
    const body = await request.json();
    const newSchedule = {
      id: allSchedules.length + 1,
      ...body,
      createdAt: new Date().toISOString(),
    };

    allSchedules.push(newSchedule);

    return HttpResponse.json(newSchedule, { status: 201 });
  }),
];
