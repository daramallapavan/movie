
import { MdHome } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { MdMovie } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

export const navigation=[
    {
      label:"Tv Shows",
      href: 'tv',
      icon: <PiTelevisionBold/>
    },{
      label: "Movies",
      href: 'movie',
      icon: <MdMovie/>
    }
  ]
  
 export const mobileNavigation=[
    {
      label:"Home",
      href:"/",
      icon: <MdHome/>
    },
    ...navigation,
    {

        label: "search",
        href: "/search",
        icon: <IoSearchOutline/>
    }
  ]