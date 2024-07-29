import { getSvgPathFromStroke } from "@/lib/utils";
import getStroke from "perfect-freehand";

interface PathProps {
  x: number;
  y: number;
  fill: string;
  points: number[][];
  stroke?: string;
  onPointerDown?: (e: React.PointerEvent) => void;
}

export const Path = ({
  x,
  y,
  fill,
  stroke,
  points,
  onPointerDown,
}: PathProps) => {
  return (
    <path
      className="drop-shadow-md"
      onPointerDown={onPointerDown}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      d={getSvgPathFromStroke(
        getStroke(points, {
          size: 16,
          thinning: 0.5,
          smoothing: 0.5,
          streamline: 0.5,
        })
      )}
      x={0}
      y={0}
      fill={fill}
      stroke={stroke}
      strokeWidth={1}
    />
  );
};
