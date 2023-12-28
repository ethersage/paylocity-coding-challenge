import Link from "next/link";

import { Person } from "@/mock-data";

import styles from "./page.module.css";
import { formatName } from "@/utils";

async function getPeople() {
  const res = await fetch(`http://localhost:3000/api/people`, {
    cache: "no-store",
  });
  const people = await res.json();

  return people;
}

let usd = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

export default async function Home() {
  const people = await getPeople();

  return (
    <>
      <h1>Benefits Summary</h1>
      <div className={styles.center}>
        <ul>
          {people.map((person: Person) => (
            <li className="person" key={person.id}>
              <div>
                {formatName(person)} ({person.type})
              </div>
              <div>
                Selected benefits:&nbsp;
                {person.benefits.length === 0
                  ? "None"
                  : person.benefits.map((benefit) => benefit.type).join(", ")}
              </div>
              <div>Cost: {usd.format(person.cost)}</div>
              <Link href={`/edit/${person.id}`}>
                <button>Edit Person</button>
              </Link>
              <Link href={`/select/${person.id}`}>
                <button>Select Benefits</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
