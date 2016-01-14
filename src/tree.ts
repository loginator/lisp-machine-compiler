export interface TreeNodeType {
    id: number,
    value: number,
    tag: number
}

class TreeNode implements TreeNodeType {
    id: number
    tag: number
    value: number

    constructor(id: number, tag: number, value: number) {
        this.id = id;
        this.tag = tag;
        this.value = value;
    }
}

class VirtualTreeNode extends TreeNode {
    children: TreeNode[]

    constructor(id: number, tag: number, value: number) {
        super(id, tag, value);
        this.children = [];
    }
}

class RealTreeNode extends TreeNode {
    constructor(id: number, tag: number, value: number) {
        super(id, tag, value);
    }
}
