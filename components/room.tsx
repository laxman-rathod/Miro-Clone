"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: ReactNode;
}

export function Room({ children, roomId, fallback }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_prod_8yOnMv1fPguc8gqTEZohVH5kt5TelwzAVky_4t1i70Eyy2GsPgwblQ-8jY_XjYjL"
      }
    >
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
