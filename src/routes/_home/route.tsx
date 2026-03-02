import { Navbar } from "@/features/home/components/navbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
