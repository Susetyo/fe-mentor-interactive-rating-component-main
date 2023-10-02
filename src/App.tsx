import { useState, lazy, Suspense } from "react";
import "./App.css";

const Rate = lazy(() => import("./Rate"));
const Thankyou = lazy(() => import("./Thankyou"));

function App() {
  const [numbers, setNumbers] = useState([
    {
      isActive: false,
      number: 1,
    },
    {
      isActive: false,
      number: 2,
    },
    {
      isActive: false,
      number: 3,
    },
    {
      isActive: false,
      number: 4,
    },
    {
      isActive: false,
      number: 5,
    },
  ]);

  const [isSubmit, setIsSubmit] = useState(false);

  const onClick = (numberObj: { isActive: boolean; number: number }) => {
    const newValue = numbers.map((number) => {
      return {
        ...number,
        isActive: numberObj.number === number?.number,
      };
    });

    setNumbers(newValue);
  };

  const onSubmit = () => setIsSubmit(true);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div
          className={`w-[80%] md:w-[30%] md:h-[60%] rounded-3xl p-5 md:p-10 ${
            isSubmit ? "flex flex-col items-center" : ""
          }`}
          style={{
            backgroundImage:
              "linear-gradient(hsl(213, 19%, 18%),hsl(216, 12%, 8%))",
          }}
        >
          {!isSubmit && (
            <Rate onClick={onClick} onSubmit={onSubmit} numbers={numbers} />
          )}
          {isSubmit && <Thankyou numbers={numbers} />}
        </div>
      </div>
    </Suspense>
  );
}

export default App;
