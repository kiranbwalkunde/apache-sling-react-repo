/**
 * The Header Bottom Component to show the Bottom Section of the Header.
 * 
 * @author Kiran. Created on 05th Dec. 2018.
 */
import React, {Component} from 'react';

class HeaderBottom extends Component {

  render() {
    const {props} = this;
    const {links} = props;
    return(
      <div className="header-bottom p-2">
        <ul className="pl-0 mb-0">
          {links.map((item, key) =>
            (<li 
                className={`d-inline-block ${key === 0 ? 'pr-3' : 'px-3'}`}
                key={['header-item', key].join('_')}>
              <a href={item.targetUrl}>{item.text}</a>
            </li>)
          )}
        </ul>        
      </div>
    )
  }
}

export default HeaderBottom;
