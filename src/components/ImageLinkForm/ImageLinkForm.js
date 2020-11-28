import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm=({InputChange,onSummit})=>{
	return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' 
          type='text' 
          onChange={InputChange}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onSummit}
          >Detect</button>
        </div>
      </div>
    </div>
		);
}

export default ImageLinkForm;