
/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {list_int32} values
 * @return {BinaryTreeNode_int32}
 */
function build_a_bst(values) {
    let root = null;
    for(const value of values) {
        root = insert(root, value);
    }
    
    return root;
}

function insert(root, value) {
    const newNode = new BinaryTreeNode(value);
    if (root === null) {
        return newNode;
    }
    
    let prev = null;
    let curr = root;
    
    while(curr !== null) {
        if(curr.value === value) {
            return root;
        } else if (curr.value > value) {
            prev = curr;
            curr = curr.left;
        } else {
            prev = curr;
            curr = curr.right
        }
    }
    
    if (prev.value < value) {
        prev.right = newNode;
    } else {
        prev.left = newNode;
    }
    
    return root;
}