import Image from "next/image";

import { LanguageSwicher } from "../LanguageSwicher";
import { ThemeSwicher } from "../ThemeSwicher";
import VercelIcon from "../../../../../../public/vercel.svg";

type LayoutProps = {
    lng: string
}

export const Header: React.FC<LayoutProps> = ({ lng }) => {
    return (
        <nav>
            <div className="container">
                <div className="nav-left-container">
                    <Image
                        src={VercelIcon}
                        height={64}
                        width={100}
                        alt="Warner Hurtado Icon"
                    />
                    <div>Warner Hurtado Laguna</div>
                </div>
                <div className="nav-right-container">
                    {/* <LanguageSelector lng={lng} /> */}
                    <LanguageSwicher lng={lng} />
                    <ThemeSwicher />
                </div>
            </div>
        </nav>
    );
};
