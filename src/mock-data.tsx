export type PersonType = "employee" | "spouse" | "dependent";

export interface Person {
  id: number;
  name: string;
  type: PersonType;
}

/**
 * Mock out data, will move this into a API if we get time
 */
const peopleData: Person[] = [
  {
    id: 0,
    name: "Joshua Kaminetsky",
    type: "employee",
  },
  {
    id: 1,
    name: "Bridget Kaminetsky",
    type: "spouse",
  },
  {
    id: 2,
    name: "Amelia Kaminetsky",
    type: "dependent",
  },
];

export default peopleData;
