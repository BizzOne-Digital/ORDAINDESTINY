"use client";

import { useEffect, useState } from "react";

/** Renders the current year on the client so statically built pages stay current. */
export function CurrentYear({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
