import Image from "next/image";

// import { LanguageSelector } from "../LanguageSelector";
import { ThemeSwicher } from "../ThemeSwicher";
import VercelIcon from "../../../../../../public/vercel.svg";

export const Header: React.FC = () => {
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
                    <ThemeSwicher />
                </div>
            </div>
        </nav>
    );
};
