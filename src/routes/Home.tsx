import { Card } from "@/components/Card";

export const Home = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex justify-center">
      <section className="relative flex flex-col gap-8 w-full">
        {/* Header Card */}
        <Card className="flex-col gap-2 bg-(--surface)/40 rounded-xl p-6 shadow-(--card-shadow)">
          <span className="text-2xl md:text-3xl pl-1">Hi! I'm</span>

          <h1 className="w-fit text-4xl sm:text-5xl md:text-7xl font-bold bg-linear-to-tr from-yellow-500 to-orange-500 text-transparent bg-clip-text leading-tight tracking-tight">
            Jonas Jönsson
          </h1>
        </Card>

        {/* Bio Card */}
        <Card className="flex-col gap-6 p-6">
          <div className="max-w-2xl flex flex-col gap-4">
            <p className="text-lg md:text-2xl text-balance leading-relaxed">
              I'm a fullstack developer passionate about building robust,
              reliable backends and clean, accessible interfaces.
            </p>
            <p className="text-lg md:text-2xl text-balance leading-relaxed">
              In my free time, I enjoy exploring new coding languages and
              frameworks, tinkering with software as well as hardware, and
              drinking way too much coffee. ☕
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
};
