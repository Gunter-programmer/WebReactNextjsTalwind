"use client"; // Указываем, что компонент должен быть клиентским

import React, { useState, useEffect } from "react";

export default function Main() {
  const backgrounds = [
    "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/fedor.webp",
    "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/electric_motor.webp",
    "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/orthosis_slider.webp",
  ];

  const [currentBackground, setCurrentBackground] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const sections = [
    {
      id: 1,
      title: "Новости",
      description:
        "В мире технологий появляются новые роботы, которые могут помогать в повседневной жизни.",
      image:
        "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/fedor.webp",
      expandedContent: (
        <>
          <p className="mb-4">
            Роботы теперь могут выполнять задачи, которые раньше считались
            исключительно человеческими. Они участвуют в спасательных операциях,
            уборке, медицине и других областях.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="https://avatars.mds.yandex.net/i?id=aa521f02cffee4433b68a2524639ad17_l-5192743-images-thumbs&n=13"
                alt="Робот в спасательной операции"
                className="w-full rounded-md mb-4"
              />
              <p>Робот-спасатель, помогающий в чрезвычайных ситуациях.</p>
              <a
                href="https://example.com/rescue_robot"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Подробнее →
              </a>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/originals/df/14/b7/df14b7fb6b2ea3703cc9af29902c2ca8.jpg"
                alt="Робот для уборки"
                className="w-full rounded-md mb-4"
              />
              <p>Умные роботы, которые облегчают домашние дела.</p>
              <a
                href="https://example.com/cleaning_robot"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Подробнее →
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      title: "Новые изменения",
      description:
        "Мы добавили новые модули для управления электродвигателями. Смотрите демонстрацию!",
      image:
        "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/electric_motor.webp",
      expandedContent: (
        <>
          <p className="mb-4">
            Новые модули управления электродвигателями позволяют увеличить их
            производительность и снизить энергопотребление.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="https://olnisa.ru/olnisa/images/img-08/21062024-20/ehlektrodvigatel-siemens-kupit-v-krasnoyarske-02.jpg"
                alt="Модернизация электродвигателей"
                className="w-full rounded-md mb-4"
              />
              <p>
                Пример модернизации электродвигателя для промышленного
                применения.
              </p>
              <a
                href="https://example.com/electric_motor_upgrade"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Подробнее →
              </a>
            </div>
            <div>
              <img
                src="https://cdn.culture.ru/images/9acbe212-132d-51ad-b92f-c7246bb982e9"
                alt="Энергосберегающие технологии"
                className="w-full rounded-md mb-4"
              />
              <p>
                Новейшие технологии для повышения энергоэффективности
                производства.
              </p>
              <a
                href="https://example.com/energy_efficiency"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Подробнее →
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      title: "Ваши достижения",
      description:
        "Поздравляем участников, завершивших испытания с ортостатическими протезами!",
      image:
        "https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/orthosis_slider.webp",
      expandedContent: (
        <>
          <p className="mb-4">
            Новые достижения в области протезирования помогают людям восстанавливать
            мобильность и улучшать качество жизни.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <img
                src="https://avatars.mds.yandex.net/i?id=bd428a02e2dc3d96497cd54c59c17fc5-5150774-images-thumbs&n=13"
                alt="Демонстрация протеза"
                className="w-full rounded-md mb-4"
              />
              <p>
                Испытания новых ортотических систем на международной выставке.
              </p>
              <a
                href="https://example.com/prosthetics_demo"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Подробнее →
              </a>
            </div>
            <div>
              <img
                src="https://content.onliner.by/news/original_size/fb91b4cd4d9823e113ff512a6ea255a0.jpeg"
                alt="Пользователи протезов"
                className="w-full rounded-md mb-4"
              />
              <p>
                Реальные истории успеха людей, использующих наши системы.
              </p>
              <a
                href="https://example.com/orthosis_users"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Подробнее →
              </a>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-100">
      {/* Фоновое изображение */}
      <div
        className="relative w-full h-[70vh] flex justify-center items-center shadow-lg"
        style={{
          backgroundImage: `url('${backgrounds[currentBackground]}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10 text-center px-8"> {/* Добавлен px-8 для отступов */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
            Добро пожаловать в мир технологий!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-slide-up px-8"> {/* Добавлен px-8 для отступов */}
            Мы помогаем создавать инновации, вдохновляем и разрабатываем решения
            для будущего.
          </p>
        </div>
      </div>

      {/* Основной контент */}
      <main className="flex-grow p-8 bg-gray-100 text-gray-900 rounded-t-3xl shadow-inner">
        {expandedSection ? (
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md mb-4 transition-all"
              onClick={() => setExpandedSection(null)}
            >
              ← Назад
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {sections.find((section) => section.id === expandedSection).title}
            </h2>
            <div>
              {
                sections.find((section) => section.id === expandedSection)
                  .expandedContent
              }
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {section.title}
                </h2>
                <p className="mb-4 text-gray-700">{section.description}</p>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto rounded-md mb-4"
                />
                <button
                  className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md w-full transition-all duration-300"
                  onClick={() => setExpandedSection(section.id)}
                >
                  Подробнее <span className="ml-2">&rarr;</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}