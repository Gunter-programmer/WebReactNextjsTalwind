"use client"; // Указываем, что компонент клиентский

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession(); // Получаем информацию о сессии
  const [userName, setUserName] = useState(""); // Для хранения имени пользователя

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
            <div className="absolute flex items-center">
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
              style={{ right: "0px" }} // Смещение кнопок правее на 40px
            >
              {session ? (
                <>
                  {/* Приветствие пользователя */}
                  <p className="text-gray-200">Привет!</p>
                  <button
                    onClick={handleSignOut}  // Вызов функции для выхода
                    className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  {/* Кнопка Войти */}
                  <button
                    onClick={() => signIn()}
                    className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700"
                  >
                    Войти
                  </button>
                  {/* Кнопка Регистрация */}
                  <Link href="/register">
                    <button className="bg-yellow-600 px-4 py-2 rounded text-white hover:bg-yellow-700">
                      Регистрация
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
