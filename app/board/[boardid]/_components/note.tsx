import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { NoteLayer } from "@/types/canvas";
import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";
import { useMutation } from "@liveblocks/react/suspense";

const font = Kalam({ subsets: ["latin"], weight: ["400"] });

const calculateFontSize = (width: number, height: number) => {
  const MAX_FONT_SIZE = 96;
  const SCALE_FACTOR = 0.15;
  const FONT_SIZE_BASED_ON_HEIGHT = height * SCALE_FACTOR;
  const FONT_SIZE_BASED_ON_WIDTH = width * SCALE_FACTOR;

  return Math.min(
    FONT_SIZE_BASED_ON_HEIGHT,
    FONT_SIZE_BASED_ON_WIDTH,
    MAX_FONT_SIZE
  );
};

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Note = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(
    ({ storage }, newValue: string) => {
      const liveLayers = storage.get("layers");
      liveLayers.get(id)?.set("value", newValue);
    },
    [id]
  );

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      className="shadow-md drop-shadow-xl"
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCss(fill) : "#000000",
      }}
      onPointerDown={(e) => onPointerDown(e, id)}
    >
      <ContentEditable
        html={value || "Text"}
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
          font.className
        )}
        onChange={handleContentChange}
        style={{
          color: fill ? getContrastingTextColor(fill) : "#000000",
          fontSize: calculateFontSize(width, height),
        }}
      />
    </foreignObject>
  );
};
