// src/app/api/register/route.js
import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json(); // Парсим JSON-тело запроса
    const { email, password } = body;

    // Проверяем, что email и password предоставлены
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email и пароль обязательны" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Проверяем, существует ли пользователь
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Пользователь с таким email уже существует" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    // Хэшируем пароль
    const hashedPassword = await hash(password, 10);

    // Создаём нового пользователя
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return new Response(
      JSON.stringify({ message: "Пользователь успешно зарегистрирован" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Ошибка в API /register:", error);

    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
