import HeaderSection from "@/components/Header";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <HeaderSection />
        {children}
    </>
  );
}
