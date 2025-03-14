import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">
          404 | Không tìm thấy trang
        </h2>
        <p className="text-gray-600 text-lg">Không thể tìm thấy tài nguyên.</p>
        <Link
          href="/"
          className="inline-block py-2 px-3 btn-primary text-sm text-white rounded-lg transition-colors duration-200"
        >
          Trở về trang chủ
        </Link>
      </div>
    </div>
  );
}
