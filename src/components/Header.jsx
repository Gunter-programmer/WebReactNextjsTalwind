"use client"; // Указываем, что компонент клиентский

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession(); // Получаем информацию о сессии
  const [userName, setUserName] = useState(""); // Для хранения имени пользователя
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Состояние мобильного меню

  // Логирование сессии для отладки
  useEffect(() => {
    console.log("Session data:", session); // Логируем данные сессии для проверки
    if (session?.user?.name) {
      setUserName(session.user.name); // Обновляем имя, если оно есть
    } else {
      setUserName(""); // Если сессия пустая, очищаем имя
    }
  }, [session]); // Следим за изменением сессии

  // Проверяем состояние сессии (загрузка, авторизация)
  if (status === "loading") {
    return <p>Загрузка...</p>; // Показать сообщение, пока сессия загружается
  }

  // Функция для выхода из системы с перенаправлением на главную страницу
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });  // После выхода перенаправляем на главную страницу
  };

  return (
    <>
      {/* Навигационная панель */}
      <nav
        className="bg-gray-800 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/fon.png')", // Фон панели
        }}
      >
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center h-16 relative">
            {/* Логотип слева */}
            <div className="flex items-center">
              <Link href="/">
                <img
                  src="/fon_logo.png"
                  alt="Логотип"
                  className="h-16 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Кнопка мобильного меню */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Меню для десктопа */}
            <div className="hidden md:flex space-x-12 items-center">
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
            <div className="hidden md:flex space-x-4 items-center">
              {session ? (
                <>
                  {/* Приветствие пользователя */}
                  <p className="text-gray-200">Привет!</p>
                  <button
                    onClick={handleSignOut}  // Вызов функции для выхода
                    className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700 w-full"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  {/* Кнопка Войти */}
                  <button
                    onClick={() => signIn()}
                    className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700 w-full"
                  >
                    Войти
                  </button>
                  {/* Кнопка Регистрация */}
                  <Link href="/register">
                    <button className="bg-yellow-600 px-4 py-2 rounded text-white hover:bg-yellow-700 w-full">
                      Регистрация
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Мобильное меню */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-700">
              <div className="flex flex-col space-y-4 p-4">
                <Link
                  href="/"
                  className="text-gray-100 hover:bg-gray-600 px-4 py-2 rounded text-center"
                >
                  Главная
                </Link>
                <Link
                  href="/Courses"
                  className="text-gray-100 hover:bg-gray-600 px-4 py-2 rounded text-center"
                >
                  Курсы
                </Link>
                <Link
                  href="/Self_learning"
                  className="text-gray-100 hover:bg-gray-600 px-4 py-2 rounded text-center"
                >
                  Самообучение
                </Link>
                {session ? (
                  <>
                    <p className="text-gray-200 text-center">Привет!</p>
                    <button
                      onClick={handleSignOut}
                      className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700 w-full"
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => signIn()}
                      className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700 w-full"
                    >
                      Войти
                    </button>
                    <Link href="/register">
                      <button className="bg-yellow-600 px-4 py-2 rounded text-white hover:bg-yellow-700 w-full">
                        Регистрация
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}