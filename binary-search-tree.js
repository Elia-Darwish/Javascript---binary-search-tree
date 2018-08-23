





//Binary Search Tree
(function (global) {

    // tree inorder traversal --- recursively navigating the tree ( left child --> parent --> right child)
    let inOrder = function (obj, arr) {


        if (obj.left) {
            inOrder(obj.left, arr);
        }
        arr.push(obj.value);

        if (obj.right) {
            inOrder(obj.right, arr);
        }

    }


    // tree preorder traversal --- recursively navigating the tree ( parent --> left child --> right child)
    let preOrder = function (obj, arr) {

        arr.push(obj.value);

        if (obj.left) {
            preOrder(obj.left, arr);
        }

        if (obj.right) {
            preOrder(obj.right, arr);
        }

    }


    // tree Postorder traversal --- recursively navigating the tree ( left child --> right child --> parent)
    let postOrder = function (obj, arr) {


        if (obj.left) {
            postOrder(obj.left, arr);
        }

        if (obj.right) {
            postOrder(obj.right, arr);
        }

        arr.push(obj.value);

    }

    // the node object
    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }


    // adding insert, search and sort methods to the node object
    Node.prototype = {

        insert: function (value) {
            if (value > this.value) {

                if (!this.right) {
                    this.right = new Node(value);
                } else {
                    this.right.insert(value);
                }


            } else if (value < this.value) {

                if (!this.left) {
                    this.left = new Node(value);
                } else {
                    this.left.insert(value);
                }

            } else {
                return;
            }
        },


        hasValue: function (value) {

            if (value === this.value) {
                return true;
            } else {

                if (value > this.value) {
                    if (this.right) {
                        return this.right.hasValue(value);
                    } else {
                        return false;
                    }
                }

                if (value < this.value) {
                    if (this.left) {
                        return this.left.hasValue(value);
                    } else {
                        return false;
                    }
                }

            }

        },


        getInOrder: function () {
            let arr = [];
            inOrder(this, arr);
            return arr;
        },

        getPreOrder: function () {
            let arr = [];
            preOrder(this, arr);
            return arr;
        },

        getPostOrder: function () {
            let arr = [];
            postOrder(this, arr);
            return arr;
        }


    };


    global.Node = Node;



}(window));