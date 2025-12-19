import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        My First Website
      </h1>

      <p className="mt-4">
        This site is running locally.
      </p>

      <Link
        href="/calendar"
        className="mt-6 inline-block text-blue-600 underline"
      >
        Go to Calendar
      </Link>
    </main>
  );
}
