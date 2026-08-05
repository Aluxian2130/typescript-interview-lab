import Card from "@/components/ui/Card";
import type { Category } from "@/shared/types/Category";

interface CategoryCardProps {
  category: Category;
  onClick?: (id: string) => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <Card
      className="
        cursor-pointer
        transition-all
        duration-I
        hover:border-emerald-700
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <button
        type="button"
        className="w-full text-left bg-transparent border-none p-0 text-inherit"
        onClick={() => onClick?.(category.id)}
      >
        <div className="mb-4 text-4xl">{category.icon}</div>

        <h2 className="text-xl font-semibold">{category.title}</h2>

        <p className="mt-2 text-sm text-black">{category.description}</p>

        <p className="mt-6 text-sm text-black">{category.topicCount} Topics</p>
      </button>
    </Card>
  );
}
