<template>
  <el-form>
   <el-form-item id="input">
       <el-input
          v-model="text"
          :autosize="{ minRows: 8, maxRows: 8 }"
          maxlength="1000"
          show-word-limit
          type="textarea"
          placeholder="留言是匿名的,可以随便说点什么......
  注意不要泄露电话,微信等隐私......"
        >
        </el-input>
    </el-form-item>

    <el-form-item id="btn">
      <el-button id="see" type="info" round @click="see">查看留言</el-button>
      <el-button id="write" type="info" round @click="writemsg" :disabled="text.trim()">提交留言</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'msg',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    writemsg () {
      const data = { msg: this.text }
      this.axios.post('/api/msg/1/', data)
      this.see()
    // .then(res => {
      //   console.log('res=>', res)
      // })
    },
    see () {
      this.$router.push(
        {
          path: '/seemsg',
          name: 'seemsg'
        })
    }
  }
}
</script>

<style scoped>
 #input{
    width: 70%;
  }

  #btn{
    position: relative;
  }

 #btn, #input{
    float: left;
  }

  #write{
    display: block;
    margin-left: 50%;
    margin-top: 30px;
  }
  #see{
    display: block;
    margin-left: 50%;
    margin-top: 40px;
  }

</style>
