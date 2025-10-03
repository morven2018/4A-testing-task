import Timer from "./timer";

export default function Header() {
  return (
    <header className="flex flex-col bg-[#1D5B43] h-25.75 w-full rounded-t-[60px] items-center py-2">
      <div className="font-semibold text-2xl tracking-[.06em]">
        Успейте открыть пробную неделю
      </div>
      <Timer />
    </header>
  );
}
