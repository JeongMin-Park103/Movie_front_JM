<template>
    <div class = "book_div">
        <div class = "book_head">
            <p>예매 내역 조회</p>
        </div>
        <div class="book_body">
            
            <img class = "qr" src= ..\assets\pic\qrcode.png><br>
            <a3>영웅</a3><br>
            <a2>총인원 : 1명</a2><br>
            <a2>상영시간 : 09:00 ~ 10:10</a2><br>
            <a2>좌석정보 : 1관 G열 2번</a2><br>
            <a>일반(VAT: 1000원) (1명) [영화발전기금3% 부가세 포함]</a><br>
            <a>상영시간 이후, 교환 및 환불은 불가능합니다.</a><br>
            <a>관람에티켓을 위한 사전입장을 부탁드립니다.</a>
            <img class = "barcode" src= ..\assets\pic\barcode.png><br>

        </div>
        <div class="book_tail">
            <button class = "OK_btn" @click="OK"> 확인  </button> 
        </div>
    </div>
</template>

<script>
export default {

    
    methods: {
        OK () {
            this.$router.push({ path: '/#' })
        },
    }
}
</script>

<style>
.book_div{
    height: fit-content;
    width: 400px;
    margin-left: 35%;
    background-color: lightgray;
}

.h4{
    font-size: 60px;
}
.book_head{
    color: tomato;
    height: min-content;
    text-align: center;
    font-family: 'this_is_font_name';
    font-size: 35px;
    

}

.book_body{
    vertical-align: center;
    text-align: center;
    font-size: unset;
}

.book_tail{
    
    height: auto;
    text-align: center;
}

.OK_btn{
    font-size: 20px;
}   

.qr{
    width: 150px;
    height: 150px;
}

.barcode{
    width: 300px;
    height: 150px;
}

a3{

    margin-bottom: 10px;
    font-size: 50px;
    font-weight: bolder;
}

a2{

    font-size: 30px;
    font-weight: bolder;

}

a{
    font-size: 15px;

}
</style>