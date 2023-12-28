"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Benefit, BenefitType, Person, benefitData } from "@/mock-data";

export const benefitDisplayOrder: BenefitType[] = [
  "Medical",
  "Dental",
  "Vision",
];

export default function SelectBenefits({ person }: { person: Person }) {
  const router = useRouter();
  // TODO: handle waiting state on save

  const [benefits, setBenefits] = useState(person.benefits);

  const availableBenefits: Benefit[] = useMemo(
    () =>
      // console.log(benefitData) ||
      // TODO: sort the benefits too

      benefitData
        .filter(
          (benefit) => benefits.find((b) => b.id === benefit.id) === undefined
        )
        .sort((a, b) => a.displayOrder - b.displayOrder),
    [benefits]
  );

  useMemo(
    () => benefits.sort((a, b) => a.displayOrder - b.displayOrder),
    [benefits]
  );

  async function onSelectBenefit(id: number) {
    const newBenefit = availableBenefits.find((b) => b.id === id);

    if (newBenefit) {
      const newBenefits = [...benefits, newBenefit];
      try {
        const response = await fetch(
          `http://localhost:3000/api/people/${person.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...person, benefits: newBenefits }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        setBenefits(newBenefits);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
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
            <button type="button" onClick={() => onSelectBenefit(benefit.id)}>
              select
            </button>
            {benefit.type}
          </li>
        ))}
      </ul>
    </>
  );
}
