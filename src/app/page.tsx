import Image from "next/image";
import styles from "./page.module.css";
import ListPeople from "@/ListPeople/ListPeople";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <ListPeople />
      </div>
    </main>
  );
}
