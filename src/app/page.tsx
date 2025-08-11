"use client";

import Button from "../../components/Button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <Button onClick={() => alert("Buton çalışıyor!")}>Beni Dene</Button>
    </main>
  );
}
