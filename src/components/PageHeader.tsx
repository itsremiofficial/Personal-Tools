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
        "w-full px-2 py-6 rounded-3xl flex gap-2 items-center border-none bg-transparent",
        className,
      )}
    >
      {Icon && <Icon className="size-14 mx-2" fill />}
      <div>
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default PageHeader;
