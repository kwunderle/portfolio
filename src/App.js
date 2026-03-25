import React from "react";
import Header from "./Components/header";
import Nav from "./Components/nav";
import Body from "./Components/body";
import Footer from "./Components/footer";
import Mushroom from "./assets/mushroomWORKING3.svg";


function App() {
    console.log('App.js is loaded');
    return (
        <div>
            <h1>Hey! Welcome to my page!</h1>
      <Nav />
            <Header />
      <Body />
      <Footer />
      <Mushroom width={500} height={500}/>
        </div>
    );
}

export default App;