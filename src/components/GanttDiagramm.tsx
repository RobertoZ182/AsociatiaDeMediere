import React from "react";
import { useTranslation } from "react-i18next";

type Range = { start: number; end: number }; // inclusive weeks
type Task = {
  id: string;
  nameKey: string; // i18n key instead of raw text
  ranges: Range[];
  color: "light" | "dark";
};

const WEEKS = 20;

const tasks: Task[] = [
  { id: "A1", nameKey: "gantt.tasks.A1", ranges: [{ start: 1, end: 3 }], color: "light" },
  { id: "A2", nameKey: "gantt.tasks.A2", ranges: [{ start: 3, end: 4 }, { start: 7, end: 8 }, { start: 11, end: 12 }, { start: 15, end: 16 }, { start: 19, end: 20 }], color: "light" },
  { id: "A3", nameKey: "gantt.tasks.A3", ranges: [{ start: 2, end: 20 }], color: "light" },
  { id: "A4", nameKey: "gantt.tasks.A4", ranges: [{ start: 4, end: 8 }], color: "light" },
  { id: "A5", nameKey: "gantt.tasks.A5", ranges: [{ start: 3, end: 11 }], color: "light" },
  { id: "A6", nameKey: "gantt.tasks.A6", ranges: [{ start: 3, end: 7 }, { start: 16, end: 20 }], color: "light" },
  { id: "A7", nameKey: "gantt.tasks.A7", ranges: [{ start: 1, end: 3 }, { start: 8, end: 10 }, { start: 14, end: 16 }], color: "light" },
  { id: "A8", nameKey: "gantt.tasks.A8", ranges: [{ start: 1, end: 20 }], color: "light" },
  { id: "A9", nameKey: "gantt.tasks.A9", ranges: [{ start: 4, end: 6 }, { start: 10, end: 12 }, { start: 16, end: 18 }], color: "light" },
  { id: "A10", nameKey: "gantt.tasks.A10", ranges: [{ start: 5, end: 9 }, { start: 17, end: 20 }], color: "light" },
  { id: "A11", nameKey: "gantt.tasks.A11", ranges: [{ start: 1, end: 20 }], color: "light" },
  { id: "A12", nameKey: "gantt.tasks.A12", ranges: [{ start: 10, end: 12 }], color: "light" },
  { id: "A13", nameKey: "gantt.tasks.A13", ranges: [{ start: 7, end: 10 }], color: "light" },
  { id: "A14", nameKey: "gantt.tasks.A14", ranges: [{ start: 1, end: 20 }], color: "light" },
  { id: "A15", nameKey: "gantt.tasks.A15", ranges: [{ start: 1, end: 20 }], color: "light" },
  { id: "A16", nameKey: "gantt.tasks.A16", ranges: [{ start: 3, end: 6 }, { start: 15, end: 20 }], color: "light" },
  { id: "A17", nameKey: "gantt.tasks.A17", ranges: [{ start: 1, end: 20 }], color: "light" },
  { id: "A18", nameKey: "gantt.tasks.A18", ranges: [{ start: 10, end: 15 }], color: "dark" },
  { id: "A19", nameKey: "gantt.tasks.A19", ranges: [{ start: 16, end: 20 }], color: "dark" },
  { id: "A20", nameKey: "gantt.tasks.A20", ranges: [{ start: 1, end: 20 }], color: "light" },
];

function clampRange(r: Range): Range {
  const start = Math.max(1, Math.min(WEEKS, r.start));
  const end = Math.max(1, Math.min(WEEKS, r.end));
  return start <= end ? { start, end } : { start: end, end: start };
}

