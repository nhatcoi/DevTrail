'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { Github } from 'lucide-react';
import { useAuth } from '@/lib/firebase/AuthContext';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import { FirebaseError } from 'firebase/app';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signInWithGoogle, signInWithGithub } = useAuth();
  const router = useRouter();
  const { dictionary } = useLanguage();
  const { login } = dictionary.auth;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await signIn(email, password);
      router.push('/dashboard');
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        setError('Error logging in');
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
        setError('Error logging in with Google');
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
        setError('Error logging in with GitHub');
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto py-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">{login.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {login.subtitle}
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
              <FcGoogle size={20} />
              <span>{login.or} Google</span>
            </button>
            
            <button
              onClick={handleGithubSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition disabled:opacity-70"
            >
              <Github size={20} />
              <span>{login.or} GitHub</span>
            </button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">{login.or}</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {login.email}
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
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  {login.password}
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                  {login.forgot}
                </Link>
              </div>
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
              {loading ? 'Đang xử lý...' : login.submit}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {login.noAccount}{' '}
              <Link href="/auth/register" className="text-blue-600 hover:underline">
                {login.register}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 