// TODO: extract types out to their own files since they're not "mock data" as the
// module name implies
export type PersonType = "Employee" | "Spouse" | "Child";

export interface Person {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
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
    firstName: "Joshua",
    middleName: "Michael",
    lastName: "Kaminetsky",
    type: "Employee",
    benefits: [],
    cost: 0,
  },
  {
    id: 1,
    firstName: "Bridget",
    lastName: "Kaminetsky",
    type: "Spouse",
    benefits: [],
    cost: 0,
  },
  {
    id: 2,
    firstName: "Amelia",
    lastName: "Kaminetsky",
    type: "Child",
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
