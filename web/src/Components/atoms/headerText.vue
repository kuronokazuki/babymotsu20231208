<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <h1 :class="level">{{ headerText }}</h1>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        },
        headerText:{
            type:String,
        }
    }
};
</script>


<style scoped>

.level1{
    font-size:26px;
    font-family:neusa-next-std,'游ゴシック Bold', sans-serif;
    font-style:"Bold";
    font-weight: 700;
    color:#444444;
    margin:0;
}

.level2{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#444444;
}

.level2Bold{
    font-size:17px;
    font-family:neusa-next-std,'游ゴシック Bold', sans-serif;
    font-weight: 700;
    font-style: Bold;
    color:#444444;
}

.level3{
    font-size:15px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#FF6969;
}
.level4{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#727C8E;
}

.level4Selected{
    font-size:13px;
    font-family:neusa-next-std,'游ゴシック Medium', sans-serif;
    font-weight: 400;
    font-style: normal;
    color:#FF6969;
}

</style>


