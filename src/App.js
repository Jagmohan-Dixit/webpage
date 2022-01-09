import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import "./App.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook'
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle'
import Call from '@material-ui/icons/Call'
import Search from '@material-ui/icons/Search'
 import Facebook from '@material-ui/icons/Facebook'


const App = () => {

    const [arr, setArr] = useState(["CHEMICALS & PROCESS", "POWER", "WATER & WASTE WATER", "OILS & GAS", "PHARMA", "SUGARS & DISTILLERIES", "PAPER & PULP", "MARINE & DEFENCE", "METAL & MINING", "FOOD & BEVERAGE", "PETROCHEMICAL & REFINERIES", "SOLAR", "BUILDING", "HVAC", "FIRE FIGHTING", "AGRICULTURE & RESIDENTIAL"]);

    return (
      <div className='cri'>
        <div className="logo">
            <img src='/logo.png' />
        </div>
        <div className="middle">
          <div className="cup">
            <img src='/1.png' />
          </div>

        <div className='right'>
          <p className='main_heading'><h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time. </h3></p>
          <ul>
            <li className='para'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li className='para'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <div className="cup_right">
            <img src='/2.png' />
          </div>
            <p  className='para'>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
        </div>
      <div className='down'>
        <p className='middle_para'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className="down_logo">
            <img src='/3.png' />
        </div>
        <p className='middle_para2'>Valves - Pumps - Pipes - IoT Drives and Controllers - Wires and Cables - Solar Systems - Motors </p>
        <h3 style={{textAlign:"center"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
      
      <div className='footers'>
        {arr.map((item) => {
          return (
          <span className='para_footer'>{item} | </span>
          )
        })}
      </div>
      </div>
      <div className="footer">
        <div className='footer_item'>
          <Call style={{paddingTop:"1rem", paddingRight:"0.5rem"}}/>
          <p>Toll Free 1800 200 1234</p>
        </div>
        <div className='footer_item'>
        <Facebook style={{paddingTop:"1rem", paddingRight:"0.5rem"}}/>
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className='footer_item'>
          <Search size='2rem' style={{paddingTop:"1rem", paddingRight:"0.5rem"}}/>
          <p>www.crigroups.com</p>
        </div>
      </div>

      </div>
    )
}

export default App;
