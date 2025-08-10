interface FeatureCardProps {
  title: string;
  description: string;
  extra?: string;
}

export default function FeatureCard({ title, description, extra }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-2">{description}</p>
      {extra && <p className="text-xs text-gray-500 dark:text-gray-400 italic">{extra}</p>}
    </div>
  );
}
