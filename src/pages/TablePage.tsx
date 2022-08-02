import '../index.css'
import Table from '../components/Table'
import React, { useState, useEffect, useCallback } from 'react';
// API IMPORTS
import { getAllUsers } from '../api/user'
import { IUserCollection } from '../components/interfaces/userCollection.interface';

export const TablePage: React.FC<IUserCollection> = () => {
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
        <Table />
    )
}

export default TablePage
