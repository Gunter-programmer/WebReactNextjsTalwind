import { compare } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Проверяем, что email и password предоставлены
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email и пароль обязательны" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Проверяем, существует ли пользователь
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Неверный email или пароль" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Сравниваем введённый пароль с сохранённым в базе
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Неверный email или пароль" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Если проверка успешна, возвращаем успех
    return new Response(
      JSON.stringify({
        message: "Успешный вход",
        user: { id: user.id, email: user.email },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Ошибка в API /login:", error);

    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
