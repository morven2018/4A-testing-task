import Card from "./card";
import { Tariff } from "@/types/types";

interface TariffsProps {
  data: Tariff[];
}

export default function Tariffs({ data }: Readonly<TariffsProps>) {
  const tariff_forever = data.length > 3 ? data[3] : "";
  const tariff_data =
    data.length > 3 ? data.slice(0, 3).reverse() : [...data].reverse();

  return (
    <div className="grid grid-cols-3 gap-3.5 max-w-307">
      {tariff_forever && (
        <div className="col-span-3">
          <Card data={tariff_forever} layout="row" />
        </div>
      )}
      {tariff_data.map((item: Tariff) => (
        <Card key={item.id} data={item} layout="col" />
      ))}
    </div>
  );
}
