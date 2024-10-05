'use client'

import React from 'react';
import {ThemeProvider} from "next-themes";

const NextThemeProviderClient = ({children}:{children:React.ReactNode}) => {
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
};

export default NextThemeProviderClient;