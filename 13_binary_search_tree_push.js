//Binary Search Tree w/ push method.

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BST() {
  this.Root = null;
}

BST.prototype.push = function(value) {
  if(!this.Root) {
    this.Root = new Node(value)
  }
  var currentNode = this.Root;
  var newNode = new Node(value);

  if(value < currentNode.value) {
    if(!currentNode.left) {
      currentNode.left = newNode;
    }
    else {
      currentNode = currentNode.left;
    }
    if(value > currentNode.value) {
      if(!currentNode.right) {
        currentNode.right = currentNode;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }
}

var bst = new BST();
bst.push(55)
bst.push(42)
console.log(JSON.stringify(bst,null,10))
