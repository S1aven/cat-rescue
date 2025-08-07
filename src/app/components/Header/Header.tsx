"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {name: 'Главная', path: '/'},
    {name: 'Наши котики', path: '/cats'},
    {name: 'Как помочь', path: '/help'},
    {name: 'Истории', path: '/stories'},
    {name: 'Контакты', path: '/contacts'},
  ];

  return (
    <header
      className="sticky top-0 z-50 py-3 px-4 sm:px-6 h-16 flex items-center"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderBottom: '1px solid var(--header-border)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Логотип */}
        <Link href="/" className="flex-shrink-0 flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/logo_cat_rescue_light.png"
            alt="Логотип приюта для котиков"
            width={120}
            height={40}
            className="max-w-[120px] min-w-[100px] md:max-w-[120px]"
          />
        </Link>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="nav-link px-3 py-2 rounded-lg font-medium text-sm md:text-base"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Лозунг */}
        <div className="hidden lg:block">
          <div className="slogan-box px-4 py-2 rounded-full font-medium text-sm">
            Поможем котикам вместе!
          </div>
        </div>

        {/* Кнопка мобильного меню */}
        <button
          className="mobile-menu-button md:hidden ml-4 p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div
          className="mobile-menu absolute top-full left-0 right-0 shadow-lg"
          style={{
            backgroundColor: 'var(--header-bg)',
            borderBottom: '1px solid var(--header-border)'
          }}
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block px-6 py-3 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: 'var(--nav-text)'
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;