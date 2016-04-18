import React from 'react'

// import classes from './ImageNode.scss'

class ImageNode extends React.Component {
  static propTypes = {
    node: React.PropTypes.object.isRequired,
    data: React.PropTypes.array
  }

  static defaultProps = {
    dataSource: 'newArrivals'
  }

  safeGetData (prop) {
    const source = this.props.data || []
    const datum = source[(this.props.node.src.rank || 1) - 1] || {}
    return datum[prop] || ''
  }

  imageSource () {
    const type = this.props.node.src.type || 'static'
    return type === 'static'
      ? this.props.node.src.value
      : this.safeGetData(this.props.node.src.field)
  }

  render () {
    const style = {
      borderWidth: this.props.node.borderSize.value,
      borderColor: this.props.node.borderColor.value,
      width: '100%',
      height: '100%',
      borderStyle: 'solid'
    }

    return (
      <div /* className={classes.image} */ style={style}>
        <img src={this.imageSource()}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    )
  }
}

module.exports = ImageNode;
