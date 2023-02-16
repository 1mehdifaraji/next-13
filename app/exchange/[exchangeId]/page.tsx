import React from "react";
import { getExchanges } from "@/util";
import Exchange from "./Exchange";

const getExchange = async (exchangeId: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  return res.json();
};

const ExchangePage = async ({ params: { exchangeId } }: ExchangePage) => {
  const exchange = await getExchange(exchangeId);

  return (
    <div className="text-center my-10">
      {exchange && <Exchange exchange={exchange} />}
    </div>
  );
};

export default ExchangePage;

export const generateStaticParams = async () => {
  const exchanges = await getExchanges();

  return exchanges.map((exchange: Exchange) => ({
    exchangeId: exchange.id,
  }));
};
