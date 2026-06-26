import { Card } from "@/components/Card";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";

export const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex justify-center">
      <section className="relative flex flex-col gap-8 w-full">
        {/* Header Card */}
        <div className="flex flex-col gap-2 bg-(--surface)/40 rounded-xl p-6 shadow-(--card-shadow)">
          <h1 className="flex w-fit text-5xl md:text-6xl font-bold bg-linear-to-tr from-yellow-500 to-orange-500 text-transparent bg-clip-text">
            Contact
          </h1>
          <p className="text-xl max-w-xl text-balance opacity-90">
            Want to get in touch with me?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* GitHub Card */}
          <a
            href="https://github.com/jonas-jonsson"
            target="_blank"
            rel="noopener noreferrer"
            className="group block no-underline transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Removed all static border and group-hover border utility classes */}
            <Card className="flex-row items-center gap-4 bg-(--surface)/20 p-5 rounded-xl border-none h-full group-hover:bg-(--surface)/30 transition-all duration-200">
              <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-200 shrink-0">
                <GitHubIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  GitHub
                </span>
                <span className="text-base font-semibold text-white truncate">
                  jonas-jonsson
                </span>
              </div>
            </Card>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/jonas-j-57858b320/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block no-underline transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Removed all static border and group-hover border utility classes */}
            <Card className="flex-row items-center gap-4 bg-(--surface)/20 p-5 rounded-xl border-none h-full group-hover:bg-(--surface)/30 transition-all duration-200">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200 shrink-0">
                <LinkedInIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  LinkedIn
                </span>
                <span className="text-base font-semibold text-white truncate">
                  Jonas Jönsson
                </span>
              </div>
            </Card>
          </a>
          {/* Email Card */}
          <a
            href="mailto:jonas@example.com"
            className="group block no-underline transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Removed all static border and group-hover border utility classes */}
            <Card className="flex-row items-center gap-4 bg-(--surface)/20 p-5 rounded-xl border-none h-full group-hover:bg-(--surface)/30 transition-all duration-200">
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 shrink-0">
                <MailIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  Email
                </span>
                <span className="text-base font-semibold text-white break-all">
                  jonas@example.com
                </span>
              </div>
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
};