export default function Gantt2025Homepage() {
  const { t } = useTranslation();

  const rangesToLabel = (ranges: Range[]) =>
    ranges
      .map((rr) => {
        const r = clampRange(rr);
        // ex: "Wk. 3–5" / "Săpt. 3–5" depending on language
        return r.start === r.end
          ? t("gantt.weekSingle", { week: r.start })
          : t("gantt.weekRange", { start: r.start, end: r.end });
      })
      .join(", ");

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("gantt.title")}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-5 rounded bg-[#92D050]" /> {t("gantt.legend.activity")}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-5 rounded bg-[#00B050]" /> {t("gantt.legend.milestone")}
            </span>
          </div>
        </div>

        {/* ===== Mobile / small screens: card list ===== */}
        <div className="mt-6 space-y-3 md:hidden">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{task.id}</div>
                  <div className="mt-1 text-sm text-neutral-800">{t(task.nameKey)}</div>
                </div>

                <span
                  className="shrink-0 rounded-full px-2 py-1 text-[11px] font-semibold"
                  style={{
                    background:
                      task.color === "dark" ? "rgba(0,176,80,.12)" : "rgba(146,208,80,.16)",
                    color: task.color === "dark" ? "#007A38" : "#2F6B19",
                  }}
                >
                  {task.color === "dark" ? t("gantt.tag.milestone") : t("gantt.tag.activity")}
                </span>
              </div>

              {/* Compact bar timeline */}
              <div className="mt-3">
                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span>{t("gantt.weekShort", { week: 1 })}</span>
                  <span>{t("gantt.weekShort", { week: WEEKS })}</span>
                </div>

                <div className="relative mt-2 h-3 w-full overflow-hidden rounded-full bg-neutral-100">
                  {task.ranges.map((rr, idx) => {
                    const r = clampRange(rr);
                    const leftPct = ((r.start - 1) / WEEKS) * 100;
                    const widthPct = ((r.end - r.start + 1) / WEEKS) * 100;
                    const bg = task.color === "dark" ? "#00B050" : "#92D050";
                    return (
                      <div
                        key={idx}
                        className="absolute top-0 h-full rounded-full"
                        style={{
                          left: `${leftPct}%`,
                          width: `${widthPct}%`,
                          background: bg,
                        }}
                        aria-label={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                        title={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                      />
                    );
                  })}
                </div>

                <div className="mt-2 text-xs text-neutral-600">
                  <span className="font-semibold text-neutral-700">{t("gantt.periodsLabel")} </span>
                  {rangesToLabel(task.ranges)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Desktop (md+): table/grid ===== */}
        <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm md:block">
          <div className="min-w-[980px]">
            <div className="grid grid-cols-[110px_1fr] border-b border-neutral-200">
              <div className="border-r border-neutral-200 p-3 text-xs font-semibold text-neutral-700">
                {t("gantt.table.nr")}
              </div>

              <div className="p-3">
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `minmax(240px, 360px) repeat(${WEEKS}, minmax(24px, 1fr))`,
                  }}
                >
                  <div className="pr-3 text-xs font-semibold text-neutral-700">
                    {t("gantt.table.description")}
                  </div>

                  {Array.from({ length: WEEKS }, (_, i) => (
                    <div
                      key={i}
                      className="text-center text-[11px] font-semibold text-neutral-700"
                      title={t("gantt.weekTooltip", { week: i + 1 })}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="divide-y divide-neutral-200">
              {tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-[110px_1fr]">
                  <div className="border-r border-neutral-200 p-3 text-sm font-semibold text-neutral-800">
                    {task.id}
                  </div>

                  <div className="p-3">
                    <div
                      className="grid items-center gap-0"
                      style={{
                        gridTemplateColumns: `minmax(240px, 360px) repeat(${WEEKS}, minmax(24px, 1fr))`,
                      }}
                    >
                      <div className="pr-3 font-semibold leading-snug text-neutral-800">
                        {t(task.nameKey)}
                      </div>

                      {Array.from({ length: WEEKS }, (_, i) => (
                        <div key={i} className="h-8 border-l border-neutral-100" />
                      ))}

                      <div
                        className="pointer-events-none col-start-2 row-start-1"
                        style={{
                          gridColumn: `2 / span ${WEEKS}`,
                          gridRow: "1 / 2",
                          display: "grid",
                          gridTemplateColumns: `repeat(${WEEKS}, minmax(24px, 1fr))`,
                          alignItems: "center",
                          height: "2rem",
                        }}
                      >
                        {task.ranges.map((rr, idx) => {
                          const r = clampRange(rr);
                          const bg = task.color === "dark" ? "#00B050" : "#2c7dc4ff";
                          return (
                            <div
                              key={idx}
                              className="h-5 rounded-md shadow-sm"
                              style={{
                                background: bg,
                                gridColumn: `${r.start} / ${r.end + 1}`,
                              }}
                              aria-label={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                              title={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
