export class Car {
    constructor(
      public carID: string,
      public AuctionInfo: {
        bids: string,
        endDateEn: number
      }
    ) {}
  }