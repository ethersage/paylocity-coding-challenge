export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="/">{"<"} Back to People</a>
      {children}
    </>
  );
}
