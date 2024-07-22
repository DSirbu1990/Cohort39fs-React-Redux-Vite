import { useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";

import { Homework15Wrapper} from "./styles";


function Homework15() {
    const [count, setCount] = useState<number>(0);

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });

  };
  return (
    <Homework15Wrapper>
     <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
     <Input id="id_1" label="Simple Input" name="simpleInput" />
     <Button name="Simple Button" onClick={() => {}} /> 
    </Homework15Wrapper>
  );
}

export default Homework15;