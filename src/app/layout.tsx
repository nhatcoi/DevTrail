import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/dictionaries";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { AuthProvider } from "@/lib/firebase/AuthContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(i18n.defaultLocale);
  
  return {
    title: dictionary.common.title,
    description: dictionary.common.description,
    keywords: dictionary.common.keywords,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dictionary = await getDictionary(i18n.defaultLocale);

  return (
    <html lang={i18n.defaultLocale}>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <LanguageProvider defaultDictionary={dictionary}>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
