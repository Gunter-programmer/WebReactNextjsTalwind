import React from 'react';

export default function Page() {
  const courses = [
    {
      title: 'Вёрстка и веб-дизайн',
      description: 'В этом курсе вы найдете все о современной верстке сайтов, для быстрого старта в профессию веб разработчик!',
      imageUrl: 'https://cdn-edge.kwork.ru/pics/t3/89/17874395-1637840390.jpg',
      link: 'https://stepik.org/course/114109/promo?search=6647746582'
    },
    {
      title: 'Основы Python',
      description: 'Научись программировать на Python с нуля.',
      imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/9123373/pub_63ecfeb6f7f41f0727469534_63ef631729138056e7aeea0c/scale_1200',
      link: 'https://stepik.org/course/512/'
    },
    {
      title: 'Алгоритмы и структуры данных',
      description: 'Разбери основы алгоритмов и научись их применять.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=4686b04a730fb967e4f800fcff36fa29_l-5236410-images-thumbs&n=13',
      link: 'https://stepik.org/course/431/'
    },
    {
      title: 'Разработка мобильных приложений',
      description: 'Изучи Kotlin и начни создавать мобильные приложения.',
      imageUrl: 'https://i.pinimg.com/originals/54/ec/87/54ec87d7e48097c5150e6715ec71a5d8.png',
      link: 'https://stepik.org/course/305/'
    },
    {
      title: 'Введение в машинное обучение',
      description: 'Основы ML и нейросетей для новичков.',
      imageUrl: 'https://i.pinimg.com/originals/2f/ff/5c/2fff5ce00cd386acc0b8bd2d06a5c6cb.jpg',
      link: 'https://stepik.org/course/112/'
    },
    {
      title: 'Базы данных и SQL',
      description: 'Научись работать с SQL и управлять базами данных.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=207f716065ccf29725caa8a7d63b82bb_l-5342624-images-thumbs&n=13',
      link: 'https://stepik.org/course/271/'
    },
    {
      title: 'Java для начинающих',
      description: 'Изучи основы Java и объектно-ориентированного программирования.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=eea8d8aad6ccb8372db6f9ca06a8ab2377c73cec-5910394-images-thumbs&n=13',
      link: 'https://stepik.org/course/124/'
    },
    {
      title: 'Кибербезопасность для начинающих',
      description: 'Разбери основы защиты данных и сетей.',
      imageUrl: 'https://avatars.mds.yandex.net/i?id=f650f362ddf581a4104247d5820e2faa_l-10137431-images-thumbs&n=13',
      link: 'https://stepik.org/course/63454/'
    },
    {
      title: 'Основы анализа данных',
      description: 'Научись анализировать данные и строить визуализации.',
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
