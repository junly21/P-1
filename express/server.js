const express = require('express');
const app = express();

app.listen(8080, function(){//8080 port에 서버 띄워주세요 바꿔도됨
    console.log('listening on 8080')
    //8080port로 웹서버를 열고 잘 열리면 listening on 8080을 출력하세요
});

app.get('/', function(요청, 응답){
    //file에 연결 
    응답.sendFile(__dirname + '/index.html')
});