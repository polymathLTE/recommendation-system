"use client"

import { useContext, createContext, useState, useEffect } from "react"

export const AppContext = createContext({})

export function AppContextProvider({ children }) {
    const [recommendation, setRecommendation] = useState(null)
    const [modal, setModal] = useState(false)

    return (
        <AppContext.Provider value={{ recommendation, setRecommendation, modal, setModal }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}