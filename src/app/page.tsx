"use client";

import * as Sentry from "@sentry/react";
  export default function Home() {
  const fakeApiCall = async () => {
    try {
    throw new Error("This is trial error");
  }
  catch (error) {
    Sentry.captureException(error);
  }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="p-3 border border-white" onClick={fakeApiCall}>
        Throw an error
      </button>
    </main>
  );
}