/**
 * The Dropdown Component to show
 * the List of Dropdown Items.
 * 
 * The Expected properties are:
 *  value: --> The Selected Value from the Dropdown.
 *  options: {text, value}: The Array of the text,
 * value to contain the items from the Dropdown menu.
 * 
 * @author Kiran. Created on 05th Dec. 2018.
 */
import React, {Component} from 'react';

class Dropdown extends Component {

  render() {
    const {props} = this;
    const {value, options = []} = props;
    return(
      <div className="form-field dropdown-comp">
        <select value={value}>
          {options.map((item, key) =>
            (<option
                key={['dropdown', key].join('_')}
                value={item.value}>{item.text}</option>)
          )}
        </select>
      </div>
    );
  }
}
