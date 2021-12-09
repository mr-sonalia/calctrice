import { v4 as uuid } from "uuid";

type Usage = "Basic" | "Intermediate";
class Card {
  key: string;
  usage: Usage;
  title: string;
  route: string;

  constructor(usage: Usage, title: string, route: string) {
    this.key = uuid();
    this.usage = usage;
    this.title = title;
    this.route = route;
  }
}

const cards: Card[] = [
  new Card("Basic", "Mean, Median, Mode", "/"),
  new Card("Basic", "Charts", "/"),
  new Card("Basic", "Graphs", "/"),
  new Card("Intermediate", "Mean, Median, Mode", "/"),
  new Card("Intermediate", "Standard Deviation", "/"),
  new Card("Intermediate", "Lorem", "/"),
];

export default cards;
