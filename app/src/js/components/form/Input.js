// *****
// ** Input is a purely functional dumb/stateless component
// *****
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '../../libs/noop';

// CSS
import '../../../css/components/Input.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  hasError: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  type: PropTypes.string,
  wrapperClass: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  handleOnKeyUp: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
  defaultValue: '',
  hasError: false,
  focusOnMount: false,
  inlineUnit: null,
  maxLength: '',
  placeholder: '',
  type: 'input',
  wrapperClass: '',
  handleOnChange: noop,
  handleOnKeyUp: noop,
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { handleOnChange, id } = this.props;
    handleOnChange({ id, value: e.target.value });
  }

  componentDidMount() {
    if (this.props.focusOnMount) this.input.focus();
  }

  render() {
    const {
      id,
      className,
      defaultValue,
      hasError,
      placeholder,
      maxLength,
      type,
      wrapperClass,
      handleOnKeyUp,
    } = this.props;

    return (
      <div className={`Input__wrapper ${wrapperClass}`}>
        <input
          ref={c => this.input = c}
          id={id}
          className={`Input ${className} ${hasError ? 'Input--error' : ''}`}
          onChange={this.handleOnChange}
          onKeyUp={handleOnKeyUp}
          placeholder={placeholder}
          maxLength={maxLength}
          type={type}
          defaultValue={defaultValue}
        />
      </div>
    );
  }
}


Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
