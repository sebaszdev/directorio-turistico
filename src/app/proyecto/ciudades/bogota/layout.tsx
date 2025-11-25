export default function MedellinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1 h-full">
      {children}
    </main>
  );
}
