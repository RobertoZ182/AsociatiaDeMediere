import React from "react";
import { useTranslation } from "react-i18next";

type Range = { start: number; end: number };
type Task = {
  id: string;
  nameKey: string;
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
        return r.start === r.end
          ? t("gantt.weekSingle", { week: r.start })
          : t("gantt.weekRange", { start: r.start, end: r.end });
      })
      .join(", ");

  // Logo-like palette (black + gold), classic look
  const BAR_ACTIVITY = "#D4AF37"; // classic gold
  const BAR_MILESTONE = "#B8921F"; // deeper gold
  const STROKE = "#0B0B0B";
  const BORDER = "rgba(212,175,55,0.22)";
  const BORDER_SOFT = "rgba(212,175,55,0.14)";
  const TEXT_PRIMARY = "rgba(255,236,190,0.92)";
  const TEXT_MUTED = "rgba(255,236,190,0.70)";

  return (
    <section className="w-full relative overflow-hidden">
      {/* Classic background to match logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,128,0.10)_0%,rgba(0,0,0,0.92)_58%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[repeating-linear-gradient(135deg,rgba(212,175,55,0.16)_0px,rgba(212,175,55,0.16)_1px,transparent_1px,transparent_18px)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold tracking-wide">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
                {t("gantt.title")}
              </span>
            </h2>
            <div className="mt-4 h-px w-44 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>

          {/* Legend */}
          <div
            className="flex flex-wrap items-center gap-3 text-xs"
            style={{ color: TEXT_MUTED }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2 bg-black/30 backdrop-blur-[2px]"
              style={{ borderColor: BORDER_SOFT }}
            >
              <span
                className="h-3 w-5 rounded"
                style={{
                  background: BAR_ACTIVITY,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset",
                }}
              />
              {t("gantt.legend.activity")}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-2 bg-black/30 backdrop-blur-[2px]"
              style={{ borderColor: BORDER_SOFT }}
            >
              <span
                className="h-3 w-5 rounded"
                style={{
                  background: BAR_MILESTONE,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset",
                }}
              />
              {t("gantt.legend.milestone")}
            </span>
          </div>
        </div>

        {/* ===== Mobile / small screens: card list ===== */}
        <div className="mt-8 space-y-4 md:hidden">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-2xl border bg-black/40 backdrop-blur-[2px] shadow-xl"
              style={{ borderColor: BORDER }}
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold" style={{ color: TEXT_PRIMARY }}>
                      {task.id}
                    </div>
                    <div className="mt-1 text-sm" style={{ color: TEXT_MUTED }}>
                      {t(task.nameKey)}
                    </div>
                  </div>

                  <span
                    className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold border"
                    style={{
                      borderColor: task.color === "dark" ? "rgba(184,146,31,0.35)" : "rgba(212,175,55,0.35)",
                      background:
                        task.color === "dark"
                          ? "rgba(184,146,31,0.14)"
                          : "rgba(212,175,55,0.14)",
                      color: task.color === "dark" ? "rgba(255,236,190,0.90)" : "rgba(255,236,190,0.90)",
                    }}
                  >
                    {task.color === "dark" ? t("gantt.tag.milestone") : t("gantt.tag.activity")}
                  </span>
                </div>

                {/* Compact bar timeline */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-[11px]" style={{ color: "rgba(255,236,190,0.55)" }}>
                    <span>{t("gantt.weekShort", { week: 1 })}</span>
                    <span>{t("gantt.weekShort", { week: WEEKS })}</span>
                  </div>

                  <div
                    className="relative mt-2 h-3 w-full overflow-hidden rounded-full"
                    style={{
                      background: "rgba(255,236,190,0.08)",
                      border: `1px solid ${BORDER_SOFT}`,
                    }}
                  >
                    {task.ranges.map((rr, idx) => {
                      const r = clampRange(rr);
                      const leftPct = ((r.start - 1) / WEEKS) * 100;
                      const widthPct = ((r.end - r.start + 1) / WEEKS) * 100;
                      const bg = task.color === "dark" ? BAR_MILESTONE : BAR_ACTIVITY;

                      return (
                        <div
                          key={idx}
                          className="absolute top-0 h-full rounded-full"
                          style={{
                            left: `${leftPct}%`,
                            width: `${widthPct}%`,
                            background: bg,
                            boxShadow:
                              "0 0 0 1px rgba(0,0,0,0.25) inset, 0 8px 18px rgba(0,0,0,0.35)",
                          }}
                          aria-label={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                          title={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                        />
                      );
                    })}
                  </div>

                  <div className="mt-3 text-xs" style={{ color: TEXT_MUTED }}>
                    <span className="font-semibold" style={{ color: TEXT_PRIMARY }}>
                      {t("gantt.periodsLabel")}{" "}
                    </span>
                    {rangesToLabel(task.ranges)}
                  </div>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Desktop (md+): table/grid ===== */}
        <div
          className="mt-8 hidden overflow-x-auto rounded-2xl border bg-black/40 backdrop-blur-[2px] shadow-2xl md:block"
          style={{ borderColor: BORDER }}
        >
          <div className="min-w-[980px]">
            {/* Table header */}
            <div className="grid grid-cols-[110px_1fr] border-b" style={{ borderColor: BORDER_SOFT }}>
              <div
                className="border-r p-4 text-xs font-semibold font-serif tracking-wide"
                style={{ borderColor: BORDER_SOFT, color: TEXT_PRIMARY }}
              >
                {t("gantt.table.nr")}
              </div>

              <div className="p-4">
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `minmax(240px, 360px) repeat(${WEEKS}, minmax(24px, 1fr))`,
                  }}
                >
                  <div className="pr-3 text-xs font-semibold font-serif tracking-wide" style={{ color: TEXT_PRIMARY }}>
                    {t("gantt.table.description")}
                  </div>

                  {Array.from({ length: WEEKS }, (_, i) => (
                    <div
                      key={i}
                      className="text-center text-[11px] font-semibold"
                      style={{ color: "rgba(255,236,190,0.72)" }}
                      title={t("gantt.weekTooltip", { week: i + 1 })}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y" style={{ borderColor: BORDER_SOFT }}>
              {tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-[110px_1fr]">
                  <div
                    className="border-r p-4 text-sm font-semibold"
                    style={{ borderColor: BORDER_SOFT, color: TEXT_PRIMARY }}
                  >
                    {task.id}
                  </div>

                  <div className="p-4">
                    <div
                      className="grid items-center gap-0"
                      style={{
                        gridTemplateColumns: `minmax(240px, 360px) repeat(${WEEKS}, minmax(24px, 1fr))`,
                      }}
                    >
                      <div className="pr-3 font-semibold leading-snug" style={{ color: TEXT_MUTED }}>
                        {t(task.nameKey)}
                      </div>

                      {/* grid lines */}
                      {Array.from({ length: WEEKS }, (_, i) => (
                        <div
                          key={i}
                          className="h-8 border-l"
                          style={{ borderColor: "rgba(255,236,190,0.06)" }}
                        />
                      ))}

                      {/* bars overlay */}
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
                          const bg = task.color === "dark" ? BAR_MILESTONE : BAR_ACTIVITY;

                          return (
                            <div
                              key={idx}
                              className="h-5 rounded-md"
                              style={{
                                background: bg,
                                gridColumn: `${r.start} / ${r.end + 1}`,
                                boxShadow:
                                  "0 0 0 1px rgba(0,0,0,0.28) inset, 0 10px 18px rgba(0,0,0,0.40)",
                              }}
                              aria-label={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                              title={t("gantt.a11y.range", { id: task.id, start: r.start, end: r.end })}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* optional row footer: periods */}
                    <div className="mt-2 text-xs" style={{ color: "rgba(255,236,190,0.58)" }}>
                      <span className="font-semibold" style={{ color: "rgba(255,236,190,0.78)" }}>
                        {t("gantt.periodsLabel")}{" "}
                      </span>
                      {rangesToLabel(task.ranges)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom flourish */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
