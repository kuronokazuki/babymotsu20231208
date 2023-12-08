<template>
    <div :class="className">
        <Img :className="className" :fileName="`../img/${imgName}`"></Img>
    </div>
</template>

<script>
import Img from '../atoms/img.vue';

export default{
    components:{
        Img,
    },
    props: {
        imgName:{
            type:String,
            default:'gorira.png'
        },
        className:{
            type:String,
        }

    },

};
</script>

<style scoped>
    .circleSmall{
        width:60px;
        height:60px;
        border-radius: 50%;
    }
    .circleMedium{
        width:72px;
        height:72px;
        border-radius: 50%;
    }
</style>


