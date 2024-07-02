import Header from "@/Components/Header";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Header */}
      <Header />
      <div>
        {/* Side bar */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
