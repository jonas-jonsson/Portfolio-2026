import { Route, Routes } from "react-router";
import { Home } from "@/routes/Home";
import { Navbar } from "@/components/Navbar";
import { VantaBackground } from "@/components/VantaBackground";

export const App = () => {
  return (
    <>
      {/* Background Component */}
      <VantaBackground />

      {/* App Layout */}
      <div className="flex flex-col h-screen w-screen text-(--text) p-5 gap-20 relative z-10 overflow-auto bg-linear-to-r from-(--bg-grad-l)/90 via-(--bg-grad-m)/85 to-(--bg-grad-r)/80">
        <Navbar />
        <main className="flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
};
