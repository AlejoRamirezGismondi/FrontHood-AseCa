export type Stock = {
    marketOpen?: Date,
    marketClose?: Date,
    name: string,
    symbol: string,
    type: string,
    region: string,
    timezone: string,
    currency: string,
}

export type StockValue = {
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
}

export type TimeSeries = {
    timeSeries: Map<Date, StockValue>
}

export type FullStockInfo = {
    metaData: Stock,
    timeSeries: TimeSeries
}

export type StockCurrentPrice = {
    symbol: string,
    open: number,
    high: number,
    low: number,
    price: number,
    volume: number,
    latestTradingDay: Date,
    previousClose: number,
    change: number,
    changePercent: number
}