export const getExchanges = async (): Promise<Exchange[]> => {
  const res = await fetch("https://api.coingecko.com/api/v3/exchanges/");
  const exchanges = await res.json();
  return exchanges;
};

export const getExchange = async (
  exchangeId: string | string[]
): Promise<Exchange> => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/exchanges/${exchangeId}`
  );
  const exchange = await res.json();
  return exchange;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

export const getUser = async (userId: string | string[]): Promise<User> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await res.json();
  return user;
};
