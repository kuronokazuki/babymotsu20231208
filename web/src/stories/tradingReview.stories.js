import tradingReview from '../Components/moleclese/tradingReview.vue';

export default {
    title: 'trading',
    component: tradingReview,
}

export const tradingReviews = () => ({
    components: { tradingReview },
    template: '<tradingReview />'
});