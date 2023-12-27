"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Benefit, Person, benefitData } from "@/mock-data";

export default function SelectBenefits({ person }: { person: Person }) {
  const router = useRouter();
  // TODO: handle non-number params
  // TODO: handle 404 when person not found
  // TODO: handle waiting state on save

  const [benefits, setBenefits] = useState(person.benefits);

  const availableBenefits: Benefit[] = useMemo(
    () =>
      // sort the benefits too
      benefitData.filter(
        (benefit) => benefits.find((b) => b.id === benefit.id) === undefined
      ),
    [benefits]
  );

  async function onSelectBenefit(id: number) {
    const newBenefit = availableBenefits.find((b) => b.id === id);
    console.log(newBenefit);
    if (newBenefit) {
      setBenefits([...benefits, newBenefit]);
      try {
        // const response = await fetch(
        //   `http://localhost:3000/api/people/${person.id}`,
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ ...person, benefits: [] }),
        //   }
        // );
        // console.log(response);
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // Handle the response data as needed
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <Link href="/">Back to People</Link>
      <h1>Select benefits for {person?.name}</h1>
      <h2>Selected benefits</h2>
      <ul>
        {benefits.map((benefit) => (
          <li key={benefit.id}>{benefit.type}</li>
        ))}
      </ul>
      <h2>Available benefits</h2>
      <ul>
        {availableBenefits.map((benefit) => (
          <li key={benefit.id}>
            {benefit.type}&nbsp;
            <button type="button" onClick={() => onSelectBenefit(benefit.id)}>
              select
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
