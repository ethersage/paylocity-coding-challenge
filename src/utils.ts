import { Person } from "./mock-data";

export function formatName(person: Person) {
  if (!person.middleName || person.middleName.trim() === "") {
    return `${person.firstName} ${person.lastName}`;
  } else {
    return `${person.firstName} ${person.middleName} ${person.lastName}`;
  }
}
