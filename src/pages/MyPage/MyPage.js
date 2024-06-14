import React from "react";
import ReactDOM from 'react-dom/client';
import "../../index.css";
import Header from "../../pages/Header/Header"
import Body from "../../pages/Body/Body"
import Footer from "../../pages/Footer/Footer"

function MyPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default MyPage