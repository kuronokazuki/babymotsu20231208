import tradingReviewInput from '../Components/moleclese/tradingReviewInput.vue';

export default {
    title: 'trading',
    component: tradingReviewInput,
}

export const tradingReviewInputs = () => ({
    components: { tradingReviewInput },
    template: '<tradingReviewInput />'
});