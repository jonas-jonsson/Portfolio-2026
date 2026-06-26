import { Card } from "@/components/Card";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";

export const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 flex justify-center">
      <section className="relative flex flex-col gap-8 w-full">
        {/* Header Card */}
        <div className="flex flex-col gap-2 bg-(--surface)/40 rounded-xl p-6 shadow-(--card-shadow)">
          <h1 className="flex w-fit text-5xl md:text-6xl font-bold bg-linear-to-tr from-[color:var(--accent-title-from)] to-[color:var(--accent-title-to)] text-transparent bg-clip-text">
            Contact
          </h1>
          <p className="text-xl max-w-xl text-balance text-(--text)">
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
            <Card className="flex-row items-center gap-4 p-5 rounded-xl h-full group-hover:shadow-md transition-all duration-200">
              <div className="p-3 rounded-lg bg-[color:var(--accent-gold-soft)] text-[color:var(--accent-gold)] group-hover:bg-[color:var(--accent-gold)] group-hover:text-(--text-h) transition-colors duration-200 shrink-0">
                <GitHubIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-(--text) font-medium uppercase tracking-wider">
                  GitHub
                </span>
                <span className="text-base font-semibold text-(--text-h) truncate">
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
            <Card className="flex-row items-center gap-4 p-5 rounded-xl h-full group-hover:shadow-md transition-all duration-200">
              <div className="p-3 rounded-lg bg-[color:var(--accent-blue-soft)] text-[color:var(--accent-blue)] group-hover:bg-[color:var(--accent-blue)] group-hover:text-(--text-h) transition-colors duration-200 shrink-0">
                <LinkedInIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-(--text) font-medium uppercase tracking-wider">
                  LinkedIn
                </span>
                <span className="text-base font-semibold text-(--text-h) truncate">
                  Jonas Jönsson
                </span>
              </div>
            </Card>
          </a>
          {/* Email Card */}
          <a
            href="mailto:jonas.jonsson@live.com"
            className="group block no-underline transition-transform duration-200 hover:-translate-y-1"
          >
            <Card className="flex-row items-center gap-4 p-5 rounded-xl h-full group-hover:shadow-md transition-all duration-200">
              <div className="p-3 rounded-lg bg-[color:var(--accent-orange-soft)] text-[color:var(--accent-orange)] group-hover:bg-[color:var(--accent-orange)] group-hover:text-(--text-h) transition-colors duration-200 shrink-0">
                <MailIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm text-(--text) font-medium uppercase tracking-wider">
                  Email
                </span>
                <span className="text-base font-semibold text-(--text-h) break-all">
                  Jonas Jönsson
                </span>
              </div>
            </Card>
          </a>
        </div>
      </section>
    </div>
  );
};
