import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home.js";
import Auth from "./Auth/Auth";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/auth" element={<Auth></Auth>}></Route>
    </Routes>
  );
};

export default AppRouter;
