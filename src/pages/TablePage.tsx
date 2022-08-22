import '../index.css'
import React, { useState, useEffect, useCallback } from 'react';
import { getUser } from '../api/user'
import { UserTableProps } from '../components/interfaces/userCollection.interface';
import { Table } from '../components/Table'
import { Search } from '../components/Search';
import TitleBar from '../components/TitleBar';

export const TablePage: React.FC = () => {
  const initialId = 1
  const initialName = "Nome de Teste"
  const initialCpf = "CPF de Teste"

  const tableProps: UserTableProps = {
    users:
      [{
        id: initialId,
        name: initialName,
        cpf: initialCpf
      }]
  }

  const [userData, setUserData] = useState<UserTableProps>(tableProps)
  const [isReadyToUpdate, setIsReadyToUpdate] = useState<boolean>(false)
  const [query, setQuery] = useState<string>("users")

  const forceUpdate = () => { setIsReadyToUpdate(!isReadyToUpdate) }

  const updateData = useCallback((data: UserTableProps) => {
    setUserData(data)
    console.log("TABLE: DATA CALLBACK")
    forceUpdate()
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const response = await getUser(query)
      tableProps.users = response
      updateData(tableProps)
    }
    getUserData()
  }, [query, isReadyToUpdate]);

  return (
    <>
      <TitleBar />
      <Search setQuery={setQuery} updateTable={forceUpdate} />
      <Table data={userData} updateTable={forceUpdate} />
    </>
  )
}

