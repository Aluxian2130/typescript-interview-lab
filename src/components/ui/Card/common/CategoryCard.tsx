import { Link } from "react-router-dom";

import Card from "@/components/ui/Card";
import type { Category } from "@/shared/types/Category";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      to={`/${category.id}`}
      className="block rounded-xl focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
      aria-label={`View ${category.title} topics`}
    >
      <Card variant="interactive" className="h-full">
        <Icon className="mb-4 h-10 w-10 text-sky-400" />

        <h2 className="text-xl font-semibold">{category.title}</h2>

        <p className="mt-2 text-sm text-slate-400">{category.description}</p>

        <p className="mt-6 text-sm font-medium text-sky-400">
          {category.topicCount} Topics
        </p>
      </Card>
    </Link>
  );
}
