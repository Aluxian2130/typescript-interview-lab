import CategoryCard from "@/components/ui/Card/common/CategoryCard";
import { categories } from "@/shared/data/categories";

export default function Home() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">TypeScript Interview Lab</h1>

        <p className="mt-3 text-black">
          Interactive interview preparation covering React, TypeScript,
          JavaScript, Node.js, SQL, Palantir, Algorithms, and System Design.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
