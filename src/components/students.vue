<template>
      <div>
        <NavBar></NavBar>
        <img style="width: 100%;" src="../assets/158454104554671011.png" alt="">

<!--上一块儿中间的-->
<div class="navbar publicstudentOne">
  <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher">
    明星教师 / <span>TEACHER&nbsp;DISPLAY</span>
  </div>
        <el-row :gutter="20" class='studentOne'>

          <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
            <img src="../assets/137620622802752982.png" alt="">
            <p>“梦想起航，为梦而生”海选</p>
          </div></el-col>


          <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
            <img src="../assets/477083783053844499.png" alt="">
            <p>“梦想起航，为梦而生”海选</p>
          </div></el-col>

          <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
            <img src="../assets/603042672820354578.png" alt="">
            <p>“梦想起航，为梦而生”海选</p>
          </div></el-col>

        </el-row>


        <el-row :gutter="20" class='studentOne'>
          <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
            <img src="../assets/751171225170913868.png" alt="">
            <p>“梦想起航，为梦而生”海选</p>
          </div></el-col>

          <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
            <img src="../assets/889680125680028534.png" alt="">
            <p>“梦想起航，为梦而生”海选</p>
          </div></el-col>

          <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
            <img src="../assets/503563153115475727.png" alt="">
            <p>“梦想起航，为梦而生”海选</p>
          </div></el-col>

        </el-row>
</div>





        <!--横图-->
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple">哒哒哒哒哒哒付付付付付付付付付付付吧



          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light">哒哒哒哒哒哒付付付付付付付付付付付吧哒哒哒哒哒哒付付付付付付付付付付付吧</div></el-col>
        </el-row>

        <!--下一块6图的-->
        <div class="navbar publicstudentOne">
          <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher">
            明星教师 / <span>TEACHER&nbsp;DISPLAY</span>
          </div>
          <el-row :gutter="20" class='studentOne'>

            <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
              <img src="../assets/49433654453450040.png" alt="焦宇琪中国院考级通过">
              <p>焦宇琪中国院考级通过</p>
            </div></el-col>


            <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
              <img src="../assets/467504206368503030.png" alt="甄汐艾中国院考级通过">
              <p>甄汐艾中国院考级通过</p>
            </div></el-col>

            <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
              <img src="../assets/381172173412866569.png" alt="桂文捷中国院考级通">
              <p>桂文捷中国院考级通过</p>
            </div></el-col>

          </el-row>


          <el-row :gutter="20" class='studentOne'>
            <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
              <img src="../assets/784966450629919519.png" alt="公主坟校区学员中央院考级通过">
              <p>公主坟校区学员中央院考级通过</p>
            </div></el-col>

            <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple publicPPP">
              <img src="../assets/219648171646544434.png" alt="国贸校区学员中国院考级通过">
              <p>国贸校区学员中国院考级通过</p>
            </div></el-col>

            <el-col :span="8" class='publicPPP'><div class="grid-content bg-purple` publicPPP">
              <img src="../assets/3885076515323368.png" alt="国贸校区学员中国院考级通过">
              <p>国贸校区学员中国院考级通过</p>
            </div></el-col>

          </el-row>
        </div>
        <footers></footers>
      </div>
</template>

<script>
  import NavBar from "../common/NavBar";
  import footers from "../common/footers";
  export default {
    name: "newMusic",
    data() {
      return {
      }
    },
    methods: {

    },
    mounted() {
      // 这里是页面加载完成 执行的方法
      // alert('页面加载完我会弹出 吴大胖纸')
    },
    components: {
      // 头部导航是公共 所以做成组件 ， components 是放组件的， 你可以理解为 放了一个 DIV 名字随便起
      NavBar: NavBar,
      footers:footers
    }

  }
</script>

<style scoped>
  .publicstudentOne {
    height: 616px;
    margin-top: 158px;
  }
  .studentOne {
    height: 287px;
  }
  .publicPPP {
    width: 360px;
    height: 240px;
    margin-right: 26px;
  }

  .studentOne:nth-child(2){
    margin-top: 40px;
  }

  .publicPPP p {
    text-align: center;
    font-size: 22px;
    background-color: #f5f5f5;
    font-size: 20px;
    color: #646464;
    height: 46px;
    line-height: 46px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
