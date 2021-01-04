import NavBar from "./NavBar";

export function Layout({ children }) {
  return (
    <div className="page-bg md:py-8 min-h-screen">
      <div className="w-full max-w-5xl mx-auto p-4 md:p-8 frosted-glass md:rounded-xl">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
