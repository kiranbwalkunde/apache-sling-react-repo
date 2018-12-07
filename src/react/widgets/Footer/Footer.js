/**
 * The Footer Component to Show the College Related Footer Contents.
 * 
 * @author Shiva. Created on 05th Dec. 2018.
 */
import React, {Component} from 'react';

class Footer extends Component {

  render() {
    const {props} = this;
    const {data} = props;
    const {links = [], copyRightText, logo} = data;
    return(
      <div className="footer-comp container px-0 py-3">
        <div className="row mx-0 top py-2">
          <div className="col-md-6 col-sm-6">
            <a href={logo.targetUrl} title={logo.title}>
              <img src={logo.imageUrl} />
            </a>
          </div>
          <div className="col-md-6 col-sm-6 text-md-right text-sm-left">
            <small>{copyRightText}</small>
          </div>
        </div>
        <div className="row mx-0 bottom pt-3 pb-2">
          <div className="col px-0">
            <ul className="pl-0 mb-0">
              {links.map((item, key) => 
                <li
                  className="d-inline-block px-2"
                  key={['footer-item', key].join('_')}>
                  <a href={item.targetUrl}>
                    <i className="material-icons">{item.iconName}</i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
