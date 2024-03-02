import React from 'react';
import Loading_gif from '../images/loading_spinner.gif';

const Loading = () => {
  return (
    <div id='loading' className='text-center'>
      <img src={Loading_gif} style={{width: "80px"}} alt="&nbsp; Loading" />
    </div>
  )
}

export default Loading;