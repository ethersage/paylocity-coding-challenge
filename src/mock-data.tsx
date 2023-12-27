export type PersonType = "employee" | "spouse" | "dependent";

export interface Person {
  id: number;
  name: string;
  type: PersonType;
  benefits: Benefit[];
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
    benefits: [{ id: 0, type: "medical" }],
  },
  {
    id: 1,
    name: "Bridget Kaminetsky",
    type: "spouse",
    benefits: [],
  },
  {
    id: 2,
    name: "Amelia Kaminetsky",
    type: "dependent",
    benefits: [],
  },
];

const benefitData: Benefit[] = [
  { id: 0, type: "medical" },
  { id: 1, type: "dental" },
  { id: 2, type: "vision" },
];

export { peopleData };
export { benefitData };
