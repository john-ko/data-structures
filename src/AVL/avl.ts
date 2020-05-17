export namespace AVL {

  /**
   * constructor options
   */
  interface Options {
    compare?: () => number,
  }

  export class Node {
    public data: any
    public left: Node | null
    public right: Node | null
    public height: number

    constructor (data?: any) {
      this.data = data
      this.left = null
      this.right = null
      this.height = 0
    }
  }

  export class AVLTree {

    public compare: (a: Node | null, b: Node | null) => number
    public count: number
    private root: Node | null

    constructor (options?: Options) {
      this.root = null
      this.count = 0
      this.compare = options?.compare || AVLTree.defaultCompare
    }

    static defaultCompare (a: Node | null, b: Node | null): number {
      if (!a || !b) {
        return 0
      }

      if (a.data < b.data) {
        return -1
      }

      return 1
    }

    insert (data: any): Node | null {
      const node = new Node(data)
      this.count += 1

      if (!this.root) {
        this.root = node
        return node
      }

      this.root = this._insert(this.root, node)

      return node
    }

    _insert(current: Node | null, node: Node): Node | null {
      if (!current) {
        return node
      }

      const compare = this.compare(node, current)

      if (compare === 1) {
        current.right = this._insert(current.right, node)
      } else {
        current.left = this._insert(current.left, node)
      }

      // update height
      current.height = this.height(current) + 1

      const balanceFactor = this.getBalance(current)

      // check balance
      // left left
      this.compare(node, current.left)
      if (balanceFactor > 1 && this.compare(node, current.left) === -1) {
        return this.rotateRight(current)
      }

      // right right
      if (balanceFactor < -1 && this.compare(node, current.right) === 1) {
        return this.rotateLeft(current)
      }

      // left right
      if (balanceFactor > 1 && this.compare(node, current.left) === 1) {
        current.left = this.rotateLeft(current.left)

        return this.rotateRight(current)
      }

      // right left
      if (balanceFactor < -1 && this.compare(node, current.right) === -1) {
        current.right = this.rotateRight(current.right)

        return this.rotateLeft(current)
      }

      return current
    }

    height (node: Node): number {
      const left = this.getHeight(node?.left)
      const right = this.getHeight(node?.right)

      return Math.max(left, right)
    }

    getHeight (node: Node | null): number {
      if (node === null) {
        return 0
      }

      return node.height
    }

    getBalance (node: Node): number {
      return this.getHeight(node.left) -
        this.getHeight(node.right)
    }

    getRoot (): Node | null {
      return this.root
    }

    rotateLeft (current: Node | null): Node | null {
      const newRoot: Node | null = current?.right ?? null
      const newRight = newRoot?.left ?? null

      if (newRoot) {
        newRoot.left = current
      }

      if (current) {
        current.right = newRight
      }

      if (current) {
        current.height = this.height(current) + 1
      }

      if (newRoot) {
        newRoot.height = this.height(newRoot) + 1
      }

      return newRoot
    }

    rotateRight (current: Node | null): Node | null {
      const newRoot: Node | null = current?.left ?? null
      const newLeft = newRoot?.right ?? null

      if (newRoot) {
        newRoot.right = current
      }

      if (current) {
        current.left = newLeft
      }

      if (current) {
        current.height = this.height(current) + 1
      }

      if (newRoot) {
        newRoot.height = this.height(newRoot) + 1
      }

      return newRoot
    }

    print (logger?: any) {
      if (!logger) {
        logger = console.log
      }

      logger('')

      this._print(this.root, 0, logger)
    }

    _print (current: Node | null, space: number = 0, logger: any): void {
      const COUNT = 5

      if (!current) {
        return
      }

      space += COUNT

      this._print(current.right, space, logger)
      let printStr = ''
      for (let i = 0; i < space; i++) {
        printStr += ' '
      }

      printStr += current.data
      logger(printStr)

      this._print(current.left, space, logger)
    }
  }
}
