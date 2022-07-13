//REACT IMPORTS
import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//COMPONENT IMPORTS
import TitleBar from './TitleBar';
import Table from './Table';

//ROUTING IMPORTS
import AddUsers from '../pages/NewUser'
import EditUser from '../pages/EditUser'

const pageContext = createContext()
export function Page() {
  //DEFINE ALL USESTATES
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  const [query, setQuery] = useState("users");

  function forceUpdate() { setIsReadyToUpdate(!isReadyToUpdate) }

  const element =
    <BrowserRouter>
      <pageContext.Provider value={{ forceUpdate, query, setQuery }}>
        <TitleBar />
        <Routes>
          <Route exact path='/' element={<Table />} />
          <Route exact path='addUsers' element={<AddUsers />} />
          <Route exact path='edit/:id' element={<EditUser />} />
        </Routes>
      </pageContext.Provider>
    </BrowserRouter >
  return element
}

export default Page
export { pageContext }
