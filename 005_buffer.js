const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1,2,3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('test','latin1');

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);
console.log(buf5);
console.log(buf6);

//写入buffer缓冲区
//buf.write(string[, offset[, length]][, encoding])
//返回写入的长度len

buf = Buffer.alloc(256);
len = buf.write("i am fine, thank you, and you?");
console.log("write:"+ len);

//从buffer中读出
//buf.toString([encoding[, start[, end]]])
const buf7 = Buffer.alloc(26);

for(var i = 0;i < 26; i ++){
    buf7[i] = i + 97;
}

console.log(buf7.toString('ascii'));
console.log(buf7.toString('ascii', 0, 5));
console.log(buf7.toString('utf8', 0, 5));
console.log(buf7.toString(undefined, 0, 5));

//转成JSON
//buf.toJSON()

const buf8 = Buffer.from(["google", "runoob", "taobao"]);
const json = JSON.stringify(buf8);

console.log(json);

//=== judge type and value
const copy = JSON.parse(json, (key, value) =>{
    return value && value.type === 'Buffer'?
        Buffer.from(value.data):value;
});

console.log(copy);


//合并
//Buffer.concat(list[, totalLength])

//比较
//buf.compare(otherBuffer)
//<0 ==0 >0

//拷贝
//buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])

//切片
//buf.slice([start[, end]])

//长度
//buf.length