Array.prototype.unip = function (){
    var temp = [];
    var flag = true;
    for(var i = 0; i<this.length; i++){
        if(temp.indexOf(this[i]) === -1){
            if(this[i]!=this[i]){
                    if(flag){
                        temp.push(this[i]);
                        flag = false;
                    }else{
                        this.splice(i,1);
                        i--;
                    }
            }else{
                temp.push(this[i]);
            }
        }else{
            this.splice(i,1);
            i--;
        }
    }
}
var arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
arr.unip()
console.log(arr)