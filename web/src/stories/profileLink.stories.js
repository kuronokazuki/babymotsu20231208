import profileLink from '../Components/moleclese/profileLinkSmall.vue';

export default {
    title: 'profileLink',
    component: profileLink,
}

export const profileLinkSmall = () => ({
    components: { profileLink },
    template: '<profileLink />'
});