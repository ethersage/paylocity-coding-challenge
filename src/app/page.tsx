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

const usdRounded = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 0,
  style: "currency",
});

const usdUnrounded = new Intl.NumberFormat("en-US", {
  currency: "USD",
  maximumFractionDigits: 2,
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
              <div>Annual cost: {usdRounded.format(person.annualCost)}</div>
              <div>
                Per pay period cost:&nbsp;
                {usdUnrounded.format(person.perPayPeriodCost)}
              </div>
              <div>
                Net pay per pay period:&nbsp;
                {usdUnrounded.format(person.netPayPerPayPeriod)}
              </div>
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
