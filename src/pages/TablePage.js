import '../index.css'
import Table from '../components/Table'
import React, { useState, useEffect, createContext, useCallback } from 'react';
// API IMPORTS
import { getAllUsers } from '../api/user'

const tableContext = createContext()
function TablePage() {
  const [userData, setUserData] = useState({})

  const updateUserData = useCallback(() => {
    getAllUsers().then(async (res) => {
      const response = await res.json()
      setUserData(response)
    })
  }, [getAllUsers]);

  useEffect(() => {
    console.log("USE EFFECT ACTIVATED")
    updateUserData()
  }, [updateUserData()]);


  const element =
    <tableContext.Provider value={userData}>
      <Table />
    </tableContext.Provider>

  return element
}

export default TablePage
export { tableContext }
