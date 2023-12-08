import buyerInformation from '../Components/moleclese/buyerInformation.vue';

export default {
    title: 'trading',
    component: buyerInformation,
}

export const buyerInformations = () => ({
    components: { buyerInformation },
    template: '<buyerInformation />'
});

