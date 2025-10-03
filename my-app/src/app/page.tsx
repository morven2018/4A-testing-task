import Attention from "@/components/attention";
import Buy from "@/components/buy";
import Header from "@/components/header";
import Image from "next/image";
import Tariffs from "@/components/tariffs";
import Warranty from "@/components/warranty";
import tariff_image from "../../public/img.png";
import { getTariffs } from "@/services/api";

export default async function Home() {
  const data = await getTariffs();

  return (
    <div className="bg-[#232829] rounded-[60px] flex flex-col items-center font-bold box-content px-4">
      <Header />
      <div className="max-w-307 pb-37.5 flex flex-col gap-16.5 max-lg:pb-10">
        <h1 className="text-[40px] tracking-wider pb-10">
          Выбери подходящий для себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </h1>
        <div className="flex flex-row max-xl:flex-col max-xl:items-stretch items-center 2xl:gap-22">
          <Image
            src={tariff_image}
            className="h-[767px] max-xl:h-180 max-md:h-62.5 w-auto object-contain"
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-5">
            {data && <Tariffs data={data} />}
            <div className="max-xl:px-5">
              <Attention />
            </div>

            <Buy />
          </div>
        </div>
        {!data && <div>Error on load data</div>}
        <Warranty />
      </div>
    </div>
  );
}
