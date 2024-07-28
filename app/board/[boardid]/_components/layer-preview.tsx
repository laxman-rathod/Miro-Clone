"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Rectange } from "./rectange";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionCOlor?: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionCOlor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }
    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectange
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionCOlor}
          />
        );
      default:
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
