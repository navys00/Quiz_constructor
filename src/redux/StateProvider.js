import React, { useContext, useReducer, createContext } from "react"
import { initialState } from "./store"

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)