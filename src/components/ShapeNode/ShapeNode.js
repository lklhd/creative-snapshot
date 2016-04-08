import React from 'react'

// import classes from './ShapeNode.scss'

function ShapeNode (props) {
  const style = {
    borderRadius: props.node.cornerRadius.value,
    backgroundColor: props.node.fill.type === 'color' ? props.node.fill.value : 'auto',
    backgroundImage: props.node.fill.type === 'image' ? `url(${props.node.fill.value})` : 'none',
    borderWidth: props.node.borderSize.value,
    borderColor: props.node.borderColor.value,
    width: '100%',
    height: '100%',
    borderStyle: 'solid',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div /* className={classes.shape} */ style={style}>
    </div>
  )
}

ShapeNode.propTypes = {
  node: React.PropTypes.object.isRequired
}

export default ShapeNode
