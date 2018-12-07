/**
 * The Label Component to Display the Labels.
 * 
 * @author Kiran. Created on 05th Dec. 2018.
 */
import React, {Component} from 'react';

class Label extends Component {

  render() {
    const {props} = this;
    const {label, classValue} = props;
    return(
      <div className="form-field label-comp">
        <label className={classValue}>{label}</label>
      </div>
    );
  }
}

export default Label;
