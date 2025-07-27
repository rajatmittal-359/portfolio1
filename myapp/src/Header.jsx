import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaExclamationTriangle } from 'react-icons/fa';
import { RiContactsLine } from 'react-icons/ri';
const Header = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between' }} className='navbar'>
    <h1  style={{fontWeight: '100', fontSize:'35px',marginLeft:'40px' ,marginTop:'20px',textDecorationStyle:'wavy'}}>Rajat Mittal</h1>
    <ul style={{listStyle:'none', display:'flex', gap:'40px' ,fontWeight: '100', fontSize:'35px', marginTop:'20px'}}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}><FaHome style={{background:'linear-gradient(90deg, #e0ae23ff, #1f7721ff, #532c64ff)',fontSize:'30px'}} />  Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}><FaUser style={{background:'linear-gradient(90deg, #e0ae23ff, #1f7721ff, #532c64ff)',fontSize:'30px'}} />  About</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}><RiContactsLine style={{background:'linear-gradient(90deg, #e0ae23ff, #1f7721ff, #532c64ff)' ,fontSize:'30px' }} />  Contact</Link></li>
        <li><Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}> Signup page</Link></li>
        <li><Link to="/llogin" style={{ color: 'white', textDecoration: 'none' }}> llogin page</Link></li>
    </ul>
    <h1 style={{fontSize:'20px', alignContent:'center',marginRight:'40px'}}>
        <a href="/zoho resume.pdf" download style={{  border: '2px solid black',padding:'18px', color:'black',background: 'linear-gradient(45deg, #b4c1dfff, #182848)',borderRadius: '8px',backdropFilter: 'blur(5px)'}}>
            Download Resume
        </a>
    </h1>
    
    </div>
  )
}

export default Header