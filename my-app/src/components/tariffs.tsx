"use client";
import Card from "./card";
import { useTariff } from "@/contexts/tariff-context";
import { Tariff } from "@/types/types";

interface TariffsProps {
  data: Tariff[];
}

export default function Tariffs({ data }: Readonly<TariffsProps>) {
  const { selectedTariffPeriod, setSelectedTariffPeriod } = useTariff();

  const tariff_forever = data.length > 3 ? data[3] : null;
  const tariff_data =
    data.length > 3 ? data.slice(0, 3).reverse() : [...data].reverse();

  const handleTariffSelect = (period: string) => {
    setSelectedTariffPeriod(period);
  };

  return (
    <div className="grid grid-cols-3 gap-3.5 max-md:gap-2 max-w-304 max-md:grid-cols-1">
      {tariff_forever && (
        <div
          className="col-span-3 cursor-pointer max-md:col-span-1"
          onClick={() => handleTariffSelect(tariff_forever.period)}
        >
          <Card
            data={tariff_forever}
            layout="row"
            isSelected={selectedTariffPeriod === tariff_forever.period}
          />
        </div>
      )}
      {tariff_data.map((item: Tariff) => (
        <div
          key={item.id}
          className="cursor-pointer"
          onClick={() => handleTariffSelect(item.period)}
        >
          <Card
            data={item}
            layout="col"
            isSelected={selectedTariffPeriod === item.period}
          />
        </div>
      ))}
    </div>
  );
}
