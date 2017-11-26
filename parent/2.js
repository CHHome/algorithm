function namespace(oNamespace, sPackage) {
    var arr = sPackage.split('.');
    var i = 0;
    function func(key) {
        // console.log(key,arr[i],Object.keys(key).indexOf(arr[i]))
        if(Object.keys(key).indexOf(arr[i])!==-1){
            if(!(key[arr[i]] instanceof Object)){
                key[arr[i]] = {};
            }
        }else
            key[arr[i]] = {};
        i++;
        if(i<arr.length)
            func(key[arr[i-1]]);
    }
    func(oNamespace);

}
fff = {a: {test: 1, b: 2}};
namespace(fff, 'a.b.c.d');
console.log(fff.a.b.c)
