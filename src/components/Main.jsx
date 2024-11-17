import React from "react";
import Section from "@/components/Section";

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Блок с изображением */}
      <div
        className="w-full h-[70vh] bg-gray-800 flex justify-center items-center"
        style={{
          backgroundImage: "url('https://npo-at.com/wp-content/themes/npo-at-com-2022/assets/img/fedor.webp')", // Фон сайта
          backgroundSize: "contain", // Полностью помещаем картинку
          backgroundRepeat: "no-repeat", // Отключаем повторение
          backgroundPosition: "center", // Центруем изображение
        }}
      ></div>

      {/* Основной контент */}
      <main className="flex-grow p-8 space-y-8 -mt-8 bg-white shadow-lg rounded-t-lg">
        <Section id="section1" title="News" content="Интересные новости" />
        <Section id="section2" title="Новые изменения" content="Анонсы" />
        <Section id="section3" title="Ваши достижения" content="Звездочки" />

        {/* Дополнительное пространство для прокрутки */}
        <div className="h-64"></div>
      </main>
    </div>
  );
}
