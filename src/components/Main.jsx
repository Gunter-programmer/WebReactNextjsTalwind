"use client"; // Указываем, что компонент должен быть клиентским

import React, { useState, useEffect } from "react";
import Section from "@/components/Section";

export default function Main() {
  // Массив фоновых изображений
  const backgrounds = [
    "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/fedor.webp",
    "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/electric_motor.webp",
    "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/orthosis_slider.webp",
  ];

  // Состояние для текущего фона
  const [currentBackground, setCurrentBackground] = useState(0);

  // Эффект смены фона каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // 5 секунд

    return () => clearInterval(interval); // Очистка таймера при размонтировании
  }, [backgrounds.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Блок с изображением */}
      <div
        className="relative w-full h-[70vh] bg-gray-900 flex justify-center items-center"
        style={{
          backgroundImage: `url('${backgrounds[currentBackground]}')`, // Меняем фон
          backgroundSize: "contain", // Полностью помещаем картинку
          backgroundRepeat: "no-repeat", // Отключаем повторение
          backgroundPosition: "center", // Центруем изображение
          transition: "background-image 1s ease-in-out", // Анимация смены фона
        }}
      >
        {/* Текст поверх картинки с ограничением ширины */}
        <div className="absolute top-1/4 left-8 text-white max-w-md">
          <h1 className="text-3xl font-bold mb-4">Добро пожаловать!</h1>
          <p className="text-lg leading-relaxed">
            Здесь вы найдете последние новости, важные обновления и ваши достижения. Мы стремимся вдохновлять и развивать технологии!
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-grow p-8 bg-white shadow-lg rounded-t-lg">
        {/* Блоки в три ряда */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Раздел 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Новости</h2>
            <p className="mb-4">
              В мире технологий появляются новые роботы, которые могут помогать в повседневной жизни.
            </p>
            <img
              src="https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/fedor.webp"
              alt="Робот"
              className="w-full h-auto rounded-md mb-4"
            />
            <button className="bg-yellow-700 text-white py-2 px-4 rounded-md mx-auto block">
              Продолжить <span className="ml-2">&rarr;</span>
            </button>
          </div>

          {/* Раздел 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Новые изменения</h2>
            <p className="mb-4">
              Недавно мы добавили новые модули для управления электродвигателями. Смотрите демонстрацию ниже:
            </p>
            <img
              src="https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/electric_motor.webp"
              alt="Электродвигатель"
              className="w-full h-auto rounded-md mb-4"
            />
            <button className="bg-yellow-700 text-white py-2 px-4 rounded-md mx-auto block">
              Продолжить <span className="ml-2">&rarr;</span>
            </button>
          </div>

          {/* Раздел 3 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ваши достижения</h2>
            <p className="mb-4">
              Поздравляем всех участников, которые завершили испытания с ортостатическими протезами!
            </p>
            <img
              src="https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/orthosis_slider.webp"
              alt="Ортотическая система"
              className="w-full h-auto rounded-md mb-4"
            />
            <button className="bg-yellow-700 text-white py-2 px-4 rounded-md mx-auto block">
              Продолжить <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Дополнительное пространство для прокрутки */}
        <div className="h-64"></div>
      </main>
    </div>
  );
}
