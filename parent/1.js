function commonParentNode(oNode1, oNode2) {
    var firstParent = [];
    var parents1 = oNode1;
    var parents2 = oNode2;
    while(parents1){
        firstParent.push(parents1);
        parents1 = parents1.parentElement;
    }
    while(parents2){
        for(var i = 0;i<firstParent.length;i++){
            if(parents2 ===firstParent[i])
                return parents2;
        }
        parents2 = parents2.parentElement;
    }
}

var result = commonParentNode(document.getElementById('first'),document.getElementById('second'));
console.log(result);