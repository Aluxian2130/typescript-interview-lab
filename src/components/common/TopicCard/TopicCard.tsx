import clsx from "clsx";
import { Clock3 } from "lucide-react";

import Card from "@/components/ui/Card";
import type { Topic } from "@/shared/types";

interface TopicCardProps {
  topic: Topic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <article id={topic.id} className="scroll-mt-6">
      <Card className="p-0">
        <details className="group">
          <summary className="cursor-pointer list-none p-6 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  {topic.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                  {topic.description}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span
                  className={clsx(
                    "rounded-full px-2.5 py-1 font-medium",
                    topic.difficulty === "Beginner" &&
                      "bg-emerald-500/15 text-emerald-300",
                    topic.difficulty === "Intermediate" &&
                      "bg-sky-500/15 text-sky-300",
                    topic.difficulty === "Advanced" &&
                      "bg-violet-500/15 text-violet-300",
                  )}
                >
                  {topic.difficulty}
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  {topic.estimatedMinutes} min
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm font-medium text-sky-400 group-open:hidden">
              Open notes
            </p>
          </summary>

          <div className="space-y-6 border-t border-slate-800 px-6 py-6">
            <div>
              <h4 className="font-semibold text-slate-200">Key points</h4>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300 marker:text-sky-400">
                {topic.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            {topic.examples.map((example) => (
              <div key={example.title}>
                <h4 className="font-semibold text-slate-200">
                  {example.title}
                </h4>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-sm leading-6 text-sky-100">
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}

            <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
              <h4 className="text-sm font-semibold text-amber-300">
                Interview takeaway
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {topic.interviewTip}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {topic.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </details>
      </Card>
    </article>
  );
}
