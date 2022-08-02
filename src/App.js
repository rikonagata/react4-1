import React from "react";
import ReactDOM from "react-dom";

const options = [
  { value: "js", label: "JavaScript" },
  { value: "py", label: "Python" },
  { value: "rb", label: "Ruby" },
  { value: "", label: "その他" }
];

function App() {
  const [val, setVal] = React.useState("js");
  const [text, setText] = React.useState("");

  const handleRadioChange = (e) => setVal(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);

  const getAnswer = () => {
    return val === "" ? text : options.find((o) => o.value === val).label;
  };

  return (
    <>
      <p>好きなプログラミング言語を教えてください。</p>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            onChange={handleRadioChange}
            checked={val === option.value}
          />
          {option.label}
        </label>
      ))}
      {val === "" && (
        <p>
          自由記入 : <input value={text} onChange={handleTextChange} />
        </p>
      )}
      <hr />
      <p>回答 : {getAnswer()}</p>
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
