import React from 'react'

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class TextNode extends React.Component {
  static propTypes = {
    node: React.PropTypes.object.isRequired,
    data: React.PropTypes.array,
    setProperty: React.PropTypes.func
  }

  state = {
    editText: this.textValue()
  }

  safeGetData (field) {
    const {data, node} = this.props
    const datum = data[(node.text.rank || 1) - 1] || {}
    return datum[field] || ''
  }

  textValue () {
    const { node } = this.props
    const type = node.text.type || 'static'
    return type === 'static'
      ? node.text.value
      : this.safeGetData(node.text.field)
  }

  onDoubleClick (e) {
    e.preventDefault();
    this.refs.label.style.display = 'none';
    this.refs.input.style.display = 'block';
  }

  commit () {
    const { node, setProperty } = this.props

    this.refs.label.style.display = 'block';
    this.refs.input.style.display = 'none';

    setProperty(node.id, 'text', {value: this.refs.input.value})
  }

  handleKeyDown (e) {
    if (e.which === ESCAPE_KEY || e.which === ENTER_KEY) {
      this.commit();
    }
  }

  onBlur (e) {
    e.preventDefault();
    this.commit();
  }

  handleChange (e) {
    this.setState({editText: e.target.value});
  }

  render () {
    const { node } = this.props
    const style = {
      fontFamily: node.font.value,
      fontWeight: node.weight.value,
      color: node.color.value,
      fontSize: node.size.value
    }

    return <div style={style}>
      <div
        onDoubleClick={::this.onDoubleClick}
        ref='label'>
        {this.state.editText}
      </div>
      <input
        type='text'
        ref='input'
        style={{
          display: 'none'
        }}
        onBlur={::this.onBlur}
        onChange={::this.handleChange}
        onKeyDown={::this.handleKeyDown}
        value={this.state.editText} />
    </div>
  }
}

module.exports = TextNode
