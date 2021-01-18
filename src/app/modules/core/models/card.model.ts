export interface ICard {
  cardNumber: number;
  nameOnCard: string;
  expirationYear: string;
  expirationMonth: string;
  cardCVVNumber: string;
  amount: number;
  isOurData?: boolean;
}

export class Card implements ICard {
  cardNumber: number;
  nameOnCard: string;
  expirationYear: string;
  expirationMonth: string;
  cardCVVNumber: string;
  amount: number;
  constructor(card: ICard) {
    this.cardNumber = card.cardNumber;
    this.nameOnCard = card.nameOnCard;
    this.expirationYear = card.expirationYear;
    this.expirationMonth = card.expirationMonth;
    this.cardCVVNumber = card.cardCVVNumber;
    this.amount = card.amount;
  }
}
