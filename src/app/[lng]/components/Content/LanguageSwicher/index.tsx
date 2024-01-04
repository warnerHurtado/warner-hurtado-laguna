"use client";

import { locales } from "@/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LayoutProps = {
    lng: string
}

export const LanguageSwicher: React.FC<LayoutProps> = ({ lng }) => {
    const pathname = usePathname() || "";
    const route = pathname.split(`/${lng}`)[1];

    return (
        <>
            {locales
                .filter((l) => lng !== l)
                .map((l, index) => {
                    return (
                        <span key={l}>
                            {index > 0 && " or "}
                            <Link href={`/${l}${route}`}>
                                <strong>{l == "es" ? "Español" : "English"}</strong>
                            </Link>
                        </span>
                    );
                })}
        </>
    );
}
