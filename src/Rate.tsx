import IconStar from "./assets/images/icon-star.svg";

interface Props {
  onClick: (number: { isActive: boolean; number: number }) => void;
  numbers: {
    isActive: boolean;
    number: number;
  }[];
  onSubmit: () => void;
}

function Rate({ onClick, numbers, onSubmit }: Props) {
  return (
    <>
      <div
        className="w-[50px] h-[50px] flex justify-center items-center rounded-full"
        style={{ backgroundColor: "hsl(213, 19%, 18%)" }}
      >
        <img src={IconStar} alt="icon-star" />
      </div>
      <div className="text-white text-3xl mt-7 mb-4 font-bold">
        How did we do?
      </div>
      <div
        className="mb-4 text-sm md:text-base"
        style={{ color: "hsl(217, 12%, 63%)" }}
      >
        Please let us know how we did with your support
        <br /> request. All feedback is appreciated to help us
        <br /> improve our offering!
      </div>
      <div className="flex justify-between mt-4">
        {numbers?.map((number) => (
          <button
            onClick={() => onClick(number)}
            className={`${
              number?.isActive
                ? "hover:bg-[#fb7413] bg-[#fb7413] text-white"
                : "hover:bg-[#959eac] hover:text-white bg-[#252d37] text-[#959eac]"
            } cursor-pointer w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-full`}
          >
            {number?.number}
          </button>
        ))}
      </div>
      <button
        onClick={onSubmit}
        className="tracking-wider bg-[#fb7413] hover:bg-white hover:text-[#fb7413] cursor-pointer w-full rounded-3xl p-2 text-white mt-9"
      >
        SUBMIT
      </button>
    </>
  );
}

export default Rate;
