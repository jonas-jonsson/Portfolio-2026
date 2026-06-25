import { FolderCode, House, Mail } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="h-1/10 backdrop-blur-2xl flex border border-(--border)/50 px-5 p-3 items-center gap-3 bg-(--surface)/40  justify-between rounded-xl shadow-(--card-shadow)">
      {/* Left Container */}
      <div className="flex h-full items-center gap-3">
        <div className="flex border-(--border) border-2 rounded-full p-0.5 h-full">
          <img
            src="src/assets/images/466378918_9048400881857306_466686750876003653_n-2.jpg"
            className="rounded-full"
            alt=""
          />
        </div>
        <h1 className="text-3xl">Jonas Jönsson</h1>
        <span className="pt-1.5 text-(--text)/70">❯</span>
      </div>

      {/* Right Container  */}
      <>
        <ul className="flex gap-5 text-xl">
          <button className="flex gap-1.5 hover:text-(--border) hover:cursor-pointer hover:transform-fill">
            <House /> Home
          </button>
          <button className="flex gap-1.5 hover:text-(--border)">
            <FolderCode /> Projects
          </button>
          <button className="flex gap-1.5 hover:text-(--border)">
            <Mail /> Contact
          </button>
        </ul>
      </>
    </div>
  );
};
