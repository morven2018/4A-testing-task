import Timer from "./timer";

export default function Header() {
  return (
    <header className="flex flex-col bg-[#1D5B43] h-18.5 min-[351px]:h-21.25 min-md:h-25.75  w-full rounded-t-[60px] max-md:rounded-t-none items-center py-2 px-1 min-[351px]:px-4">
      <div className="font-semibold tracking-[.06em] text-sm min-[351px]:text-base min-md:text-2xl">
        Успейте открыть пробную неделю
      </div>
      <Timer />
    </header>
  );
}
