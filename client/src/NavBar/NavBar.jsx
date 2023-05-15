import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='navBar'>
          <div className='navLogo' >
            <img src="../image/part1.png" alt="" className='logo1'/>
            <img src="../image/part2.png" alt="" className='logo2'/>
            <p className='logo3'>крупный интегратор CRM <br/>в Росcии и ещё 8 странах</p>
          </div>
              <ul className='navMenu'>
                <li className='navItem'><a className='navLink' href='#'>Услуги</a></li>
                <li className='navItem'><a className='navLink' href='#'>Виджеты</a></li>
                <li className='navItem'><a className='navLink' href='#'>Интеграции</a></li>
                <li className='navItem'><a className='navLink' href='#'>Кейсы</a></li>
                <li className='navItem1'><a className='navLink' href='#'>Сертификаты</a></li>
              </ul>
            <div className='contacts'>
                <p className='tel'>+7 555 555-55-55</p>
                <a href="#" className='telegram'><img src="../image/telegram.png" alt="" /></a> 
                <a href="#" className='viber'><img src="../image/viber.png" alt="" /></a> 
                <a href="#" className='whatsapp'><img src="../image/whatsapp.png" alt="" /></a> 
            </div>
    </div>
  )
}
