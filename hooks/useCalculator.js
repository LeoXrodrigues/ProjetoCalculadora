import { useState } from "react";

export default function useCalculator() {
  const [expression, setExpression] = useState("");  
  const [result, setResult] = useState("");  

  const handlePress = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(expression);  
      setResult(evalResult);
    } catch (e) {
      setResult("Erro");
    }
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  return {
    expression,
    result,
    handlePress,
    calculateResult,
    clear,
  };
}