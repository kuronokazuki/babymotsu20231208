import tradingBuy from '../Components/organisms/tradingBuy.vue';


export default {
    title: 'trading',
}

export const tradingBuys = () => ({
    components: { tradingBuy },
    template: '<tradingBuy />'
});