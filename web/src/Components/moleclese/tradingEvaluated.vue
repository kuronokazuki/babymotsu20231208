<template>
    <div class="tradingEvaluatedContainer">
      <div v-for="index in 5" :key="index" class="containerTitle">
        <Img className="evaluationStarLevel2" fileName="star.svg" v-if="amount >= index"></Img>
        <Img className="evaluationStarLevel2" fileName="starFalse.svg" v-else></Img>
      </div>
    </div>
  </template>
  
  <script>
  import Img from './../atoms/img.vue';
  
  export default {
    components: {
      Img,
    },
    props: {
        amount:{
            type:Number,
            default:4,
        }
    },
  };
  </script>
  
  <style scoped>
  .tradingEvaluatedContainer {
    display: flex;
    gap: 1.75px;
  }
  </style>
  