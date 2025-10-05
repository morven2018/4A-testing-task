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
    <div className="bg-[#232829] rounded-[60px] max-md:rounded-none flex flex-col items-center font-bold box-content x-4">
      <Header />
      <div className="max-w-307 pb-37.5 flex flex-col gap-16.5 max-md:gap-4 max-lg:pb-10 px-4">
        <h1 className="text-[22px] min-[351px]:text-2xl min-md:text-[40px]  tracking-[.06em] max-md:pr-4 pb-10 max-md:pb-0 pt-12.5 max-md:pt-5">
          Выбери подходящий для себя{" "}
          <span className="text-[#FDB056]">тариф</span>
        </h1>
        <div className="flex flex-row max-xl:flex-col max-xl:items-stretch items-center 2xl:gap-22">
          <Image
            src={tariff_image}
            className="h-[200px] min-[351px]:h-62.5 min-md:h-180 min-xl:h-[767px]  w-auto object-contain"
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-5">
            {data && <Tariffs data={data} />}
            <div className="max-xl:px-5 max-md:px-0">
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
