import Link from "next/link";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Portfolio cá nhân</h1>
        
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Tạo Portfolio từ CV của bạn</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Bạn cần tạo CV trước khi có thể xuất bản portfolio cá nhân. Tạo CV ngay để bắt đầu.
            </p>
            <div className="flex justify-center">
              <Link
                href="/cv"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
              >
                Quản lý CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 