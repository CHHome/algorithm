//注意点：javaScript函数都是按值传递的，不存在引用传递，所以在函数内部的只是copy版
let data = [10,80,6,95,8,6,2,88,66,4,3,0,5];
let strData='ab#c##def####'
let i = 0;
function node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
function BST(){
    this.root = null;
    this.insertNode = insertNode;
    this.readBSTree = readBSTree;
    this.createBST = createBST;
}

function insertNode(value) {
    if(this.root === null)
        this.root = new node(value);
    else{
        let p = this.root;
        let pre;
        while(p!==null){
            pre = p;
            if (value<p.value){
                p = p.left;
                if(p === null){
                    pre.left = new node(value);
                    break;
                }
            }
            else {
                p = p.right;
                if (p === null) {
                    pre.right = new node(value);
                    break;
                }
            }
        }
    }
}

//递归建立二叉树
function createBST() {
    let p ;
    if(strData[i] === '#'){
        p = null;
        i++;
    }
    else {
        p = new node(strData[i]);
        i++;
        p.left = createBST();
        p.right = createBST();
    }
    return p;
}

//中序遍历算法
function readBSTree(p) {
    if(p===null)
        return;
    readBSTree(p.left);
    console.log(p.value);
    readBSTree(p.right);
}

//建立排序二叉树
let bst  = new BST();
for(let item of data){
    bst.insertNode(item);
}
bst.readBSTree(bst.root);

//递归建立非排序二叉树
let bst2 = new BST();
bst2.root = bst2.createBST();
bst2.readBSTree(bst2.root);


