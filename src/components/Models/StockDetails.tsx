export type StockDetails = {
  price: string,
  open: string,
  high: string,
  low: string,
  week52low: string,
  week52high: string,
  volume: string,
  volumeAverage: string,
  dailyPrices: Price[],
}

export type Price = {
  day: string,
  price: string
}
