<template>
    <div v-if="tradingId === 1" class="tradingContainer">
        <tradingBase></tradingBase>
        <div>
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="購入者情報"></headerTextSub>
                </div>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="tradingId === 2" class="tradingContainer">
        <tradingBase :tradeId="2"></tradingBase>
        <div>
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="購入者情報"></headerTextSub>
                </div>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    
</template>

<script>
import tradingBase from '../moleclese/tradingBase.vue';
import profileLinkSmall from '../moleclese/profileLinkSmall.vue';
import tradingInformation from '../moleclese/tradingInformation.vue';
import headerTextSub from '../atoms/headerTextSub.vue';


export default{
components:{
    tradingBase,
    profileLinkSmall,
    tradingInformation,
    headerTextSub
},
data() {
    return {

    };
  },
methods: {

},
props:{
    tradingId:{
        type:Number,
        default:2,
    },
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


