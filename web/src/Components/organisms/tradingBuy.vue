<template>
    <profileImg className="circleMedium" fileName="gorira.png"></profileImg>
    <menuText level="level2Black" :label="shohinName"></menuText>
    <menuText level="level2Black" :label="shohinPrice"></menuText>
    <div class="containerTitle">
        <menuText v-for="(item,index) in listTitles" :key="index" level="level3Bold" :label="item"></menuText>
    </div>
    <div class="containerTitle">
        <menuText v-for="(item,index) in informationList" :key="index" level="level3" :label="item"></menuText>
    </div>
    <buttonRedLong data="購入する"></buttonRedLong>
</template>

<script>
import profileImg from '../moleclese/profileImg.vue';
import menuText from '../atoms/menuText.vue';
import buttonRedLong from '../atoms/ComponentButton/ButtonRedLong.vue';


export default{
components:{
    profileImg,
    menuText,
    buttonRedLong,
},
    data() {
            return{
                listTitles:["もつポイント残高","支払い方法","支払金額","配送先"]
            };
        },
methods: {

},
props:{
    tradingId:{
        type:Number,
        default:2,
    },
    informationList:{
        type:Array,
        default:() => (['P1,000','もつポイント払い',"P900","中野"]),
    }
}
};
</script>

<style scoped>

.tradingContainer{
    display: flex;
    flex-direction:column;
    align-items: center;
}

.tradingHeaderTextSub{
    margin-right: auto;

}


</style>


