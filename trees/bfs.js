/**
 * Level Order Traversal
 */

function level_order_traversal(root) {

    const queue = [root];
    const output = [];

    while (queue.length) {
        const level = queue.map(node => node.value);
        output.push(level);
        let i = 0;
        let levelLength = level.length;
        while (i < levelLength) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            i++;
        }
    }

    return output;
}