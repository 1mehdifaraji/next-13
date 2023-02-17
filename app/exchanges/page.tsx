import Link from "next/link";
import { API_URL, getExchanges } from "@/util";
import axios from "axios";
import { notFound } from "next/navigation";

const getExchangesData = async (): Promise<Exchange[]> => {
  // Server Side Rendering
  // {cache   : "no-cache"} or no-store
  // Static Site Generation
  // {cache   : "force-cache"}
  // ISR Incremental Static Regeneration
  // {next  : { revalidate : 1 }}
  const res = await fetch(`${API_URL}/exchanges`, {
    cache: "no-store",
  });
  const exchanges = await res.json();
  return exchanges;
};

const ExchangesPage = async () => {
  // Calling directly the database function because we can in server components
  // const data = await getUsers();
  // Or calling our own created api with axios
  // const { data } = await axios.get(
  //   "https://api.coingecko.com/api/v3/exchanges/"
  // );
  // Or calling our own created api with fetch
  const exchanges = await getExchangesData();

  if (exchanges?.length === 0) return notFound();

  return (
    <div className="flex flex-col items-center space-y-5 my-5">
      {exchanges &&
        exchanges?.map((exchange: Exchange) => {
          return (
            <Link
              className="block"
              href={`/exchange/${exchange.id}`}
              key={exchange.id}
            >
              {exchange.name}
            </Link>
          );
        })}
    </div>
  );
};

export default ExchangesPage;
