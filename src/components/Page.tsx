//REACT IMPORTS
import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//COMPONENT IMPORTS

//ROUTING IMPORTS
import EditUser from '../pages/EditUser'
import { TablePage } from '../pages/TablePage'
import { LoginPage } from '../pages/LoginPage'

//THEME API IMPORT
import { getTheme } from '../api/theme'
import { IEnviroment } from '../interfaces/envCollection.interface';
import { IPageContext } from '../interfaces/pageContext.interface';
import { AddUsers } from '../pages/AddUsers';
import { SignupPage } from '../pages/SignupPage';

const getEnviromentVariables = (): IEnviroment => {
  return {
    THEME_ID: process.env.REACT_APP_THEME_ID,
    API_HOST: process.env.REACT_APP_HOST,
    API_PORT: process.env.REACT_APP_PORT
  };
};
const enviroment = getEnviromentVariables()

export const contextProvider = createContext<IPageContext | null>(null)

export function Page() {
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  const [query, setQuery] = useState("users");

  function forceUpdate() { setIsReadyToUpdate(!isReadyToUpdate) }

  useEffect(() => {
    const switchTheme = async () => {
      const theme = await getTheme(enviroment.THEME_ID)
      document.documentElement.style.setProperty('--background-color', theme.primary);
      document.documentElement.style.setProperty('--foreground-color', theme.secondary);
      document.documentElement.style.setProperty('--button-background', theme.tertiary);
      document.documentElement.style.setProperty('--alert-color', theme.alert);
    }
    switchTheme()
  }, []);

  const pageContext: IPageContext = {
    forceUpdate: forceUpdate,
    query: query,
    setQuery: setQuery
  }

  const routes = getRoutes()
  return (
    <BrowserRouter>
      <contextProvider.Provider value={pageContext} >
        <Routes>
          {routes}
        </Routes>
      </contextProvider.Provider>
    </BrowserRouter >
  )
}

function getRoutes() {
  return (
    <>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/app/table' element={<TablePage />} />
      <Route path='/app/addUsers' element={<AddUsers />} />
      <Route path='/app/edit/:id' element={<EditUser />} />
    </>
  )
}

export default Page
export { contextProvider as pageContext }
