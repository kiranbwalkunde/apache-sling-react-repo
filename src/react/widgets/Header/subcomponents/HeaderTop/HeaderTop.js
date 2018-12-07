/**
 * The Header Top Component to show the Top Section of the Header.
 * 
 * @author Kiran. Created on 05th Dec. 2018.
 */
import React, {Component} from 'react';

class HeaderTop extends Component {

  render() {
    const {props} = this;
    const {logo, signInInfo} = props;
    return(
      <div className="header-top row pt-3 pb-1 mx-0">
        <div className="col-6">
          <img src={logo.imagePath} className="rounded logo-image" />
        </div>
        <div className="col-6 text-right my-auto">
          <i className="material-icons">{signInInfo.iconClass}</i>
        </div>
      </div>
    )
  }
}

export default HeaderTop;
