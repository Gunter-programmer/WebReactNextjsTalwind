import React from 'react';

export default function Page() {
  const courses = [
    {
      title: 'Современная веб-разработка',
      description: 'Освой продвинутую вёрстку, Flexbox, Grid, адаптивность и оптимизацию фронтенда.',
      imageUrl: 'https://cdn-edge.kwork.ru/pics/t3/89/17874395-1637840390.jpg',
      link: 'https://stepik.org/course/114109/promo?search=6647746582'
    },
    {
      title: 'Python: от основ к продвинутым концепциям',
      description: 'Разбери не только синтаксис Python, но и генераторы, декораторы, асинхронность.',
      imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/9123373/pub_63ecfeb6f7f41f0727469534_63ef631729138056e7aeea0c/scale_1200',
      link: 'https://stepik.org/course/512/'
    },
    {
      title: 'Алгоритмы и структуры данных для разработчиков',
      description: 'Разберись в хеш-таблицах, графах, деревьях, жадных алгоритмах и динамическом программировании.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=4686b04a730fb967e4f800fcff36fa29_l-5236410-images-thumbs&n=13',
      link: 'https://stepik.org/course/431/'
    },
    {
      title: 'Разработка мобильных приложений на Kotlin',
      description: 'Изучи архитектуру Android-приложений, работу с API, UI-компоненты и управление состоянием.',
      imageUrl: 'https://i.pinimg.com/originals/54/ec/87/54ec87d7e48097c5150e6715ec71a5d8.png',
      link: 'https://stepik.org/course/305/'
    },
    {
      title: 'Машинное обучение: от основ к практике',
      description: 'Научись применять библиотеки TensorFlow, PyTorch и работать с нейросетями.',
      imageUrl: 'https://i.pinimg.com/originals/2f/ff/5c/2fff5ce00cd386acc0b8bd2d06a5c6cb.jpg',
      link: 'https://stepik.org/course/112/'
    },
    {
      title: 'SQL и оптимизация баз данных',
      description: 'Работа с PostgreSQL и MySQL, индексирование, транзакции, оптимизация запросов.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=207f716065ccf29725caa8a7d63b82bb_l-5342624-images-thumbs&n=13',
      link: 'https://stepik.org/course/271/'
    },
    {
      title: 'Java: от основ до продвинутых техник',
      description: 'Освой Java Core, многопоточность, паттерны проектирования и работу с Spring.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=eea8d8aad6ccb8372db6f9ca06a8ab2377c73cec-5910394-images-thumbs&n=13',
      link: 'https://stepik.org/course/124/'
    },
    {
      title: 'Кибербезопасность и защита информации',
      description: 'Практики защиты данных, анализ уязвимостей, атаки и их предотвращение.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=f650f362ddf581a4104247d5820e2faa_l-10137431-images-thumbs&n=13',
      link: 'https://stepik.org/course/63454/'
    },
    {
      title: 'Анализ данных и визуализация',
      description: 'Работа с Pandas, Matplotlib, Seaborn, обработка и представление данных.',
      imageUrl: 'https://s.yimg.com/ny/api/res/1.2/Y1sxhA_3ohGsCoauNRu3.w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD03MTA-/https://media.zenfs.com/en/techcrunch_350/b6be8a74363d54f27daee5a2294ad97c',
      link: 'https://stepik.org/course/4852/'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {courses.map((course, index) => (
        <a key={index} href={course.link} target="_blank" rel="noopener noreferrer" className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition">
          <img src={course.imageUrl} alt={course.title} className="w-full h-80 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-bold">{course.title}</h2>
          <p className="text-sm text-gray-600">{course.description}</p>
        </a>
      ))}
    </div>
  );
}
