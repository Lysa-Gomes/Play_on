import React from "react";
import GlobStyled from "./styled";
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/footer";


export default function App(playon) {
    return (
        <div>
          <GlobStyled/>
          <Header/>
          <Main/>
          <Footer/>
        </div>
    )
}