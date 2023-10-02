import { useMemo } from "react";
import IlusThankYou from "./assets/images/illustration-thank-you.svg";

interface Props {
  numbers: {
    isActive: boolean;
    number: number;
  }[];
}

function Thankyou({ numbers }: Props) {
  const score = useMemo(() => {
    const find = numbers.find((number) => number.isActive);
    if (find) {
      return find?.number;
    }

    return 0;
  }, [numbers]);

  return (
    <>
      <img src={IlusThankYou} alt="thank-you" />
      <div className="mt-7 bg-[#252d37] text-[#fb7413] text-base md:text-xl py-2 px-5 rounded-3xl">
        You selected {score} out of 5
      </div>
      <div className="text-white text-2xl md:text-3xl mt-7">Thank you!</div>
      <div className="text-[#959eac] mt-2 text-xs md:text-sm">
        We appreciate you taking the time to give a rating.
        <br />
        if you ever need more support. dont`t hesitate to
        <br />
        get in touch!
      </div>
    </>
  );
}

export default Thankyou;
