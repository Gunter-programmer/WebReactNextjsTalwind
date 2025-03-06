"use client";

import React, { useState, useRef, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat"; // Иконка чата из MUI
import CloseIcon from "@mui/icons-material/Close"; // Иконка закрытия из MUI
import FullscreenIcon from "@mui/icons-material/Fullscreen"; // Иконка разворачивания
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit"; // Иконка сворачивания

export default function MiniChat() {
  const [isOpen, setIsOpen] = useState(false); // Чат изначально скрыт
  const [isFullScreen, setIsFullScreen] = useState(false); // Полноэкранный режим
  const [messages, setMessages] = useState([
    { text: "Здравствуй! Я Фёдор, твой помощник в мире знаний, могу я вам чем нибудь помочь?", sender: "bot" },
  ]); // Список сообщений с приветствием
  const [input, setInput] = useState(""); // Поле ввода

  const messagesEndRef = useRef(null); // Реф для контейнера с сообщениями

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]); // Добавляем новое сообщение от пользователя
      setInput(""); // Очищаем поле ввода

      // Пример ответа бота
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Спасибо за ваше сообщение! Чем могу помочь?", sender: "bot" },
        ]);
      }, 1000); // Задержка для ответа бота
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage(); // Отправляем сообщение при нажатии Enter
    }
  };

  // Прокрутка вниз при изменении списка сообщений
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Прокрутка вниз при разворачивании чата
  const handleChatOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); // Ждем, пока DOM обновится
  };

  return (
    <>
      {/* Свёрнутый чат */}
      {!isOpen && (
        <div
          className="fixed bottom-4 right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-600"
          onClick={handleChatOpen} // Обработчик открытия чата
        >
          <ChatIcon />
        </div>
      )}

      {/* Открытый чат */}
      {isOpen && (
        <div
          className={`fixed ${
            isFullScreen
              ? "top-0 left-0 w-full h-full"
              : "bottom-4 right-4 w-80 h-auto"
          } bg-white shadow-lg rounded-lg border border-gray-300 z-50`}
        >
          {/* Заголовок чата */}
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Фёдор ассистент</h3>
            <div className="flex space-x-2">
              {/* Кнопка переключения полноэкранного режима */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="text-white"
              >
                {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
              </button>
              {/* Кнопка закрытия */}
              <button onClick={() => setIsOpen(false)} className="text-white">
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Список сообщений */}
          <div
            className={`p-4 overflow-y-auto ${
              isFullScreen ? "h-[calc(100%-120px)]" : "h-64"
            }`}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded shadow-sm max-w-[70%] ${
                  message.sender === "bot"
                    ? "bg-blue-100 text-left ml-0"
                    : "bg-gray-200 text-right ml-auto"
                }`}
              >
                {message.text}
              </div>
            ))}
            {/* Прокрутка до конца */}
            <div ref={messagesEndRef} />
          </div>

          {/* Поле ввода и кнопка */}
          <div className="flex p-2 border-t border-gray-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Обработчик нажатия клавиши
              className="flex-grow px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Введите сообщение..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-1 py-2 rounded-r-lg hover:bg-blue-600"
            >
              Отправить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
