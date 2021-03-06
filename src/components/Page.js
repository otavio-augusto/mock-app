//REACT IMPORTS
import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//COMPONENT IMPORTS
import TitleBar from './TitleBar';

//ROUTING IMPORTS
import AddUsers from '../pages/NewUser'
import EditUser from '../pages/EditUser'
import TablePage from '../pages/TablePage'

//THEME API IMPORT
import { getTheme } from '../api/theme'
const { REACT_APP_THEME_ID } = process.env;

const pageContext = createContext()
export function Page() {
  //DEFINE ALL USESTATES
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  const [query, setQuery] = useState("users");

  function forceUpdate() { setIsReadyToUpdate(!isReadyToUpdate) }

  useEffect(() => {
    const switchTheme = async () => {
      const theme = await getTheme(REACT_APP_THEME_ID)
      document.documentElement.style.setProperty('--background-color', theme.primary);
      document.documentElement.style.setProperty('--foreground-color', theme.secondary);
      document.documentElement.style.setProperty('--button-background', theme.tertiary);
      document.documentElement.style.setProperty('--alert-color', theme.alert);
    }
    switchTheme()
  }, []);

  const element =
    <BrowserRouter>
      <pageContext.Provider value={{ forceUpdate, query, setQuery }}>
        <TitleBar />
        <Routes>
          <Route exact path='/' element={<TablePage />} />
          <Route exact path='addUsers' element={<AddUsers />} />
          <Route exact path='edit/:id' element={<EditUser />} />
        </Routes>
      </pageContext.Provider>
    </BrowserRouter >
  return element
}

export default Page
export { pageContext }
