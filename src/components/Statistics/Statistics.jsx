import React from 'react';
import './Statistics.css';

function Statistics({ title, stats }) {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padEnd(6, '0')}`;
  };
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="statlabel">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Statistics;
