export default function CaliLayout({
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
