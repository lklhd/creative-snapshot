import React from 'react'
import Frame from 'react-frame-component'

import ContainerNode from '../ContainerNode/ContainerNode'
import ImageNode from '../ImageNode/ImageNode'
import ShapeNode from '../ShapeNode/ShapeNode'
import TextNode from '../TextNode/TextNode'

// import classes from './CreativeSnapshot.scss'

class CreativeSnapshot extends React.Component {
  static propTypes = {
    doc: React.PropTypes.object.isRequired,
    data: React.PropTypes.array
  }

  getCanvasNode () {
    const {canvases, nodes} = this.props.doc
    return nodes.find((n) => (n.id === canvases[0]))
  }

  buildTree (id, nodes) {
    const node = nodes.find((n) => n.id === id)
    return {
      ...node,
      children: (node.children || []).map((c) => this.buildTree(c, nodes))
    }
  }

  componentDidMount () {
    const canvas = this.getCanvasNode()
    const container = this.refs.container
    const parent = container.parentNode.getBoundingClientRect()

    // scale the creative snapshot to fill the
    // width of its immediate parent
    const scale = parent.width / canvas.width.value
    container.style.transformOrigin = 'left top 0px'
    container.style.transform = `scale(${scale})`
  }

  render () {
    const id = this.props.doc.canvases[0]
    const root = this.buildTree(id, this.props.doc.nodes)
    const canvas = this.getCanvasNode()

    return (
      <Frame
        height='100%'
        seamless='seamless'
        scrolling='no'
        style={{
          border: 'none'
        }}
        width='100%'>
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            width: canvas.width.value + 'px',
            height: canvas.height.value + 'px'
          }}
          ref='container'
        >
          {
            root.children.map(
              (c) => (
                <Node
                  key={c.id}
                  node={c}
                  dataSource={this.props.doc.dataSource}
                />
              )
            )
          }
        </div>
      </Frame>
    )
  }
}

function Node (props) {
  const { node, data } = props

  const layoutCss = (prop) => prop.type === 'auto' ? 'auto' : `${prop.value}${prop.type}`

  function transforms (node) {
    const ts = []
    if ((node.vAlign || {}).value === 'middle') {
      ts.push('translateY(-50%)')
    }
    if ((node.hAlign || {}).value === 'center') {
      ts.push('translateX(-50%)')
    }
    return ts.join(' ')
  }

  const style = {
    width: layoutCss(node.width),
    height: layoutCss(node.height),
    top: layoutCss(node.top),
    right: layoutCss(node.right),
    bottom: layoutCss(node.bottom),
    left: layoutCss(node.left),
    transform: transforms(node),
    opacity: node.opacity.value / 100,
    overflow: node.mask.value ? 'hidden' : 'visible',
    position: 'absolute'
  }

  return (
    <div
      /* className={classes.node} */
      style={style}
    >
      <div /* className={classes.content} */
        style={{
          width: '100%',
          height: '100%'
        }}>
        {node.type === 'image' && <ImageNode node={node} data={data} />}
        {node.type === 'text' && <TextNode node={node} data={data} />}
        {node.type === 'shape' && <ShapeNode node={node} />}
        {node.type === 'container' && <ContainerNode node={node} />}
      </div>
      {
        node.children.map(
          (n) => <Node key={n.id} node={n} data={data} />
        )
      }
    </div>
  )
}
Node.propTypes = {
  node: React.PropTypes.object.isRequired,
  data: React.PropTypes.array
}

module.exports = CreativeSnapshot
