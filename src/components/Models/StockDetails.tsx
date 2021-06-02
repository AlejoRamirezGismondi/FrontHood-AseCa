export type StockDetails = {
  price: number,
  open: number,
  high: number,
  low: number,
  week52low: number,
  week52high: number,
  volume: number,
  volumeaverage: number,
  dailyPrices: Price[],
}

export type Price = {
  date: string,
  value: string
}
