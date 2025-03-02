import { PrismaClient } from "@prisma/client"; // Import only once
import { getServerSession } from "next-auth/next"; // Import only once
import { authOptions } from "@/app/api/auth/route"; // Import only once

const prisma = new PrismaClient();

// Обработчик GET для получения профиля
export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.email) {
      return new Response(JSON.stringify({ error: "Не авторизован" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Пользователь не найден" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        education: user.education,
        firstName: user.firstName,
        lastName: user.lastName,
        currentProfession: user.currentProfession,
        targetProfession: user.targetProfession,
        timeToAchieve: user.timeToAchieve,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Ошибка загрузки профиля:", error);
    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}



export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user || !session.user.email) {
      return new Response(JSON.stringify({ error: "Не авторизован" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const {
      firstName,
      lastName,
      education,
      currentProfession,
      targetProfession,
      timeToAchieve,
    } = await req.json();

    console.log("Полученные данные:", {
      firstName,
      lastName,
      education,
      currentProfession,
      targetProfession,
      timeToAchieve,
    });

    // Проверка обязательных данных
    if (!firstName || !lastName || !education) {
      return new Response(
        JSON.stringify({ error: "Недостаточно данных для обновления" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Обновляем данные пользователя
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        firstName,
        lastName,
        education,
        currentProfession,
        targetProfession,
        timeToAchieve,
      },
    });

    return new Response(
      JSON.stringify({ message: "Данные успешно обновлены", updatedUser }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Ошибка сохранения профиля:", error);
    return new Response(
      JSON.stringify({ error: "Ошибка при сохранении данных" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
}

