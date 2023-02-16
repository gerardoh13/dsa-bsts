class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = node;
          return this;
        } else curr = curr.left;
      } else if (val > curr.val) {
        if (!curr.right) {
          curr.right = node;
          return this;
        } else curr = curr.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {}

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return curr;
      if (val < curr.val) {
        if (!curr.left) {
          return;
        } else curr = curr.left;
      } else if (val > curr.val) {
        if (!curr.right) {
          return;
        } else curr = curr.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;
    function recursion(node) {
      if (val === node.val) return node;
      else if (val < node.val) {
        if (!node.left) return;
        else return recursion(node.left);
      } else if (val > node.val) {
        if (!node.right) return;
        else return recursion(node.right);
      }
    }
    return recursion(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    function recursion(node) {
      arr.push(node.val);
      if (node.left) recursion(node.left);
      if (node.right) recursion(node.right);
    }
    recursion(this.root);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    function recursion(node) {
      if (node.left) recursion(node.left);
      arr.push(node.val);
      if (node.right) recursion(node.right);
    }
    recursion(this.root);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    function recursion(node) {
      if (node.left) recursion(node.left);
      if (node.right) recursion(node.right);
      arr.push(node.val);
    }
    recursion(this.root);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let arr = [];
    let toVisitStack = [this.root];

    if (!toVisitStack[0]) return 0;

    while (toVisitStack.length) {
      let curr = toVisitStack.shift();
      arr.push(curr.val);
      for (let child of [curr.left, curr.right]) {
        if (child) toVisitStack.push(child);
      }
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    // if (!this.root || this.root.val === val) return;
    // let curr = this.root;
    // let parent;
    // while (val !== curr.val) {
    //   parent = curr;
    //   if (val < curr.val) {
    //     if (!curr.left) {
    //       return;
    //     } else curr = curr.left;
    //   } else if (val > curr.val) {
    //     if (!curr.right) {
    //       return;
    //     } else curr = curr.right;
    //   }
    // }
    // if (!curr.left && !curr.right) {
    //   if (parent.left === curr) parent.left = null;
    //   else parent.right = null;
    // }
    let arr = [];
    function recursion(node) {
      if (node.left) recursion(node.left);
      if (node.right) recursion(node.right);
      arr.push(node.val);
    }
    recursion(this.root);
    return arr;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    if (!this.root) return true;

    function maxDepth(node) {
      if (!node) return 0;
      return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
    }
    function minDepth(node) {
      if (!node) return 0;
      return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
    }
    return maxDepth(this.root) - minDepth(this.root) <= 1;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if (!this.root) return;
    let max;
    let second;
    let curr = this.root;
    while (curr) {
      if (!max && !second) max = curr.val;
      else {
        second = max;
        max = curr.val;
      }
      curr = curr.right;
    }
    return second ? second : undefined;
  }

  dfsInOrderIteratively() {
    let curr = this.root;
    let stack = [];
    let res = [];
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
    return res;
  }
}

module.exports = BinarySearchTree;
