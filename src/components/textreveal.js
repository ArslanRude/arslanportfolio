"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function textreveal() {
  return (
    (<div>
      <TextRevealCard text="Profession?" revealText="Data Scientist">
      </TextRevealCard>
    </div>)
  );
}


export default textreveal
