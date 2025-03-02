import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.ok) {
      setError("Неверный email или пароль");
    } else {
      // Перенаправление в личный кабинет
      window.location.href = "/profile";
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
