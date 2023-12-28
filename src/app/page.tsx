import Link from "next/link";

import { Person } from "@/mock-data";

import styles from "./page.module.css";

async function getPeople() {
  const res = await fetch(`http://localhost:3000/api/people`, {
    cache: "no-store",
  });
  const people = await res.json();

  return people;
}

export default async function Home() {
  const people = await getPeople();

  return (
    <>
      <h1>Benefits Summary</h1>
      <div className={styles.center}>
        <ul>
          {people.map((person: Person) => (
            <li key={person.id}>
              <div>
                <Link href={`/edit`}>
                  {person.name} ({person.type})
                </Link>
                &nbsp;
                <Link href={`/edit/${person.id}`}>[edit]</Link>
                &nbsp;
                <Link href={`/select/${person.id}`}>[select benefits]</Link>
              </div>
              <div>
                Selected benefits:{" "}
                {person.benefits.map((benefit) => benefit.type).join("")}
              </div>
              <div>Cost: {person.cost}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
