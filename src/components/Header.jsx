import React from "react";


export default function Header(){
  return(
  <>
    {/* Навигационная панель */}
    <nav
    className="bg-gray-800 text-white bg-cover bg-center"
    style={{
    backgroundImage: "url('/fon.png')", // Фон панели
    }}
    >
    <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-12">
    <div className="flex justify-between items-center h-16">
      {/* Меню */}
      <div className="hidden md:flex space-x-12 items-center">
        <a
          href="/General"
          className="relative px-7 text-gray-100 transition hover:bg-gray-600 bg-opacity-50"
        >
          Главная
          <span className="absolute inset-0 border-2 border-transparent hover:border-gray-400 rounded"></span>
        </a>
        <a
          href="Courses/"
          className="relative px-7 text-gray-100 transition hover:bg-gray-600 bg-opacity-50"
        >
          Курсы
          <span className="absolute inset-0 border-2 border-transparent hover:border-gray-400 rounded"></span>
        </a>
        <a
          href="Self_learning"
          className="relative px-7 text-gray-100 transition hover:bg-gray-600 bg-opacity-50"
        >
          Самообучение
          <span className="absolute inset-0 border-2 border-transparent hover:border-gray-400 rounded"></span>
        </a>
      </div>
      {/* Кнопки */}
      <div className="flex space-x-4 items-center">
        <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700">
          Логин
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700">
          Вход
        </button>
      </div>
    </div>
    </div>
    </nav>
  </>
  );
}