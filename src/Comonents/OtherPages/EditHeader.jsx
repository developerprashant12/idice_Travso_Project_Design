import React from 'react'
import logo from "../../assets/logo.png";

const EditHeader = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 h-[82px] flex justify-center items-center">
      <img src={logo} alt="Logo" className="h-10" />
    </header>
  )
}

export default EditHeader
