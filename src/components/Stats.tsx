
interface StatProps {
  value: string;
  label: string;
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="glass-card px-4 py-3 rounded-lg">
      <div className="text-lg font-bold text-gradient">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <Stat value="70%" label="Lower CPU Usage" />
      <Stat value="50%" label="Lower Disk Usage" />
      <Stat value="80%" label="RAM Optimization" />
      <Stat value="2.6k+" label="Active Users" />
      <Stat value="75k+" label="Downloads" />
    </div>
  );
}
