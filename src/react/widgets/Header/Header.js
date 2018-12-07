/**
 * The Header Component to show the Header for the Whole Site.
 * 
 * @author Kiran. Created on 05th Dec. 2018.
 */
import React, {Component} from 'react';

import HeaderBottom from './subcomponents/HeaderBottom/HeaderBottom';
import HeaderTop from './subcomponents/HeaderTop/HeaderTop';

class Header extends Component {

  render() {
    const {props} = this;
    const {data} = props;
    const {logo, signInInfo, links = []} = data;
    return(
      <div className="header-comp container px-0">
        <HeaderTop logo={logo} signInInfo={signInInfo} />
        <HeaderBottom links={links} />
      </div>
    )
  }
}

export default Header;
