var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreeNode = (function () {
    function TreeNode(id, tag, value) {
        this.id = id;
        this.tag = tag;
        this.value = value;
    }
    return TreeNode;
})();
var VirtualTreeNode = (function (_super) {
    __extends(VirtualTreeNode, _super);
    function VirtualTreeNode(id, tag, value) {
        _super.call(this, id, tag, value);
        this.children = [];
    }
    return VirtualTreeNode;
})(TreeNode);
var RealTreeNode = (function (_super) {
    __extends(RealTreeNode, _super);
    function RealTreeNode(id, tag, value) {
        _super.call(this, id, tag, value);
    }
    return RealTreeNode;
})(TreeNode);
