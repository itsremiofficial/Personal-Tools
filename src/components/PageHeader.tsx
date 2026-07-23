import { cn } from "@/lib";
import { Card } from "./common/Card";
import { FC } from "react";
interface PageHeaderProps {
  title: string;
  className?: string;
  description?: string;
  icon?: FC<IconProps>;
}
const PageHeader = ({
  title,
  description,
  className,
  icon: Icon,
}: PageHeaderProps) => {
  return (
    <Card
      className={cn(
        "w-full px-2 py-4 sm:py-6 rounded-3xl flex gap-2 items-center border-none bg-transparent",
        className,
      )}
    >
      {Icon && <Icon className="size-10 sm:size-14 mx-2 shrink-0" fill />}
      <div className="min-w-0">
        <h2 className="text-base sm:text-xl font-medium truncate">{title}</h2>
        {description && (
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{description}</p>
        )}
      </div>
    </Card>
  );
};

export default PageHeader;
