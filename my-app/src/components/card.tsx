import { useEffect, useState } from "react";
import { useTimer } from "@/contexts/timer-context";
import { Tariff } from "@/types/types";

interface CardProps {
  data: Tariff;
  layout: "col" | "row";
  isSelected?: boolean;
}

export default function Card({
  data,
  layout,
  isSelected = false,
}: Readonly<CardProps>) {
  const { period, price, full_price, is_best, text } = data;
  const { timeLeft } = useTimer();
  const isTimerFinished = timeLeft === 0;
  const sale = Math.round(100 * (price / full_price - 1));
  const [showRedBorder, setShowRedBorder] = useState(false);

  useEffect(() => {
    if (isTimerFinished) {
      setShowRedBorder(true);
      const timer = setTimeout(() => {
        setShowRedBorder(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isTimerFinished]);

  const cardClasses =
    layout === "row"
      ? "flex flex-row rounded-[34px] border-2 h-47.5 items-start pl-3.75 pr-4.75 bg-[#313637] justify-between gap-1.5 transition-all duration-300"
      : "flex flex-col max-md:flex-row max-md:rounded-[34px] rounded-[40px] border-2  max-md:h-47.5  min-h-83.75 max-xl:min-h-92 items-start pb-6.5 px-4.25 bg-[#313637] transition-all duration-300 pb-12.5";
  const getBorderColor = () => {
    if (showRedBorder) {
      return "border-[#FD5656] animate-borderFlash";
    }
    if (isSelected) {
      return "border-[#FDB056]";
    }
    return "border-[#484D4E]";
  };

  const fullCardClasses = `${cardClasses} ${getBorderColor()} hover:scale-102 active:scale-98`;

  const priceClasses =
    layout === "row"
      ? "text-[#FDB056] font-semibold text-[50px] tracking-wider"
      : "text-white font-semibold text-[50px] pt-4 max-md:pt-0";

  const paddingTop =
    layout === "row"
      ? "flex flex-row pt-7.5 items-center"
      : "flex flex-col pt-5 items-center max-xl:self-center max-md:flex-row max-md:pt-7.5";

  return (
    <div className={fullCardClasses}>
      <div className="pl-7.75">
        {price < full_price && (
          <div className="bg-[#FD5656] px-2 py-1.25 rounded-b-lg gilroy tracking-wider text-[22px] font-medium">
            {sale.toString()}%
          </div>
        )}
      </div>

      <div className={paddingTop}>
        <div
          className={`flex flex-col max-w-45 ${
            layout === "row" && "pr-10.5"
          } max-md:pr-10.5`}
        >
          <h3 className="text-[26px] font-medium tracking-wider">{period}</h3>
          <div className="flex flex-col items-end gap-0 leading-none pt-2.5 min-h-[85px] max-xl:w-full">
            <div className={`${priceClasses} animate-priceTransition`}>
              {isTimerFinished ? full_price : price}&nbsp;&#8381;
            </div>

            {!isTimerFinished && (
              <div className="line-through font-normal text-2xl text-[#919191] animate-crossfade ">
                {full_price}&nbsp;&#8381;
              </div>
            )}
          </div>
        </div>
        <p
          className={`max-w-82 h-15.5 max-xl:h-23 pl-0.5 text-base font-normal tracking-[.045em] ${
            layout === "col" && "pt-10 pr-4"
          }`}
        >
          {text}
        </p>
      </div>

      <div className="text-[#FDB056] pt-2.75 font-medium text-4.5 tracking-wider">
        {is_best && <span>ХИТ!</span>}
      </div>
    </div>
  );
}
