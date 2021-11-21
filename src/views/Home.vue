<template>
  <div class="wrapper">
    <div class="card">
      <ProfilePhoto></ProfilePhoto>
      <OutLink></OutLink>
      <p class="sign" id="cn">你是第一 亦是唯一</p>
      <p class="sign" id="en">You are the first and the only</p>
    </div>
    <div class="image">
      <Directory id="work"></Directory>

    </div>
    <div class="msg">
      <msg id="inputbox"></msg>
    </div>
    <div class="icp">
      <a id="icp" href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021028736号-1</a>
    </div>
  </div>
</template>

<script>
import ProfilePhoto from '@/components/card/ProfilePhoto.vue'
import OutLink from '@/components/card/OutLink.vue'
import Directory from '@/components/directory/Directory.vue'
import msg from '@/components/directory/msg.vue'

export default {
  name: 'Home',
  data () {
    return {
      textarea2: ''
    }
  },
  components: {
    ProfilePhoto: ProfilePhoto,
    OutLink: OutLink,
    Directory: Directory,
    msg: msg
  }
}
</script>

<style scoped>

  .wrapper{
    display: grid;
    text-align: center;
    vertical-align: middle;
    grid-template-columns: 35% 65%;
    grid-template-rows: 70% 25% 5%;
    background:#e0e0e0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height:100%;
    width:100%;
    position:fixed;
  }
  .card{
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
    background-image:url('../assets/card.png');
    background-size:100% 100%;
  }

  .image{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    /* background:#e0e0e0; */
    /* background-size:100% 100%; */
  }

  .msg{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    padding-left: 20px;
    position: relative;
  }

  .icp{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    padding-left: 20px;
    bottom: 0;
  }

  .sign{
    position: relative;
    top: 15%;
  }

  #cn{
    margin-bottom: 0;
    margin-top: 10px;
  }

  #en{
      /* font-size: 20px; */
      margin-top: 0;
    }

  #work{
      position:fixed;
      margin-top:8%;
      width:65%;
      height: 100%;
    }

   #icp{
     position:relative; top:1.5em;
      vertical-align: bottom;
       display: inline-block;
       font-size:12px; padding:6px 0;
       color:#515151;
   }

</style>
