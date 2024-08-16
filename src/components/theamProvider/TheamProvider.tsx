import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const TheamProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <div>
            <NextThemesProvider {...props}>{children}</NextThemesProvider>

        </div>
    )
}

export default TheamProvider
