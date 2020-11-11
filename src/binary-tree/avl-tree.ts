export class Node {
  data: any
  left: Node | null
  right: Node | null
  height: number

  constructor(data: any) {
    this.data = data
    this.left = null
    this.right = null
    this.height = 0
  }
}

export class AvlTree {
  root: Node | null
  length: number

  constructor () {
    this.root = null
    this.length = 0
  }
}