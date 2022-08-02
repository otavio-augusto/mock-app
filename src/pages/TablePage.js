import '../index.css'
import Table from '../components/Table.tsx'
import React, { useState, useEffect, useCallback } from 'react';
// API IMPORTS
import { getAllUsers } from '../api/user'

export const TablePage: React.FC<> = () => {
  const [userData, setUserData] = useState({})

  const updateData = useCallback((data) => {
    setUserData(data)
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const response = await getAllUsers()
      updateData(await response.json())
    }
    getUserData()
  }, [updateData]);

  return (
    <Table users={userData} />
  )
}

export default TablePage
