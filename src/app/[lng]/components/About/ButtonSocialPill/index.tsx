import React from "react";

import LinkedinIcon from "../../SvgIcons/Linkedin";
import GitHubIcon from "../../SvgIcons/GitHub";
import GmailIcon from "../../SvgIcons/Gmail";

type ButtonSocialPillProps = {
    link: string,
    text: string
}

const ButtonSocialPill: React.FC<ButtonSocialPillProps> = ({
    link,
    text
}) => {
    const icons = {
        LinkedIn: LinkedinIcon,
        GitHub: GitHubIcon,
        default: GmailIcon
    }

    const Icon = icons[text] || icons.default;

    return <a
        className='
                    bg-white/5 
                    border dark:border-white/10 border-gray-400 rounded-full
                    flex justify-center items-center gap-x-2
                    py-1 px-2 md:py-2 md:px-4
                    text-xs md:text-base
                    text-black/70 dark:text-white/50
                    transition
                    hover:scale-110 hover:bg-white/10'
        target="_blank"
        rel="noopener noreferrer"
        href={link}
    >
        <Icon />
        {text}
    </a>

}

export default ButtonSocialPill