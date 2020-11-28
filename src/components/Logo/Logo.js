import React from 'react';
import Brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css'
const Logo=()=>{
	return (
     <div className="ma4 mt0">
     <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 135, width: 135 }}>
      <img  className="Tilt-inner pa3" style={{paddingTop:'5px'}} alt='brain' src={Brain}/>
     </Tilt> 
     </div>
		);
}

export default Logo;