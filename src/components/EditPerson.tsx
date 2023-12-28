"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Person } from "@/mock-data";

/**
 * TODO: allow editing the person type
 */

export default function EditPerson({ person }: { person: Person }) {
  const router = useRouter();
  // TODO: handle non-number params
  // TODO: handle 404 when person not found
  // TODO: handle waiting state on save

  const [name, setName] = useState(person?.name || "");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/people/${person.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...person, name }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }

    window.location.href = "http://localhost:3000/";
  }

  function onChange(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  return (
    <>
      <h1>Edit {person?.name}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={onChange} />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
