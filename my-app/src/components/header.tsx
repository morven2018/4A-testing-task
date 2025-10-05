import Timer from "./timer";

export default function Header() {
  return (
    <header className="flex flex-col bg-[#1D5B43] h-25.75 max-md:h-21.25 w-full rounded-t-[60px] max-md:rounded-t-none items-center py-2 px-4">
      <div className="font-semibold text-2xl tracking-[.06em] max-md:text-lg">
        Успейте открыть пробную неделю
      </div>
      <Timer />
    </header>
  );
}
