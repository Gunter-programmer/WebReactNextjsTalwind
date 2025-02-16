"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [error, setError] = useState("");
  const router = useRouter(); // Хук для редиректа

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // Отключаем автоматический редирект
      });

      if (res.error) {
        setError(res.error);
      } else {
        // Перенаправление на страницу профиля
        router.push("/profile");
      }
    } catch (err) {
      console.error("Ошибка входа:", err);
      setError("Произошла ошибка, попробуйте снова");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Войти</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div>
          <label>Пароль</label>
          <input
            type="password"
            name="password"
            required
            className="w-full border p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
