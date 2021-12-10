import { FC } from "react";
import { v4 as uuid } from "uuid";
import { MeanMedianMode, Graphs } from "../models";

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
  new Feature("Standard Devation", Graphs),
  new Feature("Charts", MeanMedianMode),
  new Feature("Graphs", MeanMedianMode),
  new Feature("Units & Measurements", MeanMedianMode),
];

export default models;
