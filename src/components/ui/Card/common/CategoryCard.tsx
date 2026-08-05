import Card from "@/components/ui/Card";
import type { Category } from "@/shared/types/Category";

interface CategoryCardProps {
  category: Category;
  onClick?: (id: string) => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Card variant="interactive">
      <Icon className="mb-4 h-10 w-10 text-sky-400" />

      <h2 className="text-xl font-semibold">{category.title}</h2>

      <p className="mt-2 text-sm text-slate-400">{category.description}</p>

      <p className="mt-6 text-sm font-medium text-sky-400">
        {category.topicCount} Topics
      </p>
    </Card>
  );
}
