"use client";

import { ModalStatusProvider } from "@/context/modalStatus";
import Contents from "./contents";

export default function Message() {
  return (
    <main>
      <ModalStatusProvider>
        <Contents />
      </ModalStatusProvider>
    </main>
  );
}
