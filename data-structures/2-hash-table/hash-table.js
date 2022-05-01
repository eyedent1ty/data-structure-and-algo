class HashTable {

  constructor(size) {
    this.data = new Array(size); // Holds our data (values)
    this.keysArray = [];
    this.valuesArray = [];
  }

  // private method (semantic meaning in js community)
  // A hash function of Hash Table are always really really fast
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
    // The for-loop inside the hash function, is not considered as O(n) becuase it is so fast
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);  

    this.keysArray.push(key);
    this.valuesArray.push(value);
    return this.data;
    // O(1)
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    
    // If the currentBucket has a length of > 1, then it will be a linear search O(n), there is a collision
    // Else the length of the currentBucket is equal to 1, the it will be constant time search O(1), there is no collission
    if (currentBucket != undefined) {
      for (let i = 0; i < currentBucket.length; i++) {
        const currentKeyValuePair = currentBucket[i];
        if (currentKeyValuePair[0] === key) {
          return currentKeyValuePair[1];
        }
      }
    }

    // Average: O(1) - constant time
    // Worst: O(n) - linear time

  }

  // Returns all the keys in the hash table O(1)
  keys() {
    return this.keysArray;
  }

  // Returns all the values in the hash table O(1)
  values()  {
    return this.valuesArray;
  }

}

module.exports = HashTable;

// Conclusion:
// Hash Table data structure uses array as format of the data [[[key, value], [key, value]], [key, value], [key, value]]]
// It uses the index as the key, that is why it so fast to retrieve a specific value of the key
// Every Hash Table has their own hash function, that converts the input key into something
// Hash Table do have a limited amount of memory, it is not unlimited