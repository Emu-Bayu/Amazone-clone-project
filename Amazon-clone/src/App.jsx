import React, { useContext, useEffect } from 'react'
import Routing from './Router'
import { DataContext, Dataprovider } from './components/Dataprovider/Dataprovider'
import { auth } from './Utility/Firebase'
import { Type } from './Utility/Actiontype'

function App() {
const [{user},dispatch]=useContext(DataContext)

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }else{
        dispatch({
          type:Type.SET_USER,
          user:null
        })
      }
    })
     
  },[])
  return (
    <>
    <Routing/>
    </>
  )
}

export default App