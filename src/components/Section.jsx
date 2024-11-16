import React from 'react';

export default function Section({ id, title, content }) {
  return (
    <section
      id={id}
      className="bg-white bg-opacity-80 p-6 rounded shadow"
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </section>
  );
}