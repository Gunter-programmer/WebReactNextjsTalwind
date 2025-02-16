import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Полученные данные:", body);

    const { answers } = body;

    // Проверка, что answers — массив чисел
    if (!Array.isArray(answers) || answers.some((item) => typeof item !== "number")) {
      console.error("Некорректный формат данных:", body);
      return NextResponse.json(
        { error: "Некорректные данные. Ожидается массив чисел." },
        { status: 400 }
      );
    }

    // Обработка данных теста (например, сумма баллов)
    const result = answers.reduce((sum, value) => sum + value, 0);

    console.log("Результат теста:", result);

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Ошибка обработки запроса:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
