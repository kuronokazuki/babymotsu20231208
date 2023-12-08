import checkInput from '../Components/atoms/inputCheckbox.vue';
/* コンポーネントの設定 */
export default {
    title: 'Input',
    component: checkInput,
};

/* story記述 */
export const check = () => ({
    components: { checkInput },
    template: '<checkInput checkBoxLevel="checkBoxGray" />'
});