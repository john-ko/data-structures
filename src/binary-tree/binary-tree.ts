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
    if (!this.root) {
      this.root = new Node(data)

      return data
    }

    return this._insert(this.root, data)
  }

  public remove (data: any): any {
    if (!this.root) {
      return undefined
    }

    // remove the root if its the one to be removed
    if (this.comparator(this.root.data, data) === 0) {
      if (!this.root.left && !this.root.right) {
        this.root = null
      } else if (this.root.left) {
        this.root = this.root.left
      } else {
        this.root = this.root.right
      }

      return data
    }

    return 1
  }

  private _insert (node: Node, data: any): any {
    if (this.comparator(node.data, data) === 1) {
      // go left
      if (node.left) {
        return this._insert(node.left, data)
      }

      node.left = new Node(data)
    } else {
      if (node.right) {
        return this._insert(node.right, data)
      }

      node.right = new Node(data)
    }

    return data
  }
}