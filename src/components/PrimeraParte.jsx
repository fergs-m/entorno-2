import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function PrimeraParte() {
    
    const [paginas,setPaginas] = useState([]); 
    const { VITE_URL_API } = import.meta.env;

    useEffect( () => {

      let controller = new AbortController() 
      let options = {
          method : 'GET',
          headers : {
              'Content-Type' : 'application/json' 
          },
          signal : controller.signal
        }

        fetch(VITE_URL_API, options)
        .then( res => res.json())
        .then(data => setPaginas(data))
        .catch(err => console.log(err))
        .finally( () => controller.abort())
    })

  return ( 
    <>

    {paginas.map ( (pagina, index) => {

      const clasesPaginas = `paginas-${index}`
      return pagina.nombre != 'seccionCards'? ( <section key={pagina.nombre} className={clasesPaginas}> 

         <img src= {pagina.imgTexto} alt="texto" className='texto' />
         <img src={pagina.imgCelu} alt="telefono" />

         </section>
        ) :  <> </>

    })}
    
    </>
    )
}

export default PrimeraParte