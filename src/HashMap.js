/**
 * HashMap
 */
export default class HashMap {
  constructor (options = {}) {
    this.size = 0
    this.tableSize = options.tableSize || 10
    this.sizeLimit = options.sizeLimit || 0.7 // 70% full
    this.hashFunction = options.hashFunction || this.hashCode.bind(this)

    this.table = new Array(this.tableSize)
  }

  /**
   * JS implementation of Java's hashCode
   * https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
   *
   * @param {String} key - hash key
   *
   * @returns {String} - hashed value
   * @memberof HashMap
   */
  hashCode (key = '') {
    let hash = 0

    if (key.length == 0) {
      return hash
    }

    for (let i = 0; i < key.length; i++) {
      let char = key.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }

    return hash
  }

  /**
   * add - adds key value to hashmap
   *
   * @param {String} key
   * @param {Any} value
   *
   * @returns {Any} value
   * @memberof HashMap
   */
  add (key = '', value) {
    // limit check
    if (this.isTableAlmostFull()) {
      this.createNewTable() // resizeTable
    }

    this.addToTable(this.table, this.tableSize, key, value)
    this.size++

    return value
  }

  /**
   * addToTable - "static" function that adds to any table
   *
   * @param {Array} table - hash table
   * @param {Number} size
   * @param {String} key
   * @param {Any} value
   * @memberof HashMap
   */
  addToTable (table, size, key, value) {
    let hashedKey = this.hashFunction(key) % size

    while (table[hashedKey]) {
      // check if value is the same
      if (table[hashedKey].key === key) {
        return table[hashedKey].value = value
      }

      hashedKey++

      // reset to 0 if out of bounds
      if (hashedKey >= size) {
        hashedKey = 0
      }
    }

    table[hashedKey] = { key, value }
  }

  /**
   * isTableAlmostFull - checks to see if past the sizeLimit
   * default limit 70%
   *
   * @memberof HashMap
   * @returns {Boolean}
   */
  isTableAlmostFull () {
    return (this.size / this.tableSize) > this.sizeLimit
  }

  /**
   * createNewTable - creates a new table if current table is full
   * @memberof HashMap
   */
  createNewTable () {
    const size = this.tableSize * 2 // double table size
    const newTable = new Array(size)

    this.rehashItems(newTable, size)

    this.table = newTable
    this.tableSize = size
  }

  /**
   * rehashItems - loops through and rehashes items
   *
   * @param {Array} newTable
   * @param {Number} size
   * @memberof HashMap
   */
  rehashItems (newTable, size) {
    this.table.forEach(({ key, value }) => {
      this.addToTable(newTable, size, key, value)
    })
  }
}