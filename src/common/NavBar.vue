<template>
  <div>
    <!--// 这里可以加个div 也可以不加 因为elemnt 有-->
    <!--ui-->
    <div class='pNavbar'>
      <el-row class="navbar">
        <el-col :span="24" >
          <div class="grid-content bg-purple-dark text-right">官方电话:400-063-0008</div>
        </el-col>
      </el-row>
    </div>
    <div class="navbar inLogo clearfix">
      <div class="logoIn">
        <div class="fl">
          <a href="#" class="logo">先艺艺术教育</a>
        </div>
      </div>

      <!--宗旨部分-->
      <div class="purpose">
        <ul class="purposeUi fr">
          <li>先修己</li>
          <li>艺为大</li>
          <li>教专注</li>
          <li>育一生</li>
        </ul>
      </div>
    </div>
    <div class="navbar">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ffd04b">
        <el-menu-item index="1" @click="$router.push('/abc')">关于先艺</el-menu-item>
        <el-menu-item index="2" @click="$router.push('/abc')">师资力量</el-menu-item>
        <el-menu-item index="3" @click="$router.push('/newMusic')">新音乐素养</el-menu-item>
        <el-menu-item index="4" @click="$router.push('/courses')">课程介绍</el-menu-item>
        <el-menu-item index="5" @click="$router.push('/abc')">学员风采</el-menu-item>
        <el-menu-item index="6" @clickF="$router.push('/abc')">视频专栏</el-menu-item>
        <el-menu-item index="7" @click="$router.push('/abc')">先艺动态</el-menu-item>
        <el-menu-item index="8" @click="$router.push('/abc')">少儿艺术团</el-menu-item>
      </el-menu>
    </div>


    </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .pNavbar {
    width: 100%;
    height: 30px;
    background-color: #EBEBEB;
    line-height: 30px;
  }
 .inLogo {
   height: 112px;
 }
  .logo {
    width: 131px;
    height: 85px;
    float: left;
    background: url('../assets/logo.png') no-repeat;
    text-indent: -9999px
  }


  .purposeUi {
    height: 33px;
    border: 1px dashed #FFBF24;
    border-radius: 20px;
    margin-top: 60px;
    padding-right:24px;
  }

  .purposeUi li {
    float: left;
    line-height: 33px;
    padding-left: 24px;
    color: #FFBF24;
  }

  .head_h {
    height: 50px;
    padding: 20px 0;
  }
</style>
