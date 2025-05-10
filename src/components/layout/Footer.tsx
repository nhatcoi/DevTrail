import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevTrail✨
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm max-w-sm">
              Nền tảng tạo và quản lý CV, portfolio chuyên nghiệp dành cho dân IT. Được phát triển với Next.js và Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">Tính năng</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/cv" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Quản lý CV
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Tạo Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Tính năng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">Liên hệ</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:support@devtrail.website" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  support@devtrail.website
                </a>
              </li>
              <li>
                <a href="https://github.com/devtrail" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/devtrail" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DevTrail. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
} 