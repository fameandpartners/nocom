/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { assign } from 'lodash';

// CSS
import '../../../css/components/CodeEntry.scss';

// Components
const Input = require('../form/Input');


const propTypes = {
  className: PropTypes.string,
  formId: PropTypes.string,
};

const defaultProps = {
  className: '',
  formId: 'conversion_code',
};

class CodeEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: ['', '', ''],
      hasError: false,
    };
    autoBind(this);
  }

  showError() {
    this.setState({ hasError: true });
  }

  submitValues(codes) {
    console.log('submitting... ->', codes.reduce((accum, curr) => `${accum} ${curr}`));
  }

  allInputsHaveValues(codes) {
    return codes.every(el => !!el);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { codes } = this.state;

    if (this.allInputsHaveValues(this.state.codes)) {
      this.submitValue(codes);
    } else {
      this.showError();
    }
  }

  handleInputKeyUp(index) {
    return (e) => {
      const { codes } = this.state;
      const inputVal = e.target.value;
      const newCodes = [
        ...codes.slice(0, index),
        inputVal,
        ...codes.slice(index + 1),
      ];

      if (this.allInputsHaveValues(newCodes)) this.submitValues(newCodes);
      this.setState({ codes: newCodes });
    };
  }

  render() {
    const { className, formId } = this.props;
    const { hasError } = this.state;

    return (
      <div className={`CodeEntry ${className}`}>
        <form id={formId} onSubmit={this.handleOnSubmit}>
          <Input
            id="word-0"
            className="Input--standard u-textAlign--center u-display--inline u-noselect"
            hasError={hasError}
            wrapperClass="u-display--inline-block"
            handleOnKeyUp={this.handleInputKeyUp(0)}
          />
          <Input
            id="word-1"
            className="Input--standard u-textAlign--center u-display--inline u-noselect"
            hasError={hasError}
            wrapperClass="u-display--inline-block"
            handleOnKeyUp={this.handleInputKeyUp(1)}
          />
          <Input
            id="word-2"
            className="Input--standard u-textAlign--center u-display--inline u-noselect"
            hasError={hasError}
            wrapperClass="u-display--inline-block"
            handleOnKeyUp={this.handleInputKeyUp(2)}
          />
          <div className="CodeEntry__hidden-submit">
            <input type="submit" tabIndex="-1" />
          </div>
        </form>
      </div>
    );
  }
}

CodeEntry.propTypes = propTypes;
CodeEntry.defaultProps = defaultProps;

module.exports = CodeEntry;

// MINI
// <Input
//   id="mini-0"
//   maxLength="1"
//   focusOnMount
//   wrapperClass="u-display--inline-block"
//   className="Input--miniature u-display--inline u-noselect"
//   handleOnKeyUp={this.handleMiniatureKeyUp}
// />
