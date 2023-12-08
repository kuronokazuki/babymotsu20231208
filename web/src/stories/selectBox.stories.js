import selectBox from '../Components/atoms/selectBox.vue';

export default {
    title: 'input',
    component: selectBox,
}

export const selectBoxies = () => ({
    components: { selectBox },
    template: '<selectBox />'
});