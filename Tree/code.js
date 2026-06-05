// Tree Traversal 
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value
    }
}

function preOrder(root) {
    if (root !== null) {
        process.stdout.write(root.data + ' ')
        preOrder(root.left)
        preOrder(root.right)
    }
}
function inOrder(root) {
    if (root !== null) {
        inOrder(root.left)
        process.stdout.write(root.data + ' ')
        inOrder(root.right)
    }
}
function postOrder(root) {
    if (root !== null) {
        postOrder(root.left)
        postOrder(root.right)
        process.stdout.write(root.data + ' ')
    }
}

root = new Node(1)
root.left = new Node(3)
root.right = new Node(5)
root.left.left = new Node(2)
root.left.right = new Node(4)
root.right.right = new Node(8)
// preOrder(root)
// inOrder(root)
postOrder(root)