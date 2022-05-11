import React from "react";
import init, { add } from "../pkg";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.scss";

type Form = {
  a: number;
  b: number;
};

const Index: React.FC = () => {
  const { register, handleSubmit } = useForm<Form>({
    defaultValues: {
      a: 0,
      b: 0,
    },
  });
  const [result, setResult] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  const onHandleSubmit: SubmitHandler<Form> = (data) => {
    setResult(add(data.a, data.b));
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <input type="number" {...register("a")} />
      <input type="number" {...register("b")} />
      <button type="submit">Add</button>
      <p>{result}</p>
    </form>
  );
};

export default Index;
