import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div id='result'className='ma'>
      <div  className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div> 
        {
	 box.map((user,i)=>{
		return (
			< div
			className='bounding-box'
			style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol}}
			/>
	);
	})
	}
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;