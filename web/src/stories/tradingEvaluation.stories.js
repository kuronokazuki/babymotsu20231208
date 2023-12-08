import tradingEvaluation from '../Components/moleclese/tradingEvaluation.vue';

export default {
    title: 'trading',
    component: tradingEvaluation,
};

export const tradingEvaluations = () => ({
    components: { tradingEvaluation },
    template: '<tradingEvaluation />'
});