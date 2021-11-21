<template>
    <el-avatar class="photo"
    shape="circle"
    :size="110"
    :src="myurl"
    alt="头像"
    >
    </el-avatar>
    <h1 class="name" id="cn_name">林超的云猫空间</h1>
    <h2 class="name" id="en_name">LinChao's cat house</h2>
</template>
<script>
import { reactive, toRefs } from 'vue'
import imgUrl from '../../assets/head.png'

export default ({
  setup () {
    const state = reactive({
      myurl: imgUrl
    })

    return {
      ...toRefs(state)
    }
  }
  // name: 'ProfilePhoto'
})
</script>

<style>
  .photo{
    position: relative;
    top: 15%;

  }

  .name{
    position: relative;
    top: 15%;
    /* margin:0; */
  }

  #cn_name{
    margin-bottom: 0;
    margin-top: 10px;
  }

  #en_name{
      font-size: 20px;
      margin-top: 0;
    }
</style>
