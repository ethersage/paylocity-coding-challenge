import EditPerson from "@/components/EditPerson/EditPerson";
import { Person } from "@/mock-data";

async function getPerson(id: number): Promise<Person> {
  const response = await fetch(`http://localhost:3000/api/people/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export default async function page({ params }: { params: { id: string } }) {
  // If this isn't a parsable number, it will be NaN and getPerson will throw an error
  const idNumber = Number(params.id);

  const person = await getPerson(idNumber);
  return <EditPerson person={person} />;
}
