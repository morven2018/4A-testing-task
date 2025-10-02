import { Tariff } from "@/types/types";

interface CardProps {
  data: Tariff;
  layout: "col" | "row";
}

export default function Card({ data, layout }: Readonly<CardProps>) {
  const { period, price, full_price, is_best, text } = data;
  const sale = Math.round(100 * (price / full_price - 1));

  const cardClasses =
    layout === "row"
      ? "flex flex-row rounded-[34px] border border-[#FDB056] h-47.5 items-start pl-3.75 pr-20 pb-6.5 bg-[#313637]"
      : "flex flex-col rounded-[40px] border border-[#484D4E] h-83,75 items-start pb-6.5 px-4.25 bg-[#313637]";
  const priceClasses = layout === "row" ? "text-[#FDB056]" : "text-white";
  const paddingTop = layout === "row" ? "pt-7.5" : "pt-8";

  return (
    <div className={cardClasses}>
      <div className="pl-7.75">
        <div className="bg-[#FD5656] px-2 py-1.25 rounded-b-lg">
          {price < full_price && <div>{sale.toString()}%</div>}
        </div>
      </div>

      <div className={paddingTop}>
        <div>
          <h3 className="text-[26px] font-medium">{period}</h3>
          <div className={priceClasses}>{price}</div>
          <div className="line-through">{full_price}</div>
        </div>
        <p>{text}</p>
      </div>
      <div>{is_best && <span>хит!</span>}</div>
    </div>
  );
}
