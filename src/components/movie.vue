<template>
    <div>
        <img class = "ad" src= ..\assets\pic\ad.png> 
               
        <div class="movie">
            <div class ="logo_div">
                <img class = "logo" src= ..\assets\pic\tgv_logo.png><h> 영화, 그 이상의 감동!! TGV</h>
            
            </div>
            <div>
                <div>
                    <div class="box">
                        <img class = "thum" src= ..\assets\pic\hero.png><br>
                        <s3>영웅</s3>   
                        <div class='btn'>
                            <button @click="showAlert">09:00</button>
                            <button @click="showAlert">15:00</button>
                            <button @click="showAlert">21:00</button>
                        </div>
                    </div>
                    <div class="box">
                        <img class = "thum" src= "..\assets\pic\clemetain.png"><br>
                        <s3>클레멘타인</s3>
                        <div class='btn'>
                            <button v-on:click="showAlert">9:00</button>
                            <button v-on:click="showAlert">15:00</button>
                            <button v-on:click="showAlert">21:00</button>
                        </div>
                    </div>
                    <div class="box">
                        <img class = "thum" src= ..\assets\pic\sungnyang.png><br>
                        <s3>성냥팔이 소녀의 재림</s3>
                        <div class="btn">
                            <button v-on:click="showAlert">9:00</button>
                            <button v-on:click="showAlert">15:00</button>
                            <button v-on:click="showAlert">21:00</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <Alert v-if='showAlertFlag' :showAlertFlag.sync="showAlertFlag"/>
    </div>
</template>

<script>
import Alert from '../components/Dialog/Alert.vue'
export default {
  name: 'movie',
  props: [ 'msg' ],
  components: { Alert },

  data () {
    return {
        showAlertFlag: false,
        showbookFlag : false
    }
  },

  methods: {
    showAlert () {
        this.showAlertFlag = true
    }
  }
}
</script>

<style>


.ad{
    text-align: center;
    width: 100%;
    left: 50%;
    height: auto;
}

.logo{
    width: min-content;
    height: min-content;
    text-align: left;

}

.logo_div{
    left: 100%;
    height: min-content;

    font-family: this_is_font_name;
    font-size: 50px;
    font-weight: bolder;
    color: red;
    border: rgb(32, 29, 29);

    }

div{
    
    height: 600px;
    border: 1px solid #3458;
    background-color: cornsilk;
    
    }

.btn{
    background: none;
    border : 0;
    text-align:center; 
    margin-top:24px; 
    display:block;
    
}

h1{ 
    font-family: cursive;
    font-size: 60px;
    font-weight: bolder;
    color: red;
    border: rgb(32, 29, 29);
    width: fit-content;
    
    /* text-align: center; */
    background-color: rgb(216, 162, 144);
    }
    

.movie{
   display : grid;
   position: inherit;
   text-align: center;
}


.tk1{
    background-color: rgb(220, 142, 41);
    color: white;
    border:3px white solid;
    vertical-align: bottom;
}

.box {
    display: inline-block;
    text-align: center;
    font-size: 20px;
    font-style: unset;
    font-weight: bolder;
}
.box .thum {
    float: none;
    
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
    border : 3px solid white;
    width: 250px;
    height: 400px;
    border-radius: 1em;
    vertical-align: middle;
    
}

@font-face {
    font-family: 'this_is_font_name'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    
     font-weight: normal; 
     font-style: normal;  
}



</style>
