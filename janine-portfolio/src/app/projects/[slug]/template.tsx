import React from "react";
import ScalePop from "@/src/components/ui/transitions/scalePopTransition";

export default function AboutTemplate({ children }: { children: React.ReactNode }) {
  return <ScalePop>{children}</ScalePop>;
}