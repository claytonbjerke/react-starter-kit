import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {value: this.props.text};
  }

  _handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.itemId, this.state.value);
      case 'Escape':
        return this.cancelEditing(this.props.itemId);
    }
  }

  _handleOnBlur(e) {
    return this.cancelEditing(this.props.itemId);
  }

  _handleOnChange(e) {
    this.setState({value: e.target.value});
  }

  cancelEditing() {
    this.setState({'value': this.props.text});
    return this.props.cancelEditing(this.props.itemId);
  }

  render() {
    return (
      <input className="edit"
                  autoFocus={true}
                  value={this.state.value}
                  onChange={this._handleOnChange}
                  type="text"
                  ref="itemInput"
                  onKeyDown={this._handleKeyDown}
                  onBlur={this._handleOnBlur}
                  />
    );
  }
};
