import React from 'react';
import Pepa from '../assets/images/Pepa.jpg';
// import Yoda from '../assets/images/Yoda.png';
// import Minion from '../assets/images/Minion.png';
// import Bob from '../assets/images/Bob.jpg';

function NotFound(){
    return(
        <div className="text-center">
            <h1>Oops! La página no se encuentra disponible...</h1>
            <br/>
            <h1>(404 Not Found)</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={Pepa} alt="Pepa.jpg"/> 
            {/* <img style={{width: 15 +'rem'}} src={Yoda} alt="Yoda.png"/>
            <img style={{width: 15 +'rem'}} src={Minion} alt="Minion.png"/>
            <img style={{width: 15 +'rem'}} src={Bob} alt="Bob.jpg"/> */}
        </div>
        
    )
}


export default NotFound;