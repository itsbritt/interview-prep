/**
 * 3 Cases:
 * 1. Node is leaf
 * 2. Node has 1 child
 * 3. Node has 2 children
 * 
 * 
 *
 * 
 * 
 */

/**
 * CASE 1 (Deleting Leaf Node)
 * Search for node (keeping track of previous):
 * Node will not have left or right
 * 
 * When we find the node, if it is prev.left, then set prev.left to null
 * If node is prev.right, set prev.right to null 
 */

/**
 * CASE 2 (Node has one child)
 * 
 * Search for node:
 * When we find it: find the child
 * 
 * Check if curr is prev.left or prev.right
 * Set prev.left to child or prev.right to child depending on curr
 * 
 * 
 * Case 3 (Node has two children)
 * 
 * Search for node
 * 
 * Find successor
 * Swap successor with current
 * Delete successor
 */

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
 * @param {BinaryTreeNode_int32} root
 * @param {list_int32} values_to_be_deleted
 * @return {BinaryTreeNode_int32}
 */
function delete_from_bst(root, values_to_be_deleted) {
    
    for (const val of values_to_be_deleted) {
        root = delete_from_tree(root, val);
    }
    
    return root;
    
    function delete_from_tree(root, val) {
        // Search for val in tree
        let prev = null;
        let cur = root;
        
        while (cur) {
            if (val === cur.value) {
                break;
            } else if (val < cur.value) {
                prev = cur;
                cur = cur.left;
            } else {
                prev = cur;
                cur = cur.right;
            }
        }
        
        // Now cur is pointed to node to be deleted or null
        
        if (!cur) {
            return root;
        }
    
        
        // Delete leaf
        if (!cur.left && !cur.right) {
            if (!prev) {
                // means we are deleting single node tree
                return null;
            }
            if (cur === prev.left) {
                prev.left = null;
                return root;
            }
            
            if (cur === prev.right) {
                prev.right = null;
                return root;
            }
        } else if (cur.left && cur.right) {
            let succ = cur.right;
            prev = cur;

            while (succ.left) {
                prev = succ;
                succ = succ.left;
            }

            cur.value = succ.value;
            
            if (succ.value === prev.left.value) {
                prev.left = succ.right;
            } else {
                prev.right = succ.right;
            }
    
            return root;
        } else {
            // Set child to be either left or right (there will only be one)
            let child = cur.left && !cur.right ? cur.left : cur.right;
            
            if (!prev) {
                root = child;
                return root;
            }
            
            if (cur === prev.left) {
                prev.left = child;
            } else {
                prev.right = child;
            }
    
            
            return root;
        }
        
        
    }

}