import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-beige dark:bg-brand-black px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-display font-bold text-brand-coffee dark:text-brand-beige mb-4">404</p>
        <h1 className="text-xl font-semibold text-brand-coffee dark:text-brand-beige mb-2">
          Page introuvable
        </h1>
        <p className="text-brand-coffee/60 dark:text-brand-beige/55 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/fr"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-coffee text-brand-beige font-semibold rounded-xl shadow-coffee hover:shadow-coffee-lg hover:bg-brand-brown active:scale-[0.98] transition-all duration-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
