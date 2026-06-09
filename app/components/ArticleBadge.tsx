import { ReactNode } from "react";

export type BadgeType = "breaking" | "verified" | "trending" | "analysis" | "data-driven";

interface ArticleBadgeProps {
  type: BadgeType;
  label?: string;
}

const badgeConfig: Record<BadgeType, { icon: string; color: string; label: string }> = {
  breaking: { icon: "BREAKING | ", color: "bg-red-100 text-red-900 border-red-300", label: "Breaking" },
  verified: { icon: "VERIFIED | ", color: "bg-green-100 text-green-900 border-green-300", label: "Verified" },
  trending: { icon: "TRENDING | ", color: "bg-blue-100 text-blue-900 border-blue-300", label: "Trending" },
  "analysis": { icon: "ANALYSIS | ", color: "bg-purple-100 text-purple-900 border-purple-300", label: "Analysis" },
  "data-driven": { icon: "DATA-DRIVEN | ", color: "bg-amber-100 text-amber-900 border-amber-300", label: "Data" },
};

export default function ArticleBadge({ type, label }: ArticleBadgeProps) {
  const config = badgeConfig[type];

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold border rounded-full ${config.color}`}>
      <span>{config.icon}</span>
      <span>{label || config.label}</span>
    </span>
  );
}
