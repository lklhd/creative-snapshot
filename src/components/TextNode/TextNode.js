import React from 'react'

function TextNode (props) {
  const style = {
    fontFamily: props.node.font.value,
    fontWeight: props.node.weight.value,
    color: props.node.color.value,
    fontSize: props.node.size.value
  }

  function safeGetData (prop) {
    const source = props.data || []
    const datum = source[(props.node.text.rank || 1) - 1] || {}
    return datum[prop] || ''
  }

  function textValue () {
    const type = props.node.text.type || 'static'
    return type === 'static'
      ? props.node.text.value
      : safeGetData(props.node.text.field)
  }

  return (
    <div style={style}>
      {textValue()}
    </div>
  )
}

TextNode.propTypes = {
  node: React.PropTypes.object.isRequired,
  data: React.PropTypes.array
}

export default TextNode
