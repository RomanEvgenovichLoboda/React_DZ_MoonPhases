import './Curse.css';
import ReactCardFlip from 'react-card-flip'
import React, {useEffect, useState} from 'react';

function Curse () {
    
    const[eurBuy,setEurBuy] = useState();
    const[eurSale,setEurSale] = useState();
    const[usdBuy,setUsdBuy] = useState();
    const[usdSale,setUsdSale] = useState();
    

    useEffect(() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setEurBuy(data[0].buy);
            setEurSale(data[0].sale);
            setUsdBuy(data[1].buy);
            setUsdSale(data[1].sale);
           
        })
        .catch((err) =>{
             console.log(err.massage);
        });
    }, []);

    return (
        <div className='wrap'>
            <div className='card'>
                <div className='front'>
                    <div>
                    <h3>Ин.Валюта - <span>EUR</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Продажа - <span>{eurSale}</span></h3>
                    </div>
                </div>
                <div className='back'>
                <div>
                    <h3>Ин.Валюта - <span>EUR</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Покупка - <span>{eurBuy}</span></h3>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='front'>
                    <div>
                    <h3>Ин.Валюта - <span>USD</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Продажа - <span>{usdSale}</span></h3>
                    </div>
                </div>
                <div className='back'>
                <div>
                    <h3>Ин.Валюта - <span>USD</span></h3>
                    <h3>Валюта - <span>UAH</span></h3>
                    <h3>Покупка - <span>{usdBuy}</span></h3>
                    </div>
                </div>
            </div>
        </div>
           
    );
            
};
export default Curse;