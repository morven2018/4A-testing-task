import { getTariffs } from "@/services/api";

export default async function Home() {
  const data = await getTariffs();

  return (
    <>
      {!data && <div>Error on load data</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </>
  );
}
