import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <ul className='footerItem1'>
            <li className='footerCompany'>О компании</li>
            <li className='companyItem'><a href='#' className='link'>Партнерская программа</a></li>
            <li className='companyItem'><a href='#' className='link'>Вакансии</a></li>
        </ul>
        <ul className='footerItem2'>
            <li className='footerMenu'>Меню</li>
                <ul className='menuItems'>
                    <li className='menuItem'><a href='#' className='link'>Расчет стоимости</a></li>
                    <li className='menuItem'><a href='#' className='link'>Услуги</a></li>
                    <li className='menuItem'><a href='#' className='link'>Виджеты</a></li>
                    <li className='menuItem'><a href='#' className='link'>Интеграции</a></li>
                    <li className='menuItem'><a href='#' className='link'>Наши клиенты</a></li>
                    <li className='menuItem'><a href='#' className='link'>Благодарственные письма</a></li>
                    <li className='menuItem'><a href='#' className='link'>Кейсы</a></li>
                    <li className='menuItem'><a href='#' className='link'>Сертификаты</a></li>
                    <li className='menuItem'><a href='#' className='link'>Блог на Youtube</a></li>
                    <li className='menuItem'><a href='#' className='link'>Вопросы/Ответы</a></li>
                </ul>
        </ul>
        <ul className='footerItem3'>
            <li className='footerContacts'>Контакты</li>
            <li className='contactsTel'>+7 555 555-55-55</li>
            <div className='icons'>
                <a href='#' className='contactsItem'><img src="../image/telegram.png" alt="" /></a>
                <a href='#' className='contactsItem'><img src="../image/viber.png" alt="" /></a>
                <a href='#' className='contactsItem'><img src="../image/whatsapp.png" alt="" /></a>
            </div>
            <li className='contactsAdd'><a href='#' className='link'>Москва, Путевой проезд 3с1, к 902</a></li>
            <li className='contactsInfo1'>©WELBEX 2022. Все права защищены.</li>
            <li className='contactsInfo2'>Политика конфиденциальности</li>
        </ul>
    </div>
    
  )
}
