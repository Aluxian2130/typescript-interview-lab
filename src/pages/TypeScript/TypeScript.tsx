import { Braces } from "lucide-react";

import TopicCard from "@/components/common/TopicCard";
import { typescriptTopics } from "@/shared/data/typescriptTopics";

const topicGroups = Array.from(
  new Set(typescriptTopics.map((topic) => topic.group)),
);

export default function TypeScript() {
  return (
    <section className="space-y-10">
      <header className="max-w-3xl">
        <div className="flex items-center gap-3 text-sky-400">
          <Braces className="h-8 w-8" aria-hidden="true" />
          <p className="text-sm font-semibold tracking-wider uppercase">
            TypeScript reference
          </p>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-slate-100">
          Build confidence with the type system
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">
          Review the concepts that appear most often in TypeScript interviews.
          Each topic includes the core rules, a working example, and a concise
          interview takeaway.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          {typescriptTopics.length} topics · Expand a topic to study it
        </p>
      </header>

      <nav aria-label="TypeScript topic groups">
        <ul className="flex flex-wrap gap-2">
          {topicGroups.map((group) => (
            <li key={group}>
              <a
                href={`#${group.toLowerCase().replaceAll(" ", "-")}`}
                className="block rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-300 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
              >
                {group}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {topicGroups.map((group) => (
        <section
          key={group}
          id={group.toLowerCase().replaceAll(" ", "-")}
          className="scroll-mt-6 space-y-4"
        >
          <h2 className="border-b border-slate-800 pb-3 text-2xl font-bold text-slate-100">
            {group}
          </h2>
          {typescriptTopics
            .filter((topic) => topic.group === group)
            .map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
        </section>
      ))}
    </section>
  );
}
