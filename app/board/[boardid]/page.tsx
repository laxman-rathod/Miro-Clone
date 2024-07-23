import { Canvas } from "./_components/canvas";

interface BoardIdPageParams {
  params: { boardId: string };
}

const BoardIdPage = ({ params }: BoardIdPageParams) => {
  return <Canvas boardId={params.boardId} />;
};

export default BoardIdPage;
