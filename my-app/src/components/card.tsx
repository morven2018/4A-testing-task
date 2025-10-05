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
      ? "flex flex-col rounded-[34px] border-2 h-29.5  min-[351px]:h-32.75 min-md:h-47.5 items-start pl-3.75 pr-4.75 max-md:pr-2 bg-[#313637] transition-all duration-300 max-md:rounded-[20px]"
      : "flex flex-col rounded-[40px] border-2 h-29.5 min-[351px]:h-32.75 min-md:min-h-83.75 items-start pb-6.5 px-4.25 bg-[#313637] transition-all duration-300 pb-12.5 max-md:rounded-[20px] max-md:pb-0";
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
      ? "text-[#FDB056] font-semibold text-[50px] max-md:text-[34px] tracking-wider"
      : "text-white font-semibold text-[50px] pt-4 max-md:pt-0 max-md:text-[34px]";

  const paddingTop =
    layout === "row"
      ? "flex flex-row pl-35 items-center -translate-y-3 max-md:pl-3"
      : "flex flex-col pt-5 items-center max-xl:self-center max-md:flex-row max-md:pt-0 max-md:-translate-y-3";

  return (
    <div className={fullCardClasses}>
      <div className="flex flex-row w-full justify-between max-md:justify-end max-md:gap-2.5 max-md:items-start pl-7.75">
        {price < full_price && (
          <div className="bg-[#FD5656] px-1.5 py-0.75 min-[351px]:px-2 min-[351px]:py-1.25 rounded-b-lg gilroy tracking-wider text-[13px] min-[351px]:text-base min-[769px]:text-[22px] font-medium">
            {sale.toString()}%
          </div>
        )}

        <div className="text-[#FDB056] pt-1 min-[351px]:pt-2.75 font-medium text-[13px] min-[351px]:text-base min-[769px]:text-4.5 tracking-wider">
          {is_best && <span>ХИТ!</span>}
        </div>
      </div>

      <div className={paddingTop}>
        <div
          className={`flex flex-col max-w-45 ${
            layout === "row" && "pr-10.5"
          } max-md:pr-10.5`}
        >
          <h3 className="text-[26px] font-medium tracking-wider max-md:text-lg">
            {period}
          </h3>
          <div className="flex flex-col items-end gap-0 leading-none pt-2.5 min-h-[85px] max-xl:w-full">
            <div className={`${priceClasses} animate-priceTransition`}>
              {isTimerFinished ? full_price : price}&nbsp;&#8381;
            </div>

            {!isTimerFinished && (
              <div className="line-through font-normal text-2xl text-[#919191] animate-crossfade max-md:text-base">
                {full_price}&nbsp;&#8381;
              </div>
            )}
          </div>
        </div>
        {layout === "col" && (
          <p className="pl-2.5 min-[351px]:pl-12 min-[769px]:pl-0.5 text-sm min-[769px]:text-base font-normal tracking-[.045em] pt-2 min-[351px]:pt-4 min-md:pt-10 pr-0 min-md:pr-4 max-w-82 h-15.5 max-xl:h-23">
            {text}
          </p>
        )}
        {layout === "row" && (
          <p className="max-w-82 h-15.5 max-xl:h-23 pl-0.5 text-base font-normal tracking-[.045em] max-[400px]:hidden">
            {text}
          </p>
        )}
        {layout === "row" && (
          <p className="min-[400px]:hidden max-w-82 h-15.5 max-xl:h-23 pl-0.5 pt-3.5  font-normal tracking-[.045em] max-md:text-sm">
            Всегда быть в&nbsp;форме
          </p>
        )}
      </div>
    </div>
  );
}
