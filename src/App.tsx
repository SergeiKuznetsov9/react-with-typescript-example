import React from "react";
import { NavLink } from "react-router-dom";
import  {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { TodosPage } from "./components/TodosPage";
import { UserItemPage } from "./components/UserItemPage";
import { UserLayout } from "./components/UserLayout";

const App = () => {
 


  return (
    <BrowserRouter>
    <div>
      <NavLink to='/users'>Users</NavLink>
      <br/>
      <NavLink to='/todos'>Todos</NavLink>
    </div>
      <div>
        <Routes>
          <Route path="/users" element={<UserLayout />}>
            <Route path={':id'} element={<UserItemPage />} />
          </Route> 
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
