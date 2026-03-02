import { Logo } from "@/components/logo";
import { GridLine } from "@/components/grid-divider";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { navItems } from "../constants";

export const Navbar = () => {
  return (
    <div className="flex h-14 items-center">
      <GridLine />
      <Wrapper>
        <header className="flex h-full w-full items-center justify-between pr-4">
          <div className="w-40">
            <Logo />
          </div>
          <ul className="flex items-center justify-center gap-4">
            {navItems.map(({ name, href, icon: Icon }) => (
              <li>
                <Link
                  to={href}
                  className={cn(
                    "font- font-mono text-sm tracking-wide text-stone-400 uppercase",
                    "hover:text-stone-800",
                  )}
                >
                  {Icon && <Icon />}
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant={"brand"} className="text-xs">
            Get Started
          </Button>
        </header>
      </Wrapper>
      <GridLine />
    </div>
  );
};
