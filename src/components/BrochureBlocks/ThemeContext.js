import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  'public-blue': {
    name: 'public-blue',
    tokens: {
      primary: '#002260',      // 부산대 딥 네이비
      primaryMid: '#026bff',   // 미디엄 블루
      primaryLight: '#5092ff', // 스카이 블루
      accent: '#e34c4b',       // 포인트 레드
      accentSoft: '#ec7b7d',   // 소프트 레드
      teal: '#6fcbae',
      background: '#f8fafc',
      cardBg: '#ffffff',
      border: '#d0dbe8',
      fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, sans-serif',
      radius: '12px',
      radiusCard: '16px',
      shadow: '0 4px 16px rgba(0, 34, 96, 0.08)',
      shadowCard: '0 2px 12px rgba(0, 34, 96, 0.10)',
      gradientPrimary: 'linear-gradient(135deg, #002260 0%, #026bff 100%)',
      gradientAccent: 'linear-gradient(135deg, #e34c4b 0%, #f57100 100%)',
      heroBg: 'linear-gradient(145deg, #040d1a 0%, #0a1e3f 40%, #1a4fa0 80%, #0c4a6e 100%)',
    }
  },
  'startup-gradient': {
    name: 'startup-gradient',
    tokens: {
      primary: '#6366f1',      // Indigo
      primaryMid: '#8b5cf6',   // Violet
      primaryLight: '#a78bfa', // Light Violet
      accent: '#f43f5e',       // Rose
      accentSoft: '#fb7185',   // Soft Rose
      teal: '#2dd4bf',
      background: '#09090b',   // Sleek Dark Theme
      cardBg: '#18181b',
      border: '#27272a',
      fontFamily: '"GmarketSans", "Pretendard", -apple-system, sans-serif',
      radius: '24px',          // Framer-style bubbly rounded
      radiusCard: '20px',
      shadow: '0 8px 30px rgba(99, 102, 241, 0.15)',
      shadowCard: '0 4px 20px rgba(0, 0, 0, 0.3)',
      gradientPrimary: 'linear-gradient(135deg, #6366f1 0%, #d946ef 100%)',
      gradientAccent: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
      heroBg: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)',
    }
  },
  'minimal-light': {
    name: 'minimal-light',
    tokens: {
      primary: '#18181b',      // Zinc 900
      primaryMid: '#3f3f46',   // Zinc 700
      primaryLight: '#71717a', // Zinc 500
      accent: '#f59e0b',       // Amber
      accentSoft: '#fbbf24',   // Soft Amber
      teal: '#10b981',
      background: '#ffffff',
      cardBg: '#fafafa',
      border: '#e4e4e7',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      radius: '0px',           // Premium architectural square borders
      radiusCard: '0px',
      shadow: 'none',
      shadowCard: 'none',
      borderCard: '1px solid #e4e4e7',
      gradientPrimary: 'linear-gradient(135deg, #18181b 0%, #3f3f46 100%)',
      gradientAccent: 'linear-gradient(135deg, #18181b 0%, #f59e0b 100%)',
      heroBg: 'linear-gradient(180deg, #fafafa 0%, #eaeaea 100%)',
    }
  }
};

export const ThemeProvider = ({ children, initialTheme = 'public-blue' }) => {
  const [themeName, setThemeName] = useState(initialTheme);

  // 로컬스토리지나 URL 등을 통해 테마 동기화 가능
  useEffect(() => {
    const savedTheme = localStorage.getItem('brochure-theme');
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
  }, []);

  const changeTheme = (name) => {
    if (themes[name]) {
      setThemeName(name);
      localStorage.setItem('brochure-theme', name);
    }
  };

  const currentTheme = themes[themeName] || themes['public-blue'];

  // Global variables injection to support CSS integration
  useEffect(() => {
    const root = document.documentElement;
    const tokens = currentTheme.tokens;
    
    // Inject core CSS variables on :root dynamically
    Object.keys(tokens).forEach(key => {
      const cssKey = `--theme-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssKey, tokens[key]);
    });
    
    root.setAttribute('data-brochure-theme', themeName);
  }, [themeName, currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Context가 없는 바깥 환경(예: Docusaurus 기본 페이지 중 context 미바인딩 영역)에서도 
    // 크래시 없이 기본 테마를 제공하도록 안전장치 마련
    return {
      theme: themes['public-blue'],
      changeTheme: () => {}
    };
  }
  return context;
};
