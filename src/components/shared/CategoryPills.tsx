import { Link } from "react-router-dom";
import { Category } from "@/types";

interface CategoryPillsProps {
  categories: Category[];
  activeSlug?: string;
}

export default function CategoryPills({ categories, activeSlug }: CategoryPillsProps) {
  return (
    <div className="scroll-x" style={{ padding: "4px 0" }}>
      <Link
        to="/explore"
        className="btn btn-sm"
        style={{
          borderRadius: "var(--radius-full)",
          backgroundColor: !activeSlug ? "var(--primary)" : "var(--surface)",
          color: !activeSlug ? "#fff" : "var(--foreground)",
          border: "1.5px solid",
          borderColor: !activeSlug ? "var(--primary)" : "var(--border)",
          fontSize: 13,
          fontWeight: 500,
          padding: "7px 16px",
        }}
      >
        Semua
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`/explore?category=${cat.slug}`}
          className="btn btn-sm"
          style={{
            borderRadius: "var(--radius-full)",
            backgroundColor:
              activeSlug === cat.slug ? "var(--primary)" : "var(--surface)",
            color:
              activeSlug === cat.slug ? "#fff" : "var(--foreground)",
            border: "1.5px solid",
            borderColor:
              activeSlug === cat.slug ? "var(--primary)" : "var(--border)",
            fontSize: 13,
            fontWeight: 500,
            padding: "7px 16px",
            gap: 6,
          }}
        >
          <span>{cat.icon}</span>
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
