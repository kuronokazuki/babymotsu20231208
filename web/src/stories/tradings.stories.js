import tradingBuyerFirst from '../Components/organisms/tradingBuyerFirst.vue';

export default {
    title: 'trading',
    component: tradingBuyerFirst,
}

export const tradings = () => ({
    components: { tradingBuyerFirst },
    template: '<tradingBuyerFirst />'
});