// DropdownMenu.jsx
import { useState, useRef, useEffect } from "react";
import profilePic from '../../../assets/imgs/Negma.jpeg'
import { useSelector , useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'

 function DropdownMenu ({ items, profileImg })   {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

      const {accessToken,user} = useSelector((state) => state.auth)


  return (
    <div className="relative   " ref={dropdownRef}>
       <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
         onClick={() => setIsOpen(!isOpen)}
        className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      <img
        src={profilePic}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover cursor-pointer"
      
      />
</button>
      <div
        className={`absolute  top-[50px] right-[0px]  md:right-[-100px]   md:w-48 bg-white rounded-lg shadow-lg shadow-red-300 z-50 transform transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}`}
        
      >
        <ul className="py-2 flex flex-col">
        
          
          {items.map((item, index) => (
            <NavLink to={item.to} > <li
              key={index}
           
              className={`px-4 py-2 cursor-pointer transition-shadow duration-200 hover:bg-gray-100 hover:shadow-md ${
                item.isLogout ? "text-red-600 font- " : ""
              }`}
              onClick={item.onClick}
            >
              {item.label}
            </li>
            </NavLink>
          ))}
          
        </ul>
      </div>
    </div>
  );
}
export default  DropdownMenu