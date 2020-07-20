import React, { useState, useEffect } from 'react';
import Game from "./Game";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}

// ReactDOM.render(<StarMatch />, mountNode);

// export function App({ initialData }) {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <h1>{initialData.appName}</h1>
//       This is a sample stateful and server-side rendered React application.
//       <br />
//       <br />
//       Here is a button that will track how many times you click it:
//       <br />
//       <br />
//       <button title="increment" onClick={() => setCount(count + 1)}>
//         {count}
//       </button>
//     </div>
//   );
// }
export function App() {
  return (
    <StarMatch />
  );
}
