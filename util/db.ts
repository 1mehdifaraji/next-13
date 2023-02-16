export const getExchanges = async () => {
  const data = await fetch("https://api.coingecko.com/api/v3/exchanges/");
  const exchanges = await data.json();
  return exchanges;
};

export const getExchange = async (exchangeId: string | string[]) => {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`
  );
  const exchange = await data.json();
  return exchange;
};
