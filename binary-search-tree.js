





//Binary Search Tree


function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}



Node.prototype.insert = function (value) {
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
}



Node.prototype.hasValue = function (value) {

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

}



let inOrder = function (obj, arr) {


    if (obj.left) {
        inOrder(obj.left, arr);
    }
    arr.push(obj.value);

    if (obj.right) {
        inOrder(obj.right, arr);
    }

}


Node.prototype.getInOrder = function () {
    let arr = [];
    inOrder(this, arr);
    return arr;
}






// let BST = new Node(20);

// BST.insert(17);
// BST.insert(2);
// BST.insert(34);
// BST.insert(19);
// BST.insert(12);
// BST.insert(45);
// BST.insert(22);
// BST.insert(15);
// BST.insert(6);
// BST.insert(28);
// BST.insert(50);
// BST.insert(1);
// BST.insert(12);


// console.log(BST);
// console.log(BST.inOrderGet());
// console.log(BST.hasValue(34));