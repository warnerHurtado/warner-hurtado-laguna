"use client";

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <>{children}</>;

    return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers