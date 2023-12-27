"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import peopleData from "@/mock-data";
import { useRouter } from "next/navigation";

export default function page({ params }: { params: { id: string } }) {
  const router = useRouter();
  /**
   * Replace this with API data fetching
   */
  // TODO: handle non-number params
  // TODO: handle 404 when person not found
  const person = peopleData.find((p) => p.id === Number(params.id));

  const [name, setName] = useState(person?.name || "");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    console.log("onsubmit");
    e.preventDefault();

    if (person) {
      person.name = name;
    }

    router.push("/");
  }

  function onChange(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);

    // replace with API call
  }

  return (
    <>
      <Link href="/">Back to People</Link>
      <h1>Edit {person?.name}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={onChange} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
