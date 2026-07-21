import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Button } from "@/components";

const ErrorPage = () => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 text-foreground">
      <h1 className="text-6xl font-semibold tracking-tight">
        {is404 ? "404" : "Oops!"}
      </h1>
      <p className="text-lg text-muted-foreground">
        {is404
          ? "Page not found"
          : isRouteErrorResponse(error)
            ? error.statusText
            : "Something went wrong"}
      </p>
      <Button asChild variant="default" className="text-base">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
