import React from 'react'

// import classes from './ContainerNode.scss'

function ContainerNode (props) {
  const style = {
    borderWidth: props.node.borderSize.value,
    borderColor: props.node.borderColor.value,
    width: '100%',
    height: '100%',
    borderStyle: 'solid'
  }

  return (
    <div /* className={classes.container} */ style={style}>
    </div>
  )
}

ContainerNode.propTypes = {
  node: React.PropTypes.object.isRequired
}

export default ContainerNode
