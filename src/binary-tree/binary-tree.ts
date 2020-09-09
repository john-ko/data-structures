export class Node {
  data: any
  left: Node | null
  right: Node | null

  constructor(data: any) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export function defaultComparator (a: any, b: any) {
  if (a < b) {
    return -1
  } else if (b < a) {
    return 1
  }

  return 0
}

export class BinarySearchTree {
  public root: Node | null
  private comparator: (a: any, b: any) => number

  constructor(comparator?: () => number) {
    this.root = null
    this.comparator = comparator ?? defaultComparator
  }

  public insert (data: any): any {
    this.root = this._insert(this.root, data)

    return data
  }

  private _insert(node: Node | null, data: any): Node {
    if (!node) {
      return new Node(data)
    }

    if (this.comparator(node.data, data) === 1) {
      node.left = this._insert(node.left, data)
    } else {
      node.right = this._insert(node.right, data)
    }

    return node
  }

  public remove (data: any): any {
    if (!this.root) {
      return undefined
    }

    this.root = this._remove(this.root, data)

    return data
  }

  private _remove(node: Node | null, data: any): Node | null {
    if (!node) {
      return node
    }

    const comparison = this.comparator(node.data, data)

    if (comparison === 1) {
      node.left = this._remove(node.left, data)
    } else if (comparison === -1) {
      node.right = this._remove(node.right, data)
    } else {
      let temp: Node

      if (!node.left) {
        temp = node.right as Node
        node = null
        return temp
      } else if (!node.right) {
        temp = node.left
        node = null
        return temp
      }

      temp = this._minValue(node.right)
      node.data = temp.data
      node.right = this._remove(node.right, temp.data)
    }

    return node
  }

  private _minValue (node: Node) {
    let current: Node = node

    while(current.left) {
      current = current.left
    }

    return current
  }

  public has (data: any): boolean {
    const node: Node | null = this.find(data)

    return Boolean(node)
  }

  public find (data: any): any {
    if (!this.root) {
      return null
    }

    return this._find(this.root, data)
  }

  private _find (node: Node, data: any): Node | null {
    const compare = this.comparator(node.data, data)

    if (compare === 0) {
      return node
    }

    if (compare === 1) {
      // go left
      if (node.left) {
        return this._find(node.left, data)
      }
    } else {
      if (node.right) {
        return this._find(node.right, data)
      }
    }

    return null
  }
}