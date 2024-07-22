import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorLable: string;
  createAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

const Footer = ({
  isFavorite,
  title,
  authorLable,
  createAtLabel,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    onClick();
  };

  return (
    <div className="relative bg-white p-3">
      <p className="text-[13px] truncate max-w-[cal(100%-20)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text=-[11px] text-muted-foreground truncate">
        {authorLable}, {createAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star className={cn("h-4 w-4", isFavorite && "fill-blue-600")} />
      </button>
    </div>
  );
};

export default Footer;
