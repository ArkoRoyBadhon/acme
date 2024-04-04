import HeaderSection from "@/components/Header";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="custom_container">
        <HeaderSection />
        </div>
        {children}
    </>
  );
}
