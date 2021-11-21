<template>
 <el-carousel :interval="2000" type="card" height="45%" pause-on-hover=false indicator-position="none">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item.myimg" style="height:100%;width:100%;">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import Message from '@/components/directory/Message.vue'
export default {
  data () {
    return {
      imgList: [
        { myimg: require('../../assets/cat/1.jpg') },
        { myimg: require('../../assets/cat/2.jpg') },
        { myimg: require('../../assets/cat/3.jpg') },
        { myimg: require('../../assets/cat/4.jpg') },
        { myimg: require('../../assets/cat/5.jpg') },
        { myimg: require('../../assets/cat/6.jpg') },
        { myimg: require('../../assets/cat/7.jpg') },
        { myimg: require('../../assets/cat/8.jpg') },
        { myimg: require('../../assets/cat/9.jpg') },
        { myimg: require('../../assets/cat/10.jpg') },
        { myimg: require('../../assets/cat/11.jpg') },
        { myimg: require('../../assets/cat/12.jpg') },
        { myimg: require('../../assets/cat/13.jpg') },
        { myimg: require('../../assets/cat/14.jpg') },
        { myimg: require('../../assets/cat/15.jpg') },
        { myimg: require('../../assets/cat/16.jpg') },
        { myimg: require('../../assets/cat/17.jpg') },
        { myimg: require('../../assets/cat/18.jpg') },
        { myimg: require('../../assets/cat/19.jpg') },
        { myimg: require('../../assets/cat/20.jpg') },
        { myimg: require('../../assets/cat/21.jpg') }
      ]
    }
  }
}
</script>

<style scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>
