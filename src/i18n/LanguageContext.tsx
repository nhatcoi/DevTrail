'use client';

import React, { createContext, useContext, useState } from 'react';
import type { Locale } from './i18n-config';
import { i18n } from './i18n-config';

// Import the dictionary type from the JSON file
type Dictionary = {
  common: {
    title: string;
    description: string;
    keywords: string;
    loading: string;
    error: string;
    success: string;
    save: string;
    cancel: string;
    edit: string;
    delete: string;
    confirm: string;
    back: string;
  };
  header: {
    home: string;
    cv: string;
    portfolio: string;
    login: string;
    register: string;
    profile: string;
    settings: string;
    logout: string;
  };
  footer: {
    rights: string;
    powered: string;
    features: string;
    pricing: string;
    contact: string;
    about: string;
    terms: string;
    privacy: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      users: string;
      stats: {
        users: string;
        cvs: string;
        companies: string;
      };
    };
    features: {
      title: string;
      subtitle: string;
      items: {
        cv: {
          title: string;
          description: string;
        };
        portfolio: {
          title: string;
          description: string;
        };
        share: {
          title: string;
          description: string;
        };
        analytics: {
          title: string;
          description: string;
        };
      };
      list: Array<{
        title: string;
        description: string;
      }>;
    };
    advanced: {
      title: string;
      subtitle: string;
      import: {
        title: string;
        description: string;
      };
      customize: {
        title: string;
        description: string;
      };
      share: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
    why: {
      title: string;
      subtitle: string;
      tech: {
        title: string;
        subtitle: string;
        points: string[];
      };
      hiring: {
        title: string;
        subtitle: string;
        points: string[];
      };
      performance: {
        title: string;
        subtitle: string;
        points: string[];
      };
    };
    pricing: {
      title: string;
      subtitle: string;
      free: {
        name: string;
        price: string;
        description: string;
        features: string[];
      };
      pro: {
        name: string;
        price: string;
        description: string;
        features: string[];
      };
      team: {
        name: string;
        price: string;
        description: string;
        features: string[];
      };
    };
    cta: {
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
  };
  auth: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      remember: string;
      forgot: string;
      submit: string;
      or: string;
      noAccount: string;
      register: string;
    };
    register: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      password: string;
      confirm: string;
      terms: string;
      submit: string;
      or: string;
      hasAccount: string;
      login: string;
    };
  };
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: Dictionary;
  setDictionary: (dictionary: Dictionary) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultDictionary,
}: {
  children: React.ReactNode;
  defaultDictionary: Dictionary;
}) {
  const [locale, setLocale] = useState<Locale>(i18n.defaultLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(defaultDictionary);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        dictionary,
        setDictionary,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 