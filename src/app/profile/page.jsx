"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const [education, setEducation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentProfession, setCurrentProfession] = useState("");
  const [targetProfession, setTargetProfession] = useState("");
  const [timeToAchieve, setTimeToAchieve] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [testResults, setTestResults] = useState([]); // Список результатов теста
  const [showTest, setShowTest] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile");
        if (!response.ok) {
          throw new Error("Ошибка загрузки профиля");
        }
        const data = await response.json();
        setEducation(data.education || "");
        setFirstName(data.firstName || "");
        setLastName(data.lastName || "");
        setCurrentProfession(data.currentProfession || "");
        setTargetProfession(data.targetProfession || "");
        setTimeToAchieve(data.timeToAchieve || "");
        setTestResults(data.testResults || []);
        setIsTestCompleted(data.testResults && data.testResults.length > 0);
      } catch (error) {
        console.error("Ошибка загрузки профиля:", error);
      }
    };
    fetchProfile();
  }, []);
  
  // Подгрузка данных профиля
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("/api/profile");
      const data = await response.json();

      setEducation(data.education || "");
      setFirstName(data.firstName || "");
      setLastName(data.lastName || "");
      setCurrentProfession(data.currentProfession || "");
      setTargetProfession(data.targetProfession || "");
      setTimeToAchieve(data.timeToAchieve || "");
      setTestResults(data.testResults || []); // Подгрузка всех результатов теста
      setIsTestCompleted(data.testResults && data.testResults.length > 0);
    };
    fetchProfile();
  }, []);

  // Сохранение профиля
  const handleSave = async () => {
    await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        education,
        firstName,
        lastName,
        currentProfession,
        targetProfession,
        timeToAchieve,
      }),
    });
    setIsEditing(false);
  };

  // Сохранение результатов теста
  const handleTestSubmit = async (answers) => {
    const response = await fetch("/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    const data = await response.json();
    setTestResults((prevResults) => [...prevResults, data.result]); // Добавление нового результата
    setIsTestCompleted(true);
    setShowTest(false);
  };

  // Пересдача теста
  const handleRetakeTest = () => {
    setShowTest(true);
    setIsTestCompleted(false);
  };

  if (!session) {
    return <p>Вы не авторизованы</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md space-y-6">
        <h1 className="text-2xl font-bold">Профиль</h1>

        {/* Имя и фамилия */}
        <div>
          <h2 className="text-lg font-bold">Имя и Фамилия</h2>
          {isEditing ? (
            <div className="space-y-2">
              <div>
                <label>Имя</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label>Фамилия</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>
          ) : (
            <p>
              {firstName} {lastName}{" "}
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-500"
              >
                Изменить
              </button>
            </p>
          )}
        </div>

        {/* Уровень образования */}
        <div>
          <h2 className="text-lg font-bold">Образование</h2>
          {isEditing ? (
            <div>
              <label>Уровень образования</label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full border p-2 rounded-md"
              >
                <option value="">Выберите уровень</option>
                <option value="Среднее">Среднее</option>
                <option value="Высшее">Высшее</option>
                <option value="Аспирантура">Аспирантура</option>
              </select>
            </div>
          ) : (
            <p>
              {education}{" "}
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-500"
              >
                Изменить
              </button>
            </p>
          )}
        </div>

        {/* Профессии */}
        <div>
          <h2 className="text-lg font-bold">Профессия</h2>
          {isEditing ? (
            <div className="space-y-2">
              <div>
                <label>Текущая профессия</label>
                <input
                  value={currentProfession}
                  onChange={(e) => setCurrentProfession(e.target.value)}
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label>К какой профессии стремитесь?</label>
                <div className="flex items-center space-x-2">
                  <input
                    value={targetProfession}
                    onChange={(e) => setTargetProfession(e.target.value)}
                    placeholder="Профессия"
                    className="flex-1 border p-2 rounded-md"
                  />
                  <input
                    value={timeToAchieve}
                    onChange={(e) => setTimeToAchieve(e.target.value)}
                    placeholder="Срок (мес.)"
                    className="w-24 border p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>
              Текущая профессия: {currentProfession || "Не указана"} <br />
              Целевая профессия: {targetProfession || "Не указана"}{" "}
              {timeToAchieve && `(срок достижения: ${timeToAchieve} мес.)`}{" "}
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-500"
              >
                Изменить
              </button>
            </p>
          )}
        </div>

        {isEditing && (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Сохранить
          </button>
        )}

        {/* Тест */}
        {!isTestCompleted && !showTest && (
          <button
            onClick={() => setShowTest(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Пройти тест
          </button>
        )}
        {showTest && !isTestCompleted && <TestForm onSubmit={handleTestSubmit} />}

        {/* Результаты теста */}
        {isTestCompleted && (
          <div>
            <h2 className="text-xl font-bold">Результаты теста:</h2>
    {testResults.length > 0 && (
      <p className="text-gray-500">
        Результат: {testResults[testResults.length - 1]}
      </p>
    )}
    <button
      onClick={handleRetakeTest}
      className="bg-blue-500 text-white px-4 py-2 rounded-md"
    >
      Пройти тест снова
    </button>
          </div>
        )}
      </div>
    </div>
  );
}

function TestForm({ onSubmit }) {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0]);
  const questions = [
    "Как часто Вы будете проходить курс, находясь в шумном помещении или в дороге?",
    "Как уверенно вы можете работать с системами контроля версий, такими как Git?",
    "Насколько комфортно вы чувствуете себя при решении алгоритмических задач?",
    "Как положительно вы относитесь к обучению новым языкам программирования и технологиям?",
    "Какая максимальная продолжительность курса для вас приемлема?",
    "Сколько времени в неделю вы готовы выделить на прохождение курса?",
  ];

  const handleChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = parseInt(value, 10);
    setAnswers(updatedAnswers);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {questions.map((q, index) => (
        <div key={index}>
          <label>{q}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={answers[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-full"
          />
          <p>Ваш ответ: {answers[index]}</p>
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Сохранить результаты
      </button>
    </form>
  );
}