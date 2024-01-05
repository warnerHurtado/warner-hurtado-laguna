import Image from "next/image";

import { LanguageSwicher } from "../LanguageSwicher";
import { ThemeSwicher } from "../ThemeSwicher";
import VercelIcon from "../../../../../../public/icons/favicon.svg";

type LayoutProps = {
    lng: string
}

export const Header: React.FC<LayoutProps> = ({ lng }) => {
    return (
        <nav className="dark:bg-slate-700 dark:text-white bg-slate-200">
            <div className="container">
                <div className="nav-left-container">
                    <Image
                        src={VercelIcon}
                        width={80}
                        alt="Warner Hurtado Icon"
                        priority
                    />
                    <div >Warner Hurtado Laguna</div>
                </div>
                <div className="nav-right-container">
                    <LanguageSwicher lng={lng} />
                    <ThemeSwicher />
                </div>
            </div>
        </nav>
    );
};
