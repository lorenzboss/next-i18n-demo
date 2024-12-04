import Link from "next/link";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const t = await getDictionary(lang);

  return {
    //title: t.page.title,
    //description: t.page.desc,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const t = await getDictionary(lang);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-x-2">
        <Link href="/en">English</Link>
        <span>|</span>
        <Link href="/de">Deutsch</Link>
        <span>|</span>
        <Link href="/fr">Français</Link>
        <span>|</span>
        <Link href="/it">Italiano</Link>
        <span>|</span>
        <Link href="/es">Español</Link>
      </div>
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="mb-20 text-4xl font-bold tracking-wider">
          {t.home.title}
        </h1>
        <p className="mb-20 text-2xl uppercase tracking-wide">
          {t.home.description}
        </p>
        <p
          style={{ whiteSpace: "pre-wrap" }}
          className="text-center text-xl leading-relaxed -tracking-wide text-gray-300"
        >
          {t.home.comment}
        </p>
      </main>
    </div>
  );
}
