import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => {
  return(
    <div className="app__menuItem">
      <div className="app__menuItem-head">

        <div className="app__menuItem-name">
          <p style={{color: '#DCCA87'}} className="p__cormorant">{title}</p>
        </div>

        <div className="app__menuItem-dash"></div>

        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>

      </div>
      <div className="app__menuItem-sub">
        <p className="p__opensans" style={{color: '#aaa'}}>{tags}</p>
      </div>
    </div>  
  )
}

export default MenuItem;
