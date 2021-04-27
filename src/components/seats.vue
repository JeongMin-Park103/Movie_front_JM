<template>
    <div class = "seats">
        <div class = "seat_title">
            <h> 원하시는 좌석을 선택하세요. </h><br>
        </div>
        
        <div class = "screen">Screen</div>

        <div class = "seat_body">  

            
                <table class="show_seat">


                    <tr v-for='row in rows' :key='row'>
                        <td v-for='column in columns' :key='column'>
                        <button> {{String.fromCharCode(row + 64)}}-{{column}} </button>
                        </td>
                    </tr>
                </table>

        </div>
        <div class = "seat_tail">
            <div class = "seat_btn">
                <button @click="OK"> 확인  </button>          
                <button @click="cancel">취소</button>
            </div>
        </div>

        <book v-if='showbookFlag' :showbookFlag.sync="showbookFlag"/>
    </div>
</template>

<script>
// import book from '../components/book.vue'
export default {
    name: 'seats',
    props: [ 'showbookFlag' ],
    
      data () {
        return {
            rows: 12,
            columns: 13
            }
        },

    methods: {
        OK () {
            this.$router.push({ path: '/book' })
        },

        cancel () {
            this.$router.push({ path: '/#' })
        },

        // showbook(){
        //     this.showbookFlag = true
        // }
    }
}
</script>

<style>
    .screen{
        height: min-content;
        margin-left: 40%;
        width: 300px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
        
    }

    
    .seat_title{

        font-family: 'this_is_font_name';
        color : red;
        font-size: 40px;
        font-weight: bolder;
        margin-top: auto;
        margin-bottom: auto;
        text-align: center;
        background-color: lightblue;
        height: 40px;
        width: 600px;
        margin-left: 30%;
    }

    .seat_body{
        
        height: auto;
        text-align: center;
        /* align-items: center; */
        justify-content: center;
        display: flex;
        justify-content: center;
        align-items: center; 
        /* min-height: 100vh; */

    }

    .seat_tail{

        height: auto;
        width: 100%;

    }
    .seat_btn{
        margin: 30px;
        text-align: center;
        border: none;
        height: auto;
        
    }
    .show_seat{
        margin: 0 auto;
       text-align: center;
    }
</style>