import { useState } from "react";
import "./App.css";

const App = () => {
  const [mes, SetMes] = useState<string>("");
  const [wordFrequency, setWordFrequency] = useState<Record<string, number>>(
    {}
  );

  const onClick = () => {
    const clean = mes.split(" ").map(word => word.toLowerCase().trim()).filter((word) => word.length > 0)
    const frequency = clean.reduce((acc, i) => {
      acc[i] = (acc[i] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    setWordFrequency(frequency);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div>
        <textarea
          onChange={({ target }) => SetMes(target.value)}
          style={{
            width: "300px",
            height: "200px",
            padding: "15px",
            borderRadius: "8px",
            border: "2px solid #ccc",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            resize: "vertical",
            overflow: "hidden",
            minHeight: "100px",
            maxHeight: "400px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            outline: "none",
            transition: "border-color 0.3s ease",
          }}
          value={mes}
          placeholder="Enter your text here..."
          spellCheck={true}
          autoComplete="off"
        />
        <button
          onClick={onClick}
          style={{
            width: "7em",
            border: "20px solid red",
            borderRadius: "40px",
            margin:"30px"
          }}
        >
          <pre>CHECK</pre>
        </button>
        <table style={{ margin: "20px", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Word
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(wordFrequency)
              .sort(([, a], [, b]) => b - a)
              .map(([word, freq]) => (
              <tr key={word}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                {word}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                {freq}
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
