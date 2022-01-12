const express = require('express');
const app = express();


/*
형식
app.get('경로', function(요청,응답){
    응답.send('이동했습니다.');

   
    //8081port로 웹서버를 열고 잘 열리면 listening on 8081을 출력하세요
});*/
 app.listen(8081, function(){//8081 port에 서버 띄워주세요 바꿔도됨
    console.log('listening on 8081')});


//보통 요청 응답은 req, res로 표현

/*예제
app.get('/write', function(요청,응답){
    응답.send('글쓰기 페이지입니다..')
});
*/
app.use(express.static('public'));

app.get('/', function(요청, 응답){
    //file에 연결 
    응답.sendFile(__dirname + '/index.html')
});
