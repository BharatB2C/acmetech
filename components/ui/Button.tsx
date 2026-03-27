import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[#0071e3] text-white hover:bg-[#0077ed] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[#1d1d1f] text-white hover:bg-[#3a3a3c] active:scale-[0.98] shadow-sm",
    outline:
      "border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white active:scale-[0.98]",
    ghost:
      "text-[#0071e3] hover:bg-blue-50 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
