import Link from "next/link";

export default function CVPage() {
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Quản lý CV</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <div className="text-center p-12">
            <div className="mb-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 text-blue-600 mx-auto" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Bạn chưa có CV nào</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Tạo CV đầu tiên của bạn để bắt đầu quá trình xây dựng portfolio cá nhân.
            </p>
            <div className="flex justify-center">
              <Link
                href="/auth/login"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
              >
                Tạo CV mới
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}