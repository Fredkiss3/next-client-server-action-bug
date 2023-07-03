"use client";
import * as React from "react";
import { incrementCookieCounter } from "./_action";

export function ClientForm() {
  return (
    <form action={incrementCookieCounter}>
      <button>Increment counter</button>
    </form>
  );
}
