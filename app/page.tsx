import CandidateInformation from "@/components/candidate-information";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Trang chủ',
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <CandidateInformation />
    </div>
  );
}
