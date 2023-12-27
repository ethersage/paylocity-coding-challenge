"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import peopleData from "@/mock-data";

export default function page({ params }: { params: { id: string } }) {
  /**
   * Replace this with API data fetching
   */

  // TODO: handle non-number params
  // TODO: handle 404 when person not found
  const person = peopleData.find((p) => p.id === Number(params.id));
  console.log(person);

  return <h1>Edit {person?.name}</h1>;
}
