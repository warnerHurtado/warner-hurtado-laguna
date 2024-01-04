"use client";

import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {

    return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers