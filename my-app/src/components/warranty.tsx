export default function Warranty() {
  return (
    <div className="flex flex-col gap-7.5 p-4.25 border border-[#484D4E] rounded-[30px]  w-304 max-xl:w-full max-xl:p-4">
      <div className="border border-[#81FE95] text-[#81FE95] px-8 pt-3.5 pb-4 rounded-[30px] text-[28px] w-fit font-medium leading-[120%] tracking-[.06em]">
        гарантия возврата 30 дней
      </div>
      <p className="font-normal text-2xl text-[#DCDCDC] pr-5 max-xl:pr-0 tracking-wider">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые
        результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
        деньги в течение 30 дней с момента покупки, если ты не получишь видимых
        результатов.
      </p>
    </div>
  );
}
