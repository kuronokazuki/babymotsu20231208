<template>
    <div class="tradingInfomationContainer">
        <div class="containerTitle">
            <menuText v-for="(item,index) in listTitles" :key="index" level="level3Bold" :label="item"></menuText>
        </div>
        <div class="containerTitle">
            <menuText v-for="(item,index) in informationList" :key="index" level="level3" :label="item"></menuText>
        </div>
    </div>
</template>

<script>
import menuText from './../atoms/menuText.vue';
import Img from './../atoms/img.vue';

export default{
    components:{
        menuText,
        Img,
    },
    data() {
            return{
                listTitles:["商品代金","もつポイント利用","送料","購入日時","商品ID"]
            };
        },
    props: {
        informationList:{
            type:Array,
            default:() => (['￥1,000','P1,000','送料込み(出品者負担)',"2021年10月11日10:00","m11111111"]),
        }
    },
};
</script>

<style scoped>
    .tradingInfomationContainer{
        display: flex;
        width: 293px;
    }
    .containerTitle{
        display: flex;
        flex-direction:column;
        gap:17px;
        width:100%;
    }

</style>


