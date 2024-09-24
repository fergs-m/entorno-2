import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'

function SegundaParte(){

    const [cards, setCards] = useState ([]);

    const {VITE_DOS} = import.meta.env;

    useEffect( () => {

        let controller = new AbortController()
        let options = {
            method : 'GET',
            headers : { 
                'Content-Type' : 'application/json' 
            }, 
            signal : controller.signal
        }

        fetch(VITE_DOS, options)
        .then(res => res.json())
        .then( data => setCards(data))
        .catch(err => console.log(err))
        .finally( () => controller.abort())

    
    } , [])



    return ( 
    
    <> 
  
    {cards.map( card => { 

    

     return   <section key={card.nombre} className='cardContenedor'> 

        <div className='cardContenedor_div'> 
        <img src= {card.imgColor} alt="card con color" />
        </div>

        <img src= {card.imgSinColor} alt="card sin color" />

       </section>         
    

    } )}
   
    
    </>
    )
}

export default SegundaParte;