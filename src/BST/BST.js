export class Node {
  constructor (value) {
    this.data = value
    this.left = null
    this.right = null
  }
}

export default class BST {
  constructor () {
    this.root = null
  }

  add (value) {
    if (!this.root) {
      this.root = new Node(value)

      return value
    }

    this.traverse(this.root, value)
  }

  traverse (node, value) {
    let attr
    if (node.data < value) {
      attr = 'right'
    } else if (node.data > value) {
      attr = 'left'
    }

    if (node[attr]) {
      this.traverse(node[attr], value)
    } else {
      // set
      node[attr] = new Node(value)
    }
  }
}
