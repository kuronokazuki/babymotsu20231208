<template>
    <dashBoardHeader title="取引画面"></dashBoardHeader>
    <tradingSeller :tradingId="transactionId"></tradingSeller>
</template>

<script>
import tradingSeller from '../Components/organisms/tradingSeller.vue';
import dashBoardHeader from '../Components/moleclese/dashBoardHeader.vue';

export default {
    name: 'CreateAcount',
    components: {
        tradingSeller,
        dashBoardHeader
    },
    data() {
        return {
            transactionId: {
                type: String,
            }
        };
    }
}
</script>


<style>
svg#コンポーネント_128_14 {
    margin-left: 122pt;
}

.loginInputForm {
    margin: 25pt 37pt;
    box-shadow: 0 8pt 15pt #E7EAF0;
}

.loginProcess {
    margin: 20pt 36pt;
}

.formConsentText {
    text-align: center;
}</style>
