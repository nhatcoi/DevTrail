'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/firebase/AuthContext';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  
  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);
  
  // Hiển thị loading khi đang kiểm tra trạng thái đăng nhập
  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-lg">Đang tải...</p>
      </div>
    );
  }
  
  // Nếu không có user (và đang chuyển hướng), hiển thị loading
  if (!user) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-lg">Đang chuyển hướng...</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <button
              onClick={() => logout()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Đăng xuất
            </button>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Thông tin tài khoản</h2>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/100'}
                  alt={user.displayName || 'User'}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{user.displayName || 'Người dùng'}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email đã xác minh</p>
                  <p>{user.emailVerified ? 'Đã xác minh' : 'Chưa xác minh'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">ID người dùng</p>
                  <p className="truncate">{user.uid}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">CV của bạn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">CV Frontend Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Cập nhật gần đây: 12/06/2023</p>
                <div className="flex justify-end">
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition">
                    Chỉnh sửa
                  </button>
                </div>
              </div>
              
              <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 flex items-center justify-center">
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  + Tạo CV mới
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 