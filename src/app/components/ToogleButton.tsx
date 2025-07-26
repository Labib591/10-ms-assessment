"use client";
import { usePathname, useRouter } from "next/navigation";
import { IoLanguage } from "react-icons/io5";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/en" or "/bn"

  const currentLang = pathname.split("/")[1]; // get "en" or "bn"
  const nextLang = currentLang === "en" ? "bn" : "en";

  const toggleLanguage = () => {
    // replace the current lang segment in the URL
    const restOfPath = pathname.split("/").slice(2).join("/");
    const newPath = `/${nextLang}${restOfPath ? `/${restOfPath}` : ""}`;
    router.push(newPath);
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
