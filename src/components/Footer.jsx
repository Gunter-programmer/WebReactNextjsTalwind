import React from 'react';

export default function Footer(){
  return(
  <>{/* Контакты */}
    <footer className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-semibold">Контакты</p>
        <p>
          Телефон поддержки:{" "}
          <a
            href="tel:+1234567890"
            className="text-blue-500 hover:underline"
          >
            +98889766452
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            support@example.com
          </a>
        </p>
        <p className="mt-2 text-sm">
          &copy; 2024 Эрудит. Все ваши права защищены.
        </p>
      </div>
  </footer>
  </>
);
}