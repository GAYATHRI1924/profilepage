// import React, { Children } from 'react'

// function Button(props) {
//     const {Children , style,onclick} = props
//   return (

//         <button style={style ? style:{background:'red',color:'white'}}onClick={onclick}>{Children}</button>
  
//   )
// }

// export default Button

import React from 'react'


function Button(props) {
  return (
    <div className='nav'>
      <button className='butn1' >{props.title}</button>
  
    </div>
   
  )
}

export default Button