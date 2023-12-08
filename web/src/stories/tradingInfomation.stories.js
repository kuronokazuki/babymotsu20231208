import tradingInformation from '../Components/moleclese/tradingInformation.vue';

export default {
    title: 'trading',
    component: tradingInformation,
}

export const tradingInformations = () => ({
    components: { tradingInformation },
    template: '<tradingInformation />'
});