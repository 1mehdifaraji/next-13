import React from "react";
import { notFound } from "next/navigation";
import { API_URL, getExchanges } from "@/util";
import Exchange from "./Exchange";

const getExchange = async (exchangeId: string): Promise<Exchange> => {
  const res = await fetch(`${API_URL}/exchange/${exchangeId}`, {
    next: {
      revalidate: 120,
    },
  });
  return res.json();
};

const ExchangePage = async ({ params: { exchangeId } }: ExchangePage) => {
  const exchange = await getExchange(exchangeId);

  if (!exchange?.id) return notFound();

  return (
    <div className="text-center my-10">
      {exchange && <Exchange exchange={exchange} />}
    </div>
  );
};

export default ExchangePage;

export const generateStaticParams = async () => {
  const exchanges = await getExchanges();

  return exchanges.map((exchange) => ({
    exchangeId: exchange.id,
  }));
};
