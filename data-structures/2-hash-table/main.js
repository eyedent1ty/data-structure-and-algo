const HashTable =  new require('./hash-table');
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);

myHashTable
  .values()
  .forEach(key => console.log(key));