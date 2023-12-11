import tradingBuyerFirst from '../Components/organisms/tradingBuyerFirst.vue';
import tradingSeller from '../Components/organisms/tradingSeller.vue';
import tradingSellers from '../pages/tradingSeller.vue';

export default {
    title: 'trading',
}

export const tradings = () => ({
    components: { tradingBuyerFirst },
    template: '<tradingBuyerFirst />'
});

export const tradingseller = () => ({
    components: { tradingSeller },
    template: '<tradingSeller />'
});

export const tradingsellers = () => ({
    components: { tradingSellers },
    template: '<tradingSellers />'
});