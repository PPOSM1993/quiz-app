import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className='bg-gray-900 py-5 flex justify-center'>
            <Link to="/">
                <h1 className="text-white text-3xl font-bold hover:scale-110 transitional-all duration-500 uppercase">Quiz App</h1>
            </Link>
        </header>

    )

}