<template>
    <div v-if="tradingId === 1" class="tradingContainer">
        <tradingBase :tradeId="1" :trader="seller"></tradingBase>
        <div>
            <div class="tradingInformation">
                <buttonRedLong :propText="tradingButtonText"></buttonRedLong>
                <buyerInformation></buyerInformation>
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="出品者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="商品情報"></headerTextSub>
                </div>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="tradingId === 2" class="tradingContainer">
        <tradingBase :tradeId="2"></tradingBase>
        <div>
            <buyerInformation></buyerInformation>
            <div class="tradingInformation">
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                        <headerTextSub level="level1Bold" text="商品情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
                <tradingInformation></tradingInformation>
            </div>
        </div>
    </div>

    <div v-else-if="tradingId === 3" class="tradingContainer">
        <tradingBase :tradeId="3"></tradingBase>
        <div>
            <tradingEvaluation></tradingEvaluation>
            <headerTextSub level="level3" text="商品の評価コメントを更新しましょう！"></headerTextSub>
            <tradingReviewInput></tradingReviewInput>
            <buttonRedLong :propText="propText"></buttonRedLong>
        </div>
    </div>

    <div v-else-if="tradingId === 4" class="tradingContainer">
        <tradingBase :tradeId="4"></tradingBase>
        <div>
            <tradingReview></tradingReview>
            <div class="tradingInformation">
                <div class="tradingHeaderTextSub">
                    <headerTextSub level="level1Bold" text="購入者情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <div class="tradingInformation">
                <div class="tradingHeadevscode-file://vscode-app/c:/Users/owner/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlrTextSub">
                    <headerTextSub level="level1Bold" text="商品情報"></headerTextSub>
                </div>
                <profileLinkSmall></profileLinkSmall>
            </div>
            <tradingInformation></tradingInformation>
        </div>
    </div>
    
</template>

<script>
import tradingBase from '../moleclese/tradingBase.vue';
import profileLinkSmall from '../moleclese/profileLinkSmall.vue';
import tradingInformation from '../moleclese/tradingInformation.vue';
import headerTextSub from '../atoms/headerTextSub.vue';
import buttonRedLong from '../atoms/ComponentButton/ButtonRedLong.vue';
import tradingReview from '../moleclese/tradingReview.vue';
import selectBox from '../atoms/selectBox.vue';
import tradingReviewInput from '../moleclese/tradingReviewInput.vue';
import buyerInformation from '../moleclese/buyerInformation.vue';
import tradingEvaluation from '../moleclese/tradingEvaluation.vue';

export default{
components:{
    tradingBase,
    profileLinkSmall,
    tradingInformation,
    headerTextSub,
    buttonRedLong,
    tradingReview,
    selectBox,
    tradingReviewInput,
    buyerInformation,
    tradingEvaluation,
},
data() {
    return {
        buttonText:
                    [
                    {id:1,text:"発送を通知する"},
                    {id:2,text:"商品を受け取りましょう。"},
                    {id:3,text:"評価しましょう。"},
                    {id:4,text:"取引が完了しました。"},
                ],
        propText:"評価を更新する",
    };
  },
methods: {

},
props:{
    tradingId:{
        type:Number,
        default:4,
    },
},
computed: {
    tradingButtonText() {
    const tradingStatus = this.buttonText.find((item) => item.id === this.tradingId);
    return tradingStatus ? tradingStatus.text : ' ';
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


