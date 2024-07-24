import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageParams {
  params: { boardid: string };
}

const BoardIdPage = ({ params }: BoardIdPageParams) => {
  return (
    <Room roomId={params.boardid} fallback={<Loading />}>
      <Canvas boardId={params.boardid} />
    </Room>
  );
};

export default BoardIdPage;
