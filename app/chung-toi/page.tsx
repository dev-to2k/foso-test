import Breadcrumb from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
};

export default function About() {
  return (
    <div className="container mx-auto min-h-screen pt-10">
      <div className="flex flex-col items-center">
        <p className="mb-4">About Page</p>
        <Breadcrumb autoGenerate />
      </div>
    </div>
  );
}
