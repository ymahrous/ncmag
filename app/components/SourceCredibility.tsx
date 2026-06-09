interface SourceCredibilityProps {
  source?: string;
  tier?: "tier-1" | "tier-2" | "tier-3";
}

const tierConfig = {
  "tier-1": {
    icon: "✓",
    color: "text-green-700",
    tooltip: "Major news agency - Independently verified",
    agencies: ["Reuters", "AP", "BBC", "AFP", "NPR", "Associated Press"],
  },
  "tier-2": {
    icon: "●",
    color: "text-blue-700",
    tooltip: "Reputable publication - Established credibility",
    agencies: ["The Guardian", "Washington Post", "Financial Times", "The Times", "NBC News"],
  },
  "tier-3": {
    icon: "●",
    color: "text-gray-600",
    tooltip: "General source - Reviewed content",
    agencies: [],
  },
};

function detectTier(source?: string): "tier-1" | "tier-2" | "tier-3" {
  if (!source) return "tier-3";
  const tier1 = tierConfig["tier-1"].agencies;
  const tier2 = tierConfig["tier-2"].agencies;

  if (tier1.some((agency) => source.toLowerCase().includes(agency.toLowerCase()))) {
    return "tier-1";
  }
  if (tier2.some((agency) => source.toLowerCase().includes(agency.toLowerCase()))) {
    return "tier-2";
  }
  return "tier-3";
}

export default function SourceCredibility({ source, tier }: SourceCredibilityProps) {
  const detectedTier = tier || detectTier(source);
  const config = tierConfig[detectedTier];

  return (
    <span
      className={`inline-flex items-center gap-1 ${config.color} font-medium`}
      title={config.tooltip}
    >
      <span className="text-sm">{config.icon}</span>
      {detectedTier === "tier-1" && <span className="text-xs">Verified Source</span>}
      {detectedTier === "tier-2" && <span className="text-xs">Credible Source</span>}
    </span>
  );
}

export { detectTier, tierConfig };
