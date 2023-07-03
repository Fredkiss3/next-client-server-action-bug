"use server";
import { cookies } from "next/headers";

export async function getCookieCounter() {
  return Number.parseInt(cookies().get("_counter")?.value ?? "0");
}

export async function incrementCookieCounter(fd: FormData) {
  const counter = await getCookieCounter();

  cookies().set("_counter", (counter + 1).toString());
}
