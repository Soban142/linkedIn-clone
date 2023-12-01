import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import { Fragment, useEffect } from "react";
import { login, logout } from "./redux/userSlice";
import { onAuthStateChanged, auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            user,
          })
        );
      } else {
        dispatch(logout());
        console.log("error");
      }
    });
  });
  return (
    <Router className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
