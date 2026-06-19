interface ImpactStatProps {
  value: string;
  label: string;
}

export default function ImpactStat({ value, label }: ImpactStatProps) {
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold text-white mb-1">{value}</p>
      <p className="text-green-200 text-xs leading-snug">{label}</p>
    </div>
  );
}
