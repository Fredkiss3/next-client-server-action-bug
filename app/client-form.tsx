"use client";
import * as React from "react";
import { incrementCookieCounter } from "./_action";

export function ClientForm() {
  return (
    <form>
      <button formAction={incrementCookieCounter}>Increment counter</button>
    </form>
  );
}
