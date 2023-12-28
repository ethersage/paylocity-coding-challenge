import styles from "./layout.module.css";

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.back}>
        <a href="/">{"<"} Back to People</a>
      </div>
      {children}
    </>
  );
}
