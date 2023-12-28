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

  async function saveBenefits(benefits: Benefit[]) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/people/${person.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...person, benefits }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setBenefits(benefits);
    } catch (error) {
      console.error(error);
    }
  }

  async function onSelectBenefit(id: number) {
    const newBenefit = availableBenefits.find((b) => b.id === id);

    if (newBenefit) {
      saveBenefits([...benefits, newBenefit]);
    }
  }

  async function onDeselectBenefit(id: number) {
    const newBenefits = benefits.filter((benefit) => benefit.id !== id);

    saveBenefits(newBenefits);
  }

  return (
    <>
      <h1>Select benefits for {person?.name}</h1>
      <h2>Selected benefits</h2>
      <ul>
        {benefits.map((benefit) => (
          <li key={benefit.id}>
            <button type="button" onClick={() => onDeselectBenefit(benefit.id)}>
              Deselect
            </button>
            {benefit.type}
          </li>
        ))}
      </ul>
      <h2>Available benefits</h2>
      <ul>
        {availableBenefits.map((benefit) => (
          <li key={benefit.id}>
            <button type="button" onClick={() => onSelectBenefit(benefit.id)}>
              Select
            </button>
            {benefit.type}
          </li>
        ))}
      </ul>
    </>
  );
}
