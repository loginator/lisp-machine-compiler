var Leaf = require('./leaf');
var TAG = require('./constants').TAG;

function AST(root) {
    this.lastId = 0;
    this.root = root || new Leaf(lastId, TAG.NIL, 0);
}

/**
 * @return array of Leafs
 */
AST.prototype.traverse() {
    var currentSubTree = this.root;
    var children = start.getChildren();
    for(c in children) {
        if(c.tag === TAG.PTR) {
            currentSubTree = c;
        }
    }
}
