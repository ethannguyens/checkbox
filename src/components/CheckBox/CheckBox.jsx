import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as checkBoxActions from '../../actions/checkBoxAction';

require('./CheckBox.scss');

class CheckBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="CheckBox">
        {this.props.checkBox.items.map((item, i) => {
          return (
            <div key={i} className="CheckBox-li" >
              <span className="CheckBox-radio" />
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
