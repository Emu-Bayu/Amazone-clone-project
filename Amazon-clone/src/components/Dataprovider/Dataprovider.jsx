import React,{createContext, useReducer} from "react";



export const DataContext=createContext()

export const Dataprovider=({children,reducer,initialstate})=>{
    return(
        <DataContext.Provider value={useReducer(reducer,initialstate)}>

            {children}
        </DataContext.Provider>
    )
}
