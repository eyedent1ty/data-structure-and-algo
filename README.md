## General Info
This repository is all about the data structures and algorithms that are mostly used in coding interview.

## Technologies
Project is created with:
* Javascript

## Data Structures
* ### Array
  a data structure that consists collection of elements.
  There are two types of array: Static and Dynamic.
  In static array, the length of the array is fixed.
  On the other hand, in the dynamic array the length of the array is automatically adjusted by the computer if there is a new element added. Usually computer double up     the size of the array. (More memory cost)
  
  #### Time complexity of static and dynamic array
  ##### Static
  * lookup - O(1)
  * push - O(1)
  * insert - O(n)
  * delete - O(n)
  #### Dynamic
  * lookup - O(1)
  * push - O(1) ** can be O(n) on expanding memory 
  * insert - O(n)
  * delete - O(n)

* ### Hash Table
  a data structure which stores data in an associative manner. Insertion and search operations are very fast irrespective of the size of the data.
  Dictionary in Python, Object in JavaScript and HashMap in Java are examples of Hash Table. Insertion, access, search and deletion are so fast because the value are     stored in array format. They key will be converted into one of the index of the array.
  
  #### Main problem with hash table
    Collision - it occurs when more than one value hashed to the same slot in the data structure.
    There are many solution to solve collision, one of the way is separate chaining.
  
  #### Time complexity of Hash Table
  * Insert - O(1) ** O(n)
  * lookup - O(1) ** O(n)
  * delete - O(1) ** O(n)
  * search - O(1) ** O(n)
  
  ** The operations will take O(n) if there are collision.

* ### Linked List
  a sequence of data which are connected together via links.
  sequence of links which contains items, it is a linear type of data structure. Linked List is NULL terminated data structure.
  
  #### Time complexity of Linked List
  * prepend - O(1)
  * append - O(1)
  * lookup - O(n)
  * insert - O(n)
  * delete - O(n)

* ### Stack
  a data structure that is LIFO (Last In First Out).
  Elements are stored vertically and you can only access the last element.
  In order to access the other elements, you must start popping the element at the top.

  Stack can be implemented using linked list and array.

  #### Time complexity of Linked List
  * lookup - O(n)
  * pop - O(1)
  * push - O(1)
  * peek - O(1)

* ### Queue
  a data structure that is FIFO (First In First Out).
  You can only access the first element in this data structure.
  In order to access the other elements, you must pop the first element.

  DO NOT implement queue using array, because if you remove the first element at the array,
  all elements will be shifted in very inefficient way O(n).

  #### Time complexity of Linked List
  * lookup - O(n)
  * dequeue - O(1) - remove the first element
  * enqueue - O(1) - add a new element at the end
  * peek - O(1)

  ### Main difference between Stacks and Queues
  Stacks - Last In First Out (LIFO)

  Queues - First In First Out (FIFO)

  ### PROS of Stacks and Queues
  * Fast Operations
  * Fast Peek
  * Ordered

  ### CONS of Stacks and Queues
  * Slow lookup
  
