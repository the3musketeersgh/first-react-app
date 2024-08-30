import "./styles.css";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

export default function App() {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="App">
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          <button
            className={activeButton === 0 ? "active" : ""}
            onClick={() => setActiveButton(0)}
          >
            Why React
          </button>
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => setActiveButton(1)}
          >
            Core Features
          </button>
          <button
            className={activeButton === 2 ? "active" : ""}
            onClick={() => setActiveButton(2)}
          >
            Related Courses
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeButton].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
