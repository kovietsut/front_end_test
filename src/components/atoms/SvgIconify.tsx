import { svgSources } from "@/helpers/icons";

type Props = {
  name: string;
  style?: React.CSSProperties;
  className?: string;
};

const SVGIconify = ({ name, style, className }: Props) => {
  const SvgComponent = svgSources[name];

  if (!SvgComponent) {
    return null;
  }

  return (
    <div style={style} className={className}>
      {SvgComponent}
    </div>
  );
};

export default SVGIconify;
