//import {MAX_CHILDREN, TAG} from './constants';
var MAX_CHILDREN = require('./constants').MAX_CHILDREN;
var TAG = require('./constants').TAG;

/**
 * Invariant: Nil leafs cannot have children
 * Invariant: Ids must be individual
 * Invariant: Nil leaf must have value 0
 */

// export class Leaf {
//     constructor(id, tag, value) {
//         this.id = id;
//         this.value = value;
//         this.tag = tag;
//         this.children = [Leaf.defaultLeaf(id+1), Leaf.defaultLeaf(id+2), Leaf.defaultLeaf(id+3)];
//     }
//
//     addChild(c) {
//         const freeChildren = this.children.filter((e,i) => {
//             e.tag === TAG.NIL;
//         });
//         if(freeChildren.length > 0) {
//             freeChildren[0] = c;
//         }
//         else {
//             throw new Error('[Leaf ${this.id}] No free children!');
//         }
//     }
//
//     static defaultLeaf(id) {
//         return Leaf(id, TAG.NIL, 0);
//     }
//
// }
function defaultLeaf(id) {
    return new Leaf(id, TAG.NIL, 0);
}

function Leaf(id, tag, value) {
    this.id = id;
    this.value = value;
    this.tag = tag;
    this.children = [];
}

Leaf.prototype.getChildren = function() {
    var formattedChilds = this.children;
    if(formattedChilds.length < MAX_CHILDREN) {
        for(var i=formattedChilds.length; i < MAX_CHILDREN; i++) {
            formattedChilds.push(defaultLeaf(i+1));
        }
    }

    return formattedChilds;
}

Leaf.prototype.addChild = function(c) {
    var freeChildren = this.getChildren().filter(function(e, i) {
        return e.tag === TAG.NIL;
    });

    if(freeChildren.length > 0 && this.tag === tag.PTR) {    
        freeChildren[0] = c;
    }
    else {
        throw new Error('[Leaf' + this.id + '] No free children!');
    }
}

Leaf.prototype.containsInnerPointer = function() {
    for(c in this.children) {
        if(c.tag === TAG.PTR) {
            return true
        }
    }
    return false;
}

module.exports = Leaf;
