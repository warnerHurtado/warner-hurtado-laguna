import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')

  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
