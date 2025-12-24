import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const docsNav = [
  { label: "Introduction", href: "/docs" },
  { label: "Installation", href: "/docs/installation" },
  { label: "Usage", href: "/docs/usage" },
  { label: "API Reference", href: "/docs/api" },
  { label: "Troubleshooting & FAQ", href: "/docs/faq" },
];

export function DocsSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 shrink-0">
      <div className="sticky top-24">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Contents
        </p>
        <nav className="space-y-1">
          {docsNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors relative",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
