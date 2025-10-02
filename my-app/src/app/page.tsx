import Warranty from "@/components/ui/warranty";
import { getTariffs } from "@/services/api";

export default async function Home() {
  const data = await getTariffs();

  return (
    <div className="bg-[#232829] rounded-[60px] flex flex-col items-center">
      {!data && <div>Error on load data</div>}
      {data && <div>{JSON.stringify(data)}</div>}
      <Warranty />
    </div>
  );
}
