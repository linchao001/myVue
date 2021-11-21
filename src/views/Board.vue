<template>
  <div class="infinite-list-wrapper">
      <el-affix :offset="20">
          <el-button @click="go_home" type="info" :icon="HomeFilled">回到主页</el-button>
      </el-affix>
      <ul
        v-infinite-scroll="load"
        class="list"
        style="overflow: auto"
      >

        <li v-for="(msg, index) in msglist" :key="index" class="list-item">
          <el-timeline>
              <el-timeline-item :timestamp="msg.time"
               placement="top" size="large"  type="info" :icon="MoreFilled">
                      <el-card class="card">
                        <h4 id="a_msg">{{msg.msg}}</h4>
                      </el-card>
              </el-timeline-item>
          </el-timeline>
        </li>

      </ul>
  </div>
</template>

<script>

import { MoreFilled, HomeFilled } from '@element-plus/icons'

export default {
  name: 'Board',
  data () {
    return {
      MoreFilled: MoreFilled,
      HomeFilled: HomeFilled,
      count: 0,
      msglist: []
    }
  },
  // created () {
  //   this.getMsglist()
  // },
  methods: {
    load () {
      this.count = this.count + 1
      this.getMsglist()
    },
    go_home () {
      this.$router.push({
        path: '/',
        name: 'Home'
      })
    },
    getMsglist () {
      this.axios.get('/api/msg/'.concat(this.count)).then((response) => {
        this.msglist = this.msglist.concat(response.data)
      })
    }
  }
}
</script>

<style scoped="scoped">
  .infinite-list-wrapper {
    height: 100%;
    text-align: -webkit-left;
    background:#e0e0e0;
  }

  .list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .list-item {
    height: 200px;
    width: 60%;
    margin: 0 auto;
    margin-top: 40px;
  }

  .card{
    height: 150px;
  }
</style>
