<template>
    <dashBoardHeader title="取引画面"></dashBoardHeader>
    <tradingBuyer :tradingId="transactionId"></tradingBuyer>
</template>

<script>
import tradingBuyer from '../Components/organisms/tradingBuyerFirst.vue';
import dashBoardHeader from '../Components/moleclese/dashBoardHeader.vue';

export default {
    name: 'CreateAcount',
    components: {
        tradingBuyer,
        dashBoardHeader
    },
    data() {
        return {
            buttonWidth: '330px',
            text: 'サインアップ',
            mainHeight: '699pt',
            textFormLabelBluegray: 'textFormLabelBluegray'
        }
    },
    data:{
        sessionId:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        tradingId:{
            type:String,
        }
    },
    methods(){
        const apiUrl = 'https://example.com/api/transactions/';
        const transactionId = 123; // 取引ID
        const sessionId = 'your-session-id'; // セッションID

        // 取引の状況を更新するためのデータ
        const updateData = {
            statusType: 'shipping',
        };

        // ヘッダーにセッションIDを追加
        const headers = {
            sessionId: sessionId,
        };

        // APIを呼び出す
        axios.patch(`${apiUrl}${transactionId}`, updateData, { headers })
        .then(response => {
            this.tradingId = response.statusType;
            console.log('API呼び出し成功:', response.status);
        })
        .catch(error => {
            console.error('API呼び出しエラー:', error.response.status, error.response.data);
        });
    }
  }
</script>
<style>
svg#コンポーネント_128_14 {
    margin-left: 122pt;
}
.loginInputForm{
    margin: 25pt 37pt;
    box-shadow: 0 8pt 15pt #E7EAF0;
}
.loginProcess{
    margin: 20pt 36pt;
}
.formConsentText {
    text-align: center;
}
</style>