/**
 * List the employee and their dependents
 */

import peopleData from "@/mock-data";
import Link from "next/link";

export default function ListPeople() {
  return (
    <ul>
      {peopleData.map((person) => (
        <li key={person.id}>
          <Link href={`/edit`}>
            {person.name} ({person.type})
          </Link>
          &nbsp;
          <Link href={`/edit/${person.id}`}>[edit]</Link>
        </li>
      ))}
    </ul>
  );
}
