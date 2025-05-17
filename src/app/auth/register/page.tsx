'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { useAuth } from '@/lib/firebase/AuthContext';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import { FirebaseError } from 'firebase/app';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp, signInWithGoogle, signInWithGithub, updateUserProfile } = useAuth();
  const router = useRouter();
  const { dictionary } = useLanguage();
  const { register } = dictionary.auth;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Đăng ký tài khoản
      await signUp(email, password);
      // Cập nhật tên hiển thị
      await updateUserProfile(name);
      // Chuyển hướng đến dashboard
      router.push('/dashboard');
    } catch (error: unknown) {
      console.error('Register error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('Đã xảy ra lỗi khi đăng ký');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (error: unknown) {
      console.error('Google login error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('Đã xảy ra lỗi khi đăng nhập với Google');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleGithubSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      await signInWithGithub();
      router.push('/dashboard');
    } catch (error: unknown) {
      console.error('Github login error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('Đã xảy ra lỗi khi đăng nhập với GitHub');
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">{register.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {register.subtitle}
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition disabled:opacity-70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
              </svg>
              <span>Đăng ký với Google</span>
            </button>
            
            <button
              onClick={handleGithubSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition disabled:opacity-70"
            >
              <Github size={20} />
              <span>Đăng ký với GitHub</span>
            </button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">{register.or}</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {register.name}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
                required
                disabled={loading}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {register.email}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
                required
                disabled={loading}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                {register.password}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-900"
                required
                disabled={loading}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition disabled:opacity-70"
            >
              {loading ? 'Đang xử lý...' : register.submit}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {register.hasAccount}{' '}
              <Link href="/auth/login" className="text-blue-600 hover:underline">
                {register.login}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 