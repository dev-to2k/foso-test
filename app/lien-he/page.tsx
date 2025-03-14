import Breadcrumb from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ",
};

export default function Contact() {
  return (
    <div className="container mx-auto min-h-screen pt-10">
      <div className="flex flex-col items-center">
        <p className="mb-4">Contact Page</p>
        <Breadcrumb autoGenerate />
      </div>
    </div>
  );
}
