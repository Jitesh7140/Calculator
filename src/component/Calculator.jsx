import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  // Corrected component name

  const [data, setData] = useState("");
 

  const getValue = (event) => {
    const value = event.target.value;
    setData(data.concat(value));
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (key === "Enter") {
      equalToFunction();
    } else if (key === "Backspace") {
      BackFunction();
    } else if (key === "Escape") {
      AccountClear();
    } else if (/[0-9+\-*/().%]/.test(key)) {
      setData(data.concat(key));
    }
  };

  const equalToFunction = () => {
    try {
      setData(eval(data).toString());
    } catch {
      setData("Error");
    }
  };

  const AccountClear = () => {
    setData("");
  };

  const BackFunction = () => {
    setData(data.slice(0, -1));
  };

  return (
    <>
      <h1 className="text-9xl heading m-7">Calculator</h1> {/* Added heading with Tailwind CSS classes */}

      <div className="container cant2">
        <input

          placeholder="Enter Value"
          className="item1 bg-blue-50 rounded-lg p-2"
          name=""
          value={data}
          onKeyDown={handleKeyDown}
          readOnly
        />
        <button onClick={getValue} value="(">
          &#40;
        </button>
        <button onClick={getValue} value=")">
          &#41;
        </button>

        <button onClick={BackFunction} value="Back">
          &#9003;
        </button>

        <button onClick={AccountClear} value="AC">
          AC
        </button>
        <button onClick={getValue} value="7">
          7
        </button>
        <button onClick={getValue} value="8">
          8
        </button>
        <button onClick={getValue} value="9">
          9
        </button>
        <button onClick={getValue} value="*">
          &#42;
        </button>
        <button onClick={getValue} value="4">
          4
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="+">
          &#43;
        </button>
        <button onClick={getValue} value="1">
          1
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>
        <button onClick={getValue} value="-">
          &#45;
        </button>
        <button onClick={getValue} value="0">
          0
        </button>

        <button onClick={getValue} value=".">
          .
        </button>

        <button onClick={equalToFunction} value="=">
          &#61;
        </button>
        <button onClick={getValue} value="/">
          &#47;
        </button>
      </div>
    </>
  );
}

export default Calculator;
