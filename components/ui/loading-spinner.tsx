export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block relative w-20 h-20">
          <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-transparent border-t-[#1AD598] rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-xl font-medium text-gray-700">Đang tải...</p>
      </div>
    </div>
  );
}
