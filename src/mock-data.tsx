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

export type BenefitType = "Medical" | "Dental" | "Vision";

export interface Benefit {
  displayOrder: number;
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
  { id: 0, type: "Medical", displayOrder: 0 },
  { id: 1, type: "Dental", displayOrder: 1 },
  { id: 2, type: "Vision", displayOrder: 2 },
];

export { peopleData };
export { benefitData };
