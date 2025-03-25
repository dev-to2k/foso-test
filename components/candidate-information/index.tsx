"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../ui/button";

export default function CandidateInformation() {
  const router = useRouter();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1AD598] to-[#17BF88] p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Thông tin ứng viên</h1>
        <p className="text-green-100">
          Bài test ứng tuyển vị trí Frontend Developer
        </p>
      </div>

      {/* Candidate Information */}
      <div className="p-6 border-b">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <Image
                  src="/images/profile/truong-thanh-trung.jpg"
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Trương Thành Trung
              </h2>
              <p className="text-gray-500 mb-2">Frontend Developer</p>
              <div className="flex space-x-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  React
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  NextJS
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Thông tin cá nhân
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">thanhtrung.1010.2k@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Số điện thoại</p>
                <p className="font-medium">0948 868 324</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ngày sinh</p>
                <p className="font-medium">10/10/2000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Địa chỉ</p>
                <p className="font-medium">Gò Vấp, TP. HCM, Việt Nam</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Kinh nghiệm làm việc
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">
                    Frontend Developer tại Portal Craft
                  </p>
                  <p className="text-sm text-gray-500">4/2022 - 1/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Submission */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Bài test đã nộp
        </h3>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h4 className="font-semibold text-gray-800">
                Frontend Developer Test
              </h4>
              <p className="text-sm text-gray-500">Nộp ngày: 15/03/2025</p>
            </div>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Đã hoàn thành
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Responsive Design</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Component Structure</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>State Management</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>API Integration</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            variant="fill"
            className="btn-primary text-white font-medium py-2 px-4 transition-colors"
            onClick={() => router.push("/tai-nguyen/blog")}
          >
            Xem chi tiết bài test
          </Button>
        </div>
      </div>
    </div>
  );
}
