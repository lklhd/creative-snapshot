import React from 'react'

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
const defaultSetting = {
  text: {
    value: 'Text'
  },
  font: {
    value: 'arial'
  },
  weight: {
    value: 400
  },
  color: {
    value: '#000'
  },
  size: {
    value: 36
  },
  width: {
    type: 'auto',
    value: 100
  },
  height: {
    type: 'auto',
    value: 100
  },
  letterSpacing: {
    value: 'normal'
  },
  lineHeight: {
    value: 'normal'
  },
  paragraphSpacing: {
    value: 'auto'
  },
  textAlign: {
    value: 'left'
  },
  textWidth: {
    value: 'auto'
  },
  textStyle: {
    value: {
      underline: false,
      smallCaps: false,
      italic: false,
      uppercase: false
    }
  }
}

function safeGetData (field, data, node) {
  const source = data || []
  const datum = source[(node.text.rank || 1) - 1] || {}
  return datum[field] || ''
}

function textValue (props) {
  const { node, data, previewData } = props
  const type = node.text.type || 'static'
  return type === 'static'
    ? node.text.value
    : previewData ? previewData[node.text.field] : safeGetData(node.text.field, data, node)
}

class TextNode extends React.Component {
  static propTypes = {
    node: React.PropTypes.object.isRequired,
    data: React.PropTypes.array,
    previewData: React.PropTypes.object,
    setProperty: React.PropTypes.func
  }

  state = {
    editText: textValue(this.props)
  }


  onDoubleClick (e) {
    e.preventDefault();
    this.refs.label.style.display = 'none';
    this.refs.input.style.display = 'block';
    this.refs.input.focus();
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

  componentWillReceiveProps (props) {
    this.setState({editText: textValue(props)})
  }

  getNode () {
    return {...defaultSetting, ...this.props.node}
  }

  render () {
    const node = this.getNode()

    const style = {
      fontFamily: node.font.value,
      fontWeight: node.weight.value,
      color: node.color.value,
      fontSize: node.size.value,
      width: node.textWidth.value == 'auto' ? 'auto' : node.width.value,
      textAlign: node.textAlign.value,
      letterSpacing: node.letterSpacing.value,
      lineHeight: node.lineHeight.value === 'normal' ? 'normal': node.size.value + node.lineHeight.value,
      textDecoration: node.textStyle.value.underline ? 'underline' : 'none',
      textTransform: node.textStyle.value.uppercase ? 'uppercase': 'none',
      fontVariant: node.textStyle.value.smallCaps ? 'small-caps': 'none',
      fontStyle: node.textStyle.value.italic ? 'italic': 'normal'
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
