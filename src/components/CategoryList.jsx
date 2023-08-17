import { Link } from "react-router-dom"
import { imgs, categories } from '../data'


const [
    imgCiencia,
    imgDeportes,
    imgFilosofia,
    imgGeofrafia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia
] = imgs

export const CategoryList = () => {
    return (


        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10" >
            {/*Categories Science*/}
            <Link to={`/category/${categories.ciencia}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-500 to-green-500 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgCiencia} alt={`Categories ${categories.ciencia}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.ciencia}</h1>

            </Link>

            {/*Categories Sport*/}
            <Link to={`/category/${categories.deportes}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-500 to-green-500 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgDeportes} alt={`Categories ${categories.deportes}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.deportes}</h1>
            </Link>

            {/*Categories Philosophy*/}
            <Link to={`/category/${categories.filosofia}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-500 to-green-500 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgFilosofia} alt={`Categories ${categories.filosofia}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.filosofia}</h1>
            </Link>

            {/*Categories Geography*/}
            <Link to={`/category/${categories.geografia}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-700 to-yellow-100 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgGeofrafia} alt={`Categories ${categories.geografia}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.geografia}</h1>
            </Link>

            {/*Categories History*/}
            <Link to={`/category/${categories.historia}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-500 to-green-500 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgHistoria} alt={`Categories ${categories.historia}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.historia}</h1>
            </Link>

            {/*Categories Literature*/}
            <Link to={`/category/${categories.literatura}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-500 to-green-500 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgLiteratura} alt={`Categories ${categories.literatura}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.literatura}</h1>
            </Link>

            {/*Categories Technologie*/}
            <Link to={`/category/${categories.tecnologia}`}
                className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden 
        bg-gradient-to-r from-blue-500 to-green-500 transition-all hover:scale-105">

                <div className="p-5 flex justify-center items-center">
                    <img src={imgTecnologia} alt={`Categories ${categories.tecnologia}`} className="w-36" />
                </div>

                <h1 className="text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opacity-60 text-center 
                p-3 px-5">{categories.tecnologia}</h1>
            </Link>

        </div>



    )
}