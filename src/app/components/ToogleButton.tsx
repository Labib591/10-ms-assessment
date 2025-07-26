"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { IoLanguage } from "react-icons/io5"; // optional, any language icon

export default function LanguageToggle() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = searchParams.get("lang") ?? "en";
  const nextLang = currentLang === "en" ? "bn" : "en";

  const toggleLanguage = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("lang", nextLang);
    router.push(`${pathname}?${newParams.toString()}`);
  };
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
    >
      <IoLanguage className="text-lg" />
      <span>{nextLang === "en" ? "ENG" : "বাংলা"}</span>
    </button>
  );
}
