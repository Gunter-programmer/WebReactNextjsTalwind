import React from "react";
import Section from "./Section";

export default function Main() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('https://kuzminki.mos.ru/photo_2022-10-20_13-26-58.jpg')", // Фон сайта
      }}
    >
      {/* Контент */}
      <main className="flex-grow p-8 space-y-8">
        <Section id="section1" title="News" content="Интересные новости" />
        <Section
          id="section2"
          title="Новые изменения"
          content="Анонсы"
        />
        <Section
          id="section3"
          title="Ваши достижения"
          content="Звездочки"
        />

        {/* Дополнительное пространство для прокрутки */}
        <div className="h-64"></div>
      </main>
    </div>
  );
}
