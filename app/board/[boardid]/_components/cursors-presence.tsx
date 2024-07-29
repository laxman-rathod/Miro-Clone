"use client";

import { memo } from "react";
import { Path } from "./path";
import { Cursor } from "./cursor";
import { colorToCss } from "@/lib/utils";
import {
  shallow,
  useOthersConnectionIds,
  useOthersMapped,
} from "@liveblocks/react/suspense";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const Drafts = () => {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      penColor: other.presence.penColor,
    }),
    shallow
  );

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              x={0}
              y={0}
              key={key}
              fill={other.penColor ? colorToCss(other.penColor) : "#000000"}
              points={other.pencilDraft}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      <Drafts />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
