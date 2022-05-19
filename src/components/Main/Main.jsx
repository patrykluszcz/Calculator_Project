import MainSCSS from "./Main.module.scss";
import { useState } from "react";

const Main = () => {
  const [display1Value, setDisplay1Value] = useState("");
  const [display2Value, setDisplay2Value] = useState("");
  const [display3Value, setDisplay3Value] = useState("");

  const handleNumber = (e) => {
    if (display1Value === ".") {
      alert("error");
      setDisplay1Value("");
      return;
    } else {
      setDisplay1Value(display1Value.concat(e.target.value));
    }
  };

  const handleOperator = (e) => {
    if (display2Value === "" && display1Value !== "") {
      setDisplay3Value(display1Value);
      setDisplay1Value("");
      setDisplay2Value(display2Value.concat(e.target.value));
    }
  };

  const specialOperator = (e) => {
    if (display2Value === "" && display1Value !== "") {
      setDisplay2Value(display2Value.concat(e.target.value));
    }
  };

  const result = () => {
    switch (display2Value) {
      case "+":
        setDisplay1Value(+display1Value + +display3Value);
        break;
      case "-":
        setDisplay1Value(+display3Value - +display1Value);
        break;
      case "*":
        setDisplay1Value(+display1Value * +display3Value);
        break;
      case "/":
        setDisplay1Value(+display3Value / +display1Value);
        break;

      case "%":
        setDisplay1Value(+display3Value % +display1Value);
        break;

      case "√":
        setDisplay1Value(Math.sqrt(+display1Value));
        break;

      case "^":
        setDisplay1Value(Math.pow(+display3Value, +display1Value));
        break;

      case "log10":
        setDisplay1Value(Math.log10(+display1Value));
        break;

      default:
        break;
    }

    setDisplay3Value("");
    setDisplay2Value("");
  };

  const clearAll = () => {
    setDisplay1Value("");
    setDisplay2Value("");
    setDisplay3Value("");
  };

  return (
    <>
      <h1 className={MainSCSS.title}>- Calculator -</h1>
      <main className={MainSCSS.main}>
        <div className={MainSCSS.calculator}>
          <input className={MainSCSS.display3} value={display3Value} readOnly />
          <input className={MainSCSS.display2} value={display2Value} readOnly />
          <input className={MainSCSS.display1} value={display1Value} readOnly />
          <button className={MainSCSS.cancel} onClick={clearAll}>
            C
          </button>
          <button
            value="/"
            className={MainSCSS.operator}
            onClick={handleOperator}
          >
            /
          </button>
          <button
            value="√"
            className={MainSCSS.operator}
            onClick={specialOperator}
          >
            √
          </button>
          <button
            value="log10"
            className={MainSCSS.operator}
            onClick={specialOperator}
          >
            log10
          </button>
          <button
            value="^"
            className={MainSCSS.operator}
            onClick={handleOperator}
          >
            ^
          </button>
          <button
            value="*"
            className={MainSCSS.operator}
            onClick={handleOperator}
          >
            *
          </button>
          <button
            value="+"
            className={MainSCSS.operator}
            onClick={handleOperator}
          >
            +
          </button>
          <button value="7" className={MainSCSS.number} onClick={handleNumber}>
            7
          </button>
          <button value="8" className={MainSCSS.number} onClick={handleNumber}>
            8
          </button>
          <button value="9" className={MainSCSS.number} onClick={handleNumber}>
            9
          </button>
          <button
            value="-"
            className={MainSCSS.operator}
            onClick={handleOperator}
          >
            -
          </button>
          <button value="4" className={MainSCSS.number} onClick={handleNumber}>
            4
          </button>
          <button value="5" className={MainSCSS.number} onClick={handleNumber}>
            5
          </button>
          <button value="6" className={MainSCSS.number} onClick={handleNumber}>
            6
          </button>
          <button
            value="%"
            className={MainSCSS.operator}
            onClick={handleOperator}
          >
            %
          </button>
          <button value="1" className={MainSCSS.number} onClick={handleNumber}>
            1
          </button>
          <button value="2" className={MainSCSS.number} onClick={handleNumber}>
            2
          </button>
          <button value="3" className={MainSCSS.number} onClick={handleNumber}>
            3
          </button>
          <button
            value="."
            className={MainSCSS.operator}
            onClick={handleNumber}
          >
            .
          </button>
          <button value="0" className={MainSCSS.number} onClick={handleNumber}>
            0
          </button>
          <button className={MainSCSS.buttonEquality} onClick={result}>
            =
          </button>
        </div>
      </main>
    </>
  );
};

export default Main;
