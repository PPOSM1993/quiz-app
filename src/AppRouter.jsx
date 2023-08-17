import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoryPage, HomePage } from "./pages";



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <>
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                </Routes>

                <br></br>

                <Footer />
            </>

        </BrowserRouter>
    )
}


