import { getCookieCounter, incrementCookieCounter } from "./_action";
import { ClientForm } from "./client-form";

export default async function Page() {
  const cookieCounter = await getCookieCounter();
  return (
    <main>
      <h1>Path: / (home) </h1>
      <h1>Counter = {cookieCounter}</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <h2>Server form : </h2>
        <form>
          <button formAction={incrementCookieCounter}>Increment counter</button>
        </form>
      </div>

      <br />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <h2>Client form : </h2>
        <ClientForm />
      </div>
    </main>
  );
}
