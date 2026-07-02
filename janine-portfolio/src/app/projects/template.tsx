import React from "react";
import FadeIn from "@/src/components/ui/transitions/fadeInTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn>
      {children}
    </FadeIn>
  );
}