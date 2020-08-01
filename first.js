const { doesNotReject } = require("assert")

 repeater=function(para){
    for(var i=0;i<para;i++){
        console.log(i);
    }
}
repeater(5);