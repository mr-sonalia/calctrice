import { FC } from "react";
import { v4 as uuid } from "uuid";
import { MeanMedianMode, Charts } from "../models/models";

class Feature {
  public id: string;
  public label: string;
  public component: FC;
  constructor(label: string, component: FC) {
    this.id = uuid();
    this.label = label;
    this.component = component;
  }
}

const models = [
  new Feature("Mean, Median, Mode", MeanMedianMode),
  new Feature("Charts", Charts),
  new Feature("Standard Devation", MeanMedianMode),
  new Feature("Units & Measurements", MeanMedianMode),
];

export default models;
