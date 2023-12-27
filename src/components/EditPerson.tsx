"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Person } from "@/mock-data";

/**
 * TODO: allow editing the person type
 */

export default function page({ person }: { person: Person }) {
  const router = useRouter();
  /**
   * Replace this with API data fetching
   */
  // TODO: handle non-number params
  // TODO: handle 404 when person not found

  const [name, setName] = useState(person?.name || "");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    console.log("onsubmit");
    e.preventDefault();

    if (person) {
      // replace with API call
    }

    router.push("/");
  }

  function onChange(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
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
