"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Person } from "@/mock-data";
import { formatName } from "@/utils";

/**
 * TODO: allow editing the person type
 */

export default function EditPerson({ person }: { person: Person }) {
  const router = useRouter();
  // TODO: handle waiting state on save

  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [middleName, setMiddleName] = useState(person?.middleName || "");
  const [lastName, setLastName] = useState(person?.lastName || "");

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
          body: JSON.stringify({ ...person, firstName, middleName, lastName }),
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

  function onFirstNameChange(e: FormEvent<HTMLInputElement>) {
    setFirstName(e.currentTarget.value);
  }

  function onMiddleNameChange(e: FormEvent<HTMLInputElement>) {
    setMiddleName(e.currentTarget.value);
  }

  function onLastNameChange(e: FormEvent<HTMLInputElement>) {
    setLastName(e.currentTarget.value);
  }

  return (
    <>
      <h1>Edit {formatName(person)}</h1>
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={onFirstNameChange} />

        <label>Middle Name</label>
        <input type="text" value={middleName} onChange={onMiddleNameChange} />

        <label>Last Name</label>
        <input type="text" value={lastName} onChange={onLastNameChange} />

        <button type="submit">Save</button>
      </form>
    </>
  );
}
