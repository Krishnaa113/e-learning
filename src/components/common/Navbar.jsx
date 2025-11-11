import React, { useEffect } from 'react'
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart ,  AiOutlineMenu} from "react-icons/ai"
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { useState } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io"
import { BsChevronDown } from "react-icons/bs"
import { ACCOUNT_TYPE } from "../../utils/constants"

/*const subLinks = [
    {
        title: "python",
        link:"/catalog/python"
    },
    {
        title: "web dev",
        link:"/catalog/web-development"
    },
];
*/

const Navbar = () => {
    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    // console.log("token" , token);

    const {user}= useSelector((state)=>state.profile);
    // console.log ("redux user" , user);

    const {totalItems} = useSelector( (state) => state.cart )
    // console.log("ITEMS" , totalItems);

    const location = useLocation();


   
    const [loading, setLoading] = useState(false)
    const [subLinks, setSubLinks]  = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);



    const fetchSublinks = async() => {
        try{
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            console.log("Printing Sublinks result:" , result);
            setSubLinks(result.data.data);
        }
        catch(error) {
            console.log("Could not fetch the category list");
        }
    }


    useEffect( () => {
        fetchSublinks();
    },[] )



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-16 items-center justify-center border-b border-b-richblack-700/50 bg-richblack-900/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-richblack-900/50'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        {/* Logo/Brand Name */}
      <Link to="/" className="transition-transform duration-300 hover:scale-105 flex items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-white via-richblack-5 to-richblack-25 bg-clip-text text-transparent">
          EduFlow
        </span>
      </Link>
      

      {/* Navigation links */}
      <nav className="hidden md:block">
          <ul className="flex gap-x-8 text-richblack-25">
          {NavbarLinks.map((link, index) => (
  <li key={index}>
    {link.title === "Catalog" ? (
      <>
        <div
          className={`group relative flex cursor-pointer items-center gap-1 transition-all duration-300 ${
            matchRoute("/catalog/:catalogName")
              ? "text-yellow-50 font-semibold"
              : "text-richblack-25 hover:text-yellow-50"
          }`}
        >
          <p className="relative">
            {link.title}
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-50 to-yellow-400 transition-all duration-300 ${
              matchRoute("/catalog/:catalogName") ? "w-full" : "group-hover:w-full"
            }`}></span>
          </p>
          <BsChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-xl bg-richblack-800/95 backdrop-blur-xl p-4 text-richblack-5 border border-richblack-700 shadow-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
            <div className="absolute left-[50%] top-0 -z-10 h-4 w-4 translate-x-[80%] translate-y-[-50%] rotate-45 select-none rounded-sm bg-richblack-800 border-l border-t border-richblack-700"></div>
            {console.log("subLinks:", subLinks)}
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : subLinks.length ? (
              <>
                {console.log("subLinks.length:", subLinks.length)}
                {subLinks
  ?.map((subLink, i) => {
    console.log("Rendering link:", subLink);
    return (
      <Link
        to={`/catalog/${subLink.name
          .split(" ")
          .join("-")
          .toLowerCase()}`}
        className="rounded-lg bg-transparent py-3 px-4 hover:bg-primary-light/10 hover:text-primary-light transition-all duration-200 group/item"
        key={i}
      >
        <p className="flex items-center gap-2">
          <span className="w-0 h-0.5 bg-primary-light transition-all duration-200 group-hover/item:w-4"></span>
          {subLink.name}
        </p>
      </Link>
    );
  })}
              </>
            ) : (
              <p className="text-center">No Courses Found</p>
            )}
          </div>
        </div>
      </>
    ) : (
      <Link to={link?.path} className="relative group">
        <p
          className={`transition-all duration-300 ${
            matchRoute(link?.path)
              ? "text-yellow-50 font-semibold"
              : "text-richblack-25 hover:text-yellow-50"
          }`}
        >
          {link.title}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-50 to-yellow-400 transition-all duration-300 ${
            matchRoute(link?.path) ? "w-full" : "w-0 group-hover:w-full"
          }`}></span>
        </p>
      </Link>
    )}
  </li>
))}
          </ul>
        </nav>
   {/* Login / Signup / Dashboard */}
   <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative transition-transform duration-300 hover:scale-110">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100 hover:text-yellow-50 transition-colors duration-300" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-center text-xs font-bold text-richblack-900 shadow-lg animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-xl border border-richblack-700 bg-richblack-800/50 backdrop-blur-sm px-5 py-2.5 text-richblack-100 hover:bg-richblack-700 hover:border-richblack-600 transition-all duration-300 hover:scale-105 shadow-lg">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-5 py-2.5 text-richblack-900 font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
        {/* <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button> */}
      
      <button
  className="mr-4 md:hidden"
  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
>
  <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
</button>

{isMobileMenuOpen && (
  <div className="absolute top-16 left-0 z-50 w-full bg-richblack-900/95 backdrop-blur-xl px-6 py-6 shadow-2xl border-b border-richblack-700 md:hidden animate-in slide-in-from-top duration-300">
    {/* Nav Links */}
    <ul className="flex flex-col gap-4 text-richblack-25">
      {NavbarLinks.map((link, index) => (
  <li key={index}>
    {link.title === "Catalog" ? (
      <div>
        <button
          className="flex w-full items-center justify-between text-left text-richblack-100"
          onClick={() => setIsCatalogOpen((prev) => !prev)}
        >
          <span className="flex items-center gap-2">
            Catalog
            <BsChevronDown
              className={`transition-transform duration-200 ${
                isCatalogOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        {isCatalogOpen && (
          <div className="ml-3 mt-2 flex flex-col gap-2">
            {subLinks?.map((subLink, i) => (
              <Link
                to={`/catalog/${subLink.name
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                key={i}
                className="rounded-lg px-2 py-2 text-sm text-richblack-100 hover:bg-richblack-700"
                onClick={() => {
                  setIsCatalogOpen(false)
                  setIsMobileMenuOpen(false)
                }}
              >
                {subLink.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        to={link?.path}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`block text-richblack-100 ${
          matchRoute(link?.path) ? "text-yellow-25" : ""
        }`}
      >
        {link.title}
      </Link>
    )}
  </li>
))}

    </ul>

    {/* Auth Buttons / Cart / Profile */}
    <div className="mt-6 flex flex-col gap-3">
      {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
        <Link
          to="/dashboard/cart"
          className="relative w-fit"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
          {totalItems > 0 && (
            <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
              {totalItems}
            </span>
          )}
        </Link>
      )}

      {token === null && (
        <>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Log in
            </button>
          </Link>
          <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="w-full rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Sign up
            </button>
          </Link>
        </>
      )}

      {token !== null && <div className="w-full">
    <ProfileDropDown mobile={true} />
  </div>}
    </div>
  </div>
)}


    </div>
    </div>
  )
}  

export default Navbar
