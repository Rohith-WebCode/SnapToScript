import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
function footer() {
  return (
    <div> <MDBFooter bgColor='light' className='text-center text-lg-left'>
    <div className='text-center p-3' style={{ backgroundColor: '#E9F1FA' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      {/* <a className='text-dark' href=''> */}
      SnapToScript
      {/* </a> */}
    </div>
  </MDBFooter></div>
  )
}

export default footer