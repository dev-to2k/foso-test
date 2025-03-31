import Breadcrumb from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
};

export default function About() {
  return (
    <div className="container mx-auto max-w-[1440px] mt-12 text-center">
      <p className="mb-4">About Page</p>
      <Breadcrumb autoGenerate className="justify-center" />
    </div>
  );
}
