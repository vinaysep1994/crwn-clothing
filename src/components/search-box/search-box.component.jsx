import React from "react";

import { connect } from "react-redux";
import { filterItem } from "../../redux/cart/cart.actions";

import './search-box.styles.scss';

class SearchBox extends React.Component {
  handleChange = e => {
    this.props.filterItem(e.target.item);
  };
    render(){
    return (
      <div>
        <input className="search"
          type="search"
          name="search"
          placeholder="search"
          onChange={this.handleChange}
          item={this.props.item}
        />
      </div>
    )
   };
}
const mapStateToProps = dispatch =>({
   filterItem:item=>dispatch(filterItem(item))
});
export default connect(mapStateToProps)(SearchBox);

