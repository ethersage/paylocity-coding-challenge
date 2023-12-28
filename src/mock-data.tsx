// TODO: extract types out to their own files since they're not "mock data" as the
// module name implies
export type PersonType = "employee" | "spouse" | "dependent";

export interface Person {
  id: number;
  name: string;
  type: PersonType;
  benefits: Benefit[];
  cost: number;
}

export type BenefitType = "medical" | "dental" | "vision";

export interface Benefit {
  id: number;
  type: BenefitType;
}

const peopleData: Person[] = [
  {
    id: 0,
    name: "Joshua Kaminetsky",
    type: "employee",
    benefits: [],
    cost: 0,
  },
  {
    id: 1,
    name: "Bridget Kaminetsky",
    type: "spouse",
    benefits: [],
    cost: 0,
  },
  {
    id: 2,
    name: "Amelia Kaminetsky",
    type: "dependent",
    benefits: [],
    cost: 0,
  },
];

const benefitData: Benefit[] = [
  { id: 0, type: "medical" },
  { id: 1, type: "dental" },
  { id: 2, type: "vision" },
];

export { peopleData };
export { benefitData };
