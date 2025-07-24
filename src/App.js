import { useState } from "react";

// Вечерний чек‑лист «Антивыгорание за 15 минут»
// Тёмная тема без Tailwind: белый текст, чёрный фон — работает в любом React‑проекте.

const items = [
  {
    id: 1,
    title: "Три цикла дыхания 4‑4‑6",
    desc: "Вдох 4 сек, задержка 4 сек, плавный выдох 6 сек — три раза (1 мин)",
  },
  {
    id: 2,
    title: "Скан тела",
    desc: "От макушки до пальцев ног, замечайте напряжение и расслабляйте (2 мин)",
  },
  {
    id: 3,
    title: "«Мозговой слив»",
    desc: "Запишите все мысли и заботы на бумагу, чтобы выгрузить их из головы (3 мин)",
  },
  {
    id: 4,
    title: "Растяжка шеи и плеч",
    desc: "Круговые движения плечами, мягкие наклоны головы в стороны и вперёд (2 мин)",
  },
  {
    id: 5,
    title: "Стакан тёплой воды/чая",
    desc: "Гидратация помогает нервной системе переключиться в режим восстановления (1 мин)",
  },
  {
    id: 6,
    title: "Три благодарности",
    desc: "Вспомните три момента дня, за которые вы благодарны, и запишите (2 мин)",
  },
  {
    id: 7,
    title: "Приоритеты на завтра",
    desc: "Запишите максимум три задачи, чтобы мозг мог отпустить планы на ночь (2 мин)",
  },
  {
    id: 8,
    title: "Digital sunset",
    desc: "Отключите уведомления, поставьте телефон в режим «Не беспокоить» (2 мин)",
  },
];

function EveningAntiBurnoutChecklist() {
  const [checked, setChecked] = useState(Array(items.length).fill(false));
  const toggle = (idx) =>
    setChecked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  const completed = checked.filter(Boolean).length;
  const allDone = completed === items.length;

  const wrapperStyle = {
    minHeight: "100vh",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "640px",
    padding: "32px",
    borderRadius: "24px",
    background: "rgba(25, 25, 25, 0.85)",
    backdropFilter: "blur(6px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "4px",
    textAlign: "center",
  };

  const subtitleStyle = {
    textAlign: "center",
    color: "#aaa",
    marginBottom: "24px",
  };

  const listStyle = { listStyle: "none", padding: 0, margin: 0 };

  const itemStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "16px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#ddd",
    marginTop: "4px",
    lineHeight: 1.35,
  };

  const progressStyle = {
    marginTop: "28px",
    textAlign: "center",
    fontSize: "18px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Вечерний чек‑лист</h2>
        <p style={subtitleStyle}>Антивыгорание за 15 минут</p>

        <ul style={listStyle}>
          {items.map((item, idx) => (
            <li key={item.id} style={itemStyle}>
              <input
                type="checkbox"
                style={{
                  marginTop: "2px",
                  marginRight: "12px",
                  width: "20px",
                  height: "20px",
                  accentColor: "#a855f7",
                  cursor: "pointer",
                }}
                checked={checked[idx]}
                onChange={() => toggle(idx)}
              />
              <div>
                <span
                  style={{
                    fontWeight: "500",
                    textDecoration: checked[idx] ? "line-through" : "none",
                    color: checked[idx] ? "#888" : "#fff",
                  }}
                >
                  {item.title}
                </span>
                <p style={descStyle}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div style={progressStyle}>
          {allDone ? (
            <span style={{ color: "#22c55e", fontWeight: 600 }}>
              ✓ Все вечерние ритуалы выполнены — приятного отдыха!
            </span>
          ) : (
            <span>
              Выполнено <strong>{completed}</strong> / {items.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default EveningAntiBurnoutChecklist;
