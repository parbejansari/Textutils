import "./App.css";
import Alerts from "./components/Alerts";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      // document.getElementById("myBox").style.border = "3px solid #495057";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.getElementById("myBox").style.border = "1px solid #ccc";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  // const router = createBrowserRouter([
  // {
  // path: "/",
  // element: (
  // <>

  // {
    /* </> */
  // }
  // ),
  // },
  // {
  //  path: "/about",
  // element: (
  // <>
  // {
    /* <Navbar toggleMode={toggleMode} title="TextUtils" mode={mode} /> */
  // }
  // {
    /* <Alerts alert={alert} /> */
  // }
  // <About />
  // {
    /* </>
      ),
    },
  ]); */
  // }

  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <Navbar toggleMode={toggleMode} title="TextUtils" mode={mode} />
      <Alerts alert={alert} />
      <TextForms
        showAlert={showAlert}
        mode={mode}
        heading="Enter the text to analyze"
      />
    </>
  );
}

export default App;
