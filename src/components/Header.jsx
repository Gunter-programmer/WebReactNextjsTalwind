import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Навигационная панель */}
      <nav
        className="bg-gray-800 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/fon.png')", // Фон панели
        }}
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="flex justify-between items-center h-16 relative">
            {/* Логотип слева */}
            <div
              className="absolute flex items-center"
              style={{ left: "-40px" }} // Смещение логотипа левее на 40px
            >
              <Link href="/">
                <img
                  src="/fon_logo.png"
                  alt="Логотип"
                  className="h-16 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Меню, выровненное по центру */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-12 items-center">
              <Link
                href="/"
                className="relative px-7 text-gray-100 transition hover:bg-gray-600 bg-opacity-50"
              >
                Главная
                <span className="absolute inset-0 border-2 border-transparent hover:border-gray-400 rounded"></span>
              </Link>
              <Link
                href="/Courses"
                className="relative px-7 text-gray-100 transition hover:bg-gray-600 bg-opacity-50"
              >
                Курсы
                <span className="absolute inset-0 border-2 border-transparent hover:border-gray-400 rounded"></span>
              </Link>
              <Link
                href="/Self_learning"
                className="relative px-7 text-gray-100 transition hover:bg-gray-600 bg-opacity-50"
              >
                Самообучение
                <span className="absolute inset-0 border-2 border-transparent hover:border-gray-400 rounded"></span>
              </Link>
            </div>

            {/* Кнопки справа */}
            <div
              className="absolute flex space-x-4 items-center"
              style={{ right: "-40px" }} // Смещение кнопок правее на 40px
            >
              <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700">
                Войти
              </button>
              <button
                className="bg-yellow-600 px-4 py-2 rounded text-white hover:bg-yellow-700"
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
