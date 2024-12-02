import React from "react";

export default function Habit({ habit, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggle(habit.id)}
      />
      <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
        {habit.name}
      </span>
      <button onClick={() => onDelete(habit.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}
