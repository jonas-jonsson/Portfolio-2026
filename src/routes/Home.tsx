import { Coffee } from "lucide-react";

export const Home = () => {
  return (
    <div className="w-175">
      {/* Hero */}
      <section className="relative flex flex-col gap-10">
        <div className="flex flex-col ">
          <span className="text-3xl pl-10">Hi! I'm</span>
          <h2 className="flex w-fit text-6xl text font-bold bg-linear-to-tr from-yellow-500 to-yellow-200 text-transparent bg-clip-text">
            Jonas Jönsson
          </h2>
        </div>
        <p className="text-2xl">
          I'm a fullstack developer passionate about building robust, reliable
          backends and clean, accessible interfaces.
        </p>
        <p className="text-2xl">
          In my free time, I enjoy exploring new coding languages and
          frameworks, tinkering with software as well as hardware, and drinking
          way too much coffee.
          <span className="relative">
            <Coffee className="text-" />
          </span>
        </p>
      </section>
    </div>
  );
};
