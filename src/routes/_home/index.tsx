import { GridDivider } from "@/components/grid-divider";
import { Wrapper } from "@/components/wrapper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <GridDivider className="h-5" />
      <main className="w-full">
        <Wrapper className="p-0">
          <section className="grid w-full grid-cols-2">
            <div className="shadow-inner-border w-full rounded-[4px] border-r p-3">
              test
            </div>
            <div className="shadow-inner-border w-full rounded-[4px] p-3"></div>
          </section>
        </Wrapper>
      </main>
    </>
  );
}
