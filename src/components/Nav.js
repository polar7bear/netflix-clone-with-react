import React, {useState, useEffect} from 'react'
import "./Nav.css"
export default function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
      });
    
      return () => {
        window.removeEventListener("scroll", () => {});
      }
    }, []);
    

  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img 
        alt="logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        className='nav_logo'
        onClick={() => window.location.reload()}
        />
        <img
        alt="profile"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className='nav_avatar'
        />
    </nav>
  )
}
