function  initLink() {
    let head={ };
    head.next = null;
    head.positionRight = true;
    head.insertNode = function(i,data){
        let p = this;
        let j = 1;
        while(p.next!==null&&j<i){
            p = p.next;
            j++;
        }
        if(j<i||i<0){
            console.log("位置错误");
            this.positionRight = false;
            return this;
        }
        if(i===0){
            this.data = data;
            return this;
        }
        let tempOb = {};
        let temp = p.next;
        tempOb.data = data;
        p.next = tempOb;
        tempOb.next = temp;
        return this;

    };
    head.print = function(){
        let p = this;
        if(this.positionRight){
            while(p!==null){
                process.stdout.write(String(p.data)+',');
                p = p.next;
            }
        }
        return this;
    };
    return head;
}

let head = initLink();
for(let i=0;i<10;i++){
    head.insertNode(i,i+1);
}
head.insertNode(10,8).print();