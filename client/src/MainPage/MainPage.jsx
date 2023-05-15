import React from 'react';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className='main'>
        <div className='mainInfo1'>
            <p className='infoItemP1'>Зарабатывайте <br/>больше</p>
            <p className='infoItemP2'>с WELBEX</p>
            <p className='infoItemP3'>Развиваем и контролируем <br/>продажи за вас</p>
        </div>
        <div className='mainInfo2'>
            <div className='infoItem1'>
            <p className='infoItemP4'>Вместе с <span className='p4p1'>БЕСПЛАТНОЙ</span><br/><span className='p4p2'> КОНСУЛЬТАЦИЕЙ</span> мы дарим:</p>
            </div>
        <div className='infoItem2' >
            <div className='setka'>
                <div className='setka1'>
            <h5 className='setkaItems'>Виджеты</h5>
                <p className='itemsContent'>&nbsp;30 готовых<br/>&nbsp;&nbsp;&nbsp;&nbsp;решений</p>
            <h5 className='setkaItems'>SKYPE АУДИТ</h5>
                <p className='itemsContent'>&nbsp;&nbsp;&nbsp;отдела продаж<br/>&nbsp;&nbsp;&nbsp;и CRM системы</p>
                </div>
                <div className='setka2'>
            <h5 className='setkaItems'>DASHBOARD</h5>
                <p className='itemsContent'>с показателями <br/>вашего бизнеса</p>
            <h5 className='setkaItems'>35 ДНЕЙ</h5>
                <p className='itemsContent'>использования <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRM</p>
                </div>
            </div>
            <div className='buttonMain'>
            <button className='button'><span>Получить консультацию</span></button>
            </div>
         </div>
        <div className='infoItem2m'>
                <h5 className='itemsM'><spam className='itemsM1'>- </spam>SKYPE АУДИТ</h5>
                <h5 className='itemsM'><spam className='itemsM1'>- </spam>DASHBOARD</h5>
                <h5 className='itemsM'><spam className='itemsM1'>- </spam>30 Виджетов</h5>
                <h5 className='itemsM'><spam className='itemsM1'>- </spam>Месяц Amocrm</h5>
        </div>
        </div>
    </div>
  )
}
