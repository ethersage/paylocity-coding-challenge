import { Person } from "@/mock-data";
import styles from "./page.module.css";
import Link from "next/link";

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
    <main className={styles.main}>
      <div className={styles.center}>
        <ul>
          {people.map((person: Person) => (
            <li key={person.id}>
              <Link href={`/edit`}>
                {person.name} ({person.type})
              </Link>
              &nbsp;
              <Link href={`/edit/${person.id}`}>[edit]</Link>
              &nbsp;
              <Link href={`/select/${person.id}`}>[select benefits]</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
