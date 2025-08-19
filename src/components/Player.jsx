import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing(true);
  }
  let playerName = <span ClassName="player-name">{name} </span>;
  if (isEditing) {
    playerName = <input type="text" required />;
  }
  return (
    <li>
      <span ClassName="player">
        {playerName}
        <span ClassName="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
