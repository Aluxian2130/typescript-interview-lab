interface CategoryPlaceholderProps {
  title: string;
}

export default function CategoryPlaceholder({
  title,
}: CategoryPlaceholderProps) {
  return (
    <section>
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="mt-3 text-slate-400">
        Examples for this section will be added soon.
      </p>
    </section>
  );
}
