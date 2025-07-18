import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-center gap-8 mt-10 py-10 md:h-24">
        <nav className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#about" className="text-sm font-medium hover:underline">
            About Me
          </a>
          <a href="#Career" className="text-sm font-medium hover:underline">
            Career
          </a>
          <a href="#skills" className="text-sm font-medium hover:underline">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </a>
        </nav>
        <div className="flex items-center justify-center gap-8">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "h-10 w-10 p-2 flex items-center justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
