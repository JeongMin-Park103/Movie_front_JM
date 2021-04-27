<template>
    <div class='layer'>
        <div>
        <div class='box1'>
            
            <div class="input_box">  
                <h2>핸드폰 번호를 입력해주세요.</h2>
                <h>ex) 010-1234-4567 </h><br>
                <input v-model="phone_1" placeholder="010" class="input" maxlength="3">
                <input v-model="phone_2" placeholder="1234" class="input" maxlength="4">
                <input v-model="phone_3" placeholder="5678" class="input" maxlength="4"><br>
               
                <button @click="OK"> 확인  </button>          
                <button @click="cancel">취소</button>
            </div>
    

        </div>
        <div id='dim'/>
    </div>
    </div>
</template>

<script>
// import movie from '../components/movie.vue'
export default {
    name: 'Alert',
    props: [ 'showAlertFlag' ],
    // components: {movie},
    methods: {
        OK () {
            this.$router.push({ path: '/seats' })
        },
        cancel () {
            this.$emit('update:showAlertFlag', false)
        }
    },
        showbook(){
            this.showbookFlag = true
        }
}
</script>

<style>
.box1 {
    width: 30%;
    height: 150px;
    position: absolute;
    top: 60%;
    left: 32%;
    background: #FFFFFF;
    z-index: 10000;
    border-radius: 9px;
    padding: 10px;
    text-align: center;

}

.input_box{

    height: inherit;

}

.input{

    text-align: center;
    width: 70px;
}
#dim {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    position: fixed;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 9999;
}
</style>