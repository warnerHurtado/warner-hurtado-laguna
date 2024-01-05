
import Image from 'next/image'
import BannerImage from '../../../../../../public/images/software-engineer-image.svg'

export const BannerAbout: React.FC = () => {

    return <div style={{
        display: 'flex', justifyContent: 'center'
    }}>
        <Image
            priority
            src={BannerImage}
            alt='Banner Image Warner Hurtado'
            height={250}
        />

    </div>
}