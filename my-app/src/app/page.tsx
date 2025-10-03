import Image from "next/image";
import Tariffs from "@/components/ui/tariffs";
import Warranty from "@/components/ui/warranty";
import tariff_image from "../../public/img.png";
import { getTariffs } from "@/services/api";

export default async function Home() {
  const data = await getTariffs();

  return (
    <div className="bg-[#232829] rounded-[60px] flex flex-col items-center font-bold box-content">
      <div className="max-w-307 pb-37.5">
        <h1 className="text-[40px] tracking-wider">
          Выбери подходящий для себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </h1>
        <div className="flex flex-row items-center gap-22">
          <Image src={tariff_image} height={767} alt="Picture of the author" />
          {data && <Tariffs data={data} />}
        </div>
        {!data && <div>Error on load data</div>}
        <Warranty />
      </div>
    </div>
  );
}
