var fs = require("fs");

var data = "miaomiaomiao\nwangwangwang"

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,"UTF8");

writerStream.end();

writerStream.on("finish",function(){
    console.log("write all");
});

writerStream.on('error', function(err){
    console.log(err.stack);
})

console.log("finish!");