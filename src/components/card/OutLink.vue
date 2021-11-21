<template>
    <el-button type="info" class="el-icon-aliweixin1"  size="mini" circle @click="getPreview"></el-button>
    <el-button type="info" class="el-icon-alicsdn1"  size="mini" circle @click="gourl('http://blog.csdn.net/lc_buzhidao')"></el-button>
    <el-button type="info" class="el-icon-alielementor"  size="mini" circle @click="gourl('http://element-plus.gitee.io/zh-CN/')"></el-button>
    <el-button type="info" class="el-icon-aligithub-fill"  size="mini" circle @click="gourl('http://github.com/linchao001')"></el-button>
    <el-button type="info" class="el-icon-alivue"  size="mini" circle @click="gourl('http://v3.cn.vuejs.org/')"></el-button>
    <el-button type="info" class="el-icon-alicanva"  size="mini" circle @click="gourl('http://www.canva.cn/')"></el-button>

    <el-image-viewer hide-on-click-modal v-if="showViewer" @close="showViewerClose" :url-list="[guidePic]"></el-image-viewer>

</template>

<script>
import weixin from '../../assets/qrcode.jpg'
import { ElMessage } from 'element-plus'
export default {
  name: 'OutLink',
  data () {
    return {
      showViewer: false,
      guidePic: weixin // 预览图片的地址
    }
  },
  methods: {
    gourl (url) {
      window.open(url)
    },
    showViewerClose () {
      this.showViewer = false
    },
    showTips () {
      ElMessage({
        message: '现在没有微信',
        duration: 2000,
        type: 'error'
      })
    },
    getPreview () {
      this.guidePic ? this.showViewer = true : this.showTips()
    }
  }

}
</script>

<style>
  .el-icon-alivue, .el-icon-alicsdn1, .el-icon-aliweixin1,
  .el-icon-alielementor, .el-icon-aligithub-fill, .el-icon-alicanva{
    position: relative;
    top: 15%;
  }
</style>
