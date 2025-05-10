'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    console.log('Login with:', { email, password });
  };
  
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Đăng nhập</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Đăng nhập để quản lý CV và portfolio của bạn
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <div className="mb-6">
            <button
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              <Github size={20} />
              <span>Đăng nhập với GitHub</span>
            </button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Hoặc đăng nhập với email</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
                required
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Mật khẩu
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Quên mật khẩu?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Đăng nhập
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Chưa có tài khoản?{' '}
              <Link href="/auth/register" className="text-blue-600 hover:underline">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 