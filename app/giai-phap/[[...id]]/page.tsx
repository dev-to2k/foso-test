interface SolutionDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SolutionDetailsPage({
  params,
}: SolutionDetailsPageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto max-w-[1440px] mt-12 text-center">
      <h1>Giải pháp chi tiết</h1>
      <p>Đây là nội dung chi tiết của giải pháp.</p>
      <p className="font-bold">ID: {id}</p>
    </div>
  );
}
