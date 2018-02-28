import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as checkBoxActions from '../../actions/checkBoxAction';

require('./CheckBox.scss');

class CheckBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClick = this.onClick.bind(this);
  }

  onClick(item) {
    let selectedItems = [...this.props.checkBox.selectedItems];
    let elementIndex = selectedItems.indexOf(item);

    if (elementIndex >= 0) {
      selectedItems.splice(elementIndex, 1);
      this.props.actions.updateSelectedItems(selectedItems);
    } else  {
      selectedItems.push(item);
      this.props.actions.updateSelectedItems(selectedItems);
    }
  }

  render() {
    return (
      <div className="CheckBox">
        {this.props.checkBox.items.map((item, i) => {
          return (
            <div key={i} className="CheckBox-li" onClick={() => this.onClick(i)}>
              <span className={`CheckBox-radio  ${this.props.checkBox.selectedItems.indexOf(i) >=0 ? "checked" : ""}`} />
              <span className="CheckBox-label">{item}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

CheckBox.propTypes = {
  checkBox: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    checkBox: state.checkBox
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(checkBoxActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
