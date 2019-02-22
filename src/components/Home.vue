<template>
  <div>
    <!--这个导入的名字 叫 navBar-->
    <navBar></navBar>
    <!--我是首页模块， 你就把我当做是 index。HTML 页面使用 也行 通常根目录就是配置首页路由-->
    <!--{{msg}}-->
    <!--<button>点击了</button>-->

    <!--圖片-->

    <img style="width: 100%;" src="../assets/two_lunBo.jpg" alt="">

    <!--教学体系-->
    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher"
         style="width: 340px;margin: 40px auto;border-bottom: 2px solid #646464">
      教师展示 / <span>TEACHER&nbsp;DISPLAY</span>
    </div>
    <div>
      <el-row style="width:100%;height: 394px;background-color: #f5f5f5;">
        <div class="navbar">
          <el-col :span="6">
            <div class="grid-content bg-purple"><img src="../assets/logo.png" alt="">
              <p>专业测评</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"><img src="../assets/logo.png" alt="">
              <p>优秀师资</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple"><img src="../assets/logo.png" alt="">
              <p>定制课程</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"><img src="../assets/logo.png" alt="">
              <p>师资培训</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <!--教师展示-->
    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher"
         style="width: 340px;margin: 40px auto;border-bottom: 2px solid #646464;">
      教师展示 / <span>TEACHER&nbsp;DISPLAY</span>
    </div>
    <div class="navbar">
      <el-row :gutter="20">
        <el-col :span=12 style="padding: 0 10px 0 0;width: auto">
          <img src="../assets/N_001.png" alt="" style="width: 100%;">
        </el-col>
        <el-col :span=12 style="width: auto;">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content bg-purple"><img src="../assets/N_002.png" alt=""></div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light"><img src="../assets/N_003.png" alt="">
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="teacherP">
            <el-col :span="12">
              <div class="grid-content bg-purple"><img src="../assets/N_004.png" alt=""></div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light"><img src="../assets/N_005.png" alt="">
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher"
         style="width: 340px;margin: 40px auto;border-bottom: 2px solid #646464;">
      明星教师 / <span>TEACHER&nbsp;DISPLAY</span>
    </div>
    <!--轮播图小的-->
    <div class="carousel_custom">
      <div class="carousel_content">
        <ul class="clearfix">
          <li><img src="../assets/教师页——农.png" alt=""></li>
          <li><img src="../assets/教师页——卢老师.png" alt=""></li>
          <li><img src="../assets/教师页——孙林.png" alt=""></li>
          <li><img src="../assets/教师页——封.png" alt=""></li>
          <li><img src="../assets/教师页——尼老师.png" alt=""></li>
          <li><img src="../assets/教师页——徐心卉.png" alt=""></li>
          <li><img src="../assets/教师页——梁馨予.png" alt=""></li>
          <li><img src="../assets/教师页——王若兰.png" alt=""></li>
          <li><img src="../assets/教师页——许斌.png" alt=""></li>
          <li><img src="../assets/教师页——赵晓云.png" alt=""></li>
          <li><img src="../assets/教师页——邢月.png" alt=""></li>
        </ul>
      </div>
      <span class="el-icon-caret-left btnLeft" @click="btn_left"></span>
      <span class="el-icon-caret-right btnRight" @click="btn_right"></span>
    </div>

    <!--预约试听-->

    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher"
         style="width: 340px;margin: 40px auto;border-bottom: 2px solid #646464;">
      预约试听 / <span>TEACHER&nbsp;DISPLAY</span>
    </div>
    <div class="formSubmit navbar clearfix">
      <div style="width: 49%;float: left;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item> <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="width: 50%;float: right;">
        <el-form style="float: right;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item><el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

        </el-form>
      </div>
    </div>
    <el-row style="text-align: center">
      <el-button type="danger">马上预约</el-button>
    </el-row>
    <!--教师展示-->
    <!---->

    <!--<select name="city" lay-verify="">-->
    <!--<option value="">请选择预约校区</option>-->
    <!--<option value="010">国贸校区</option>-->
    <!--<option value="021">欢乐谷校区</optio<div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher"-->
    <!--style="width: 340px;margin: 40px auto;border-bottom: 2px solid #646464;">-->
    <!--预约试听 / <span>BOOKING&nbsp;AUDITION</span>-->
    <!--</div>-->

    <!--<el-form :inline="true"  class="demo-form-inline">-->
    <!--<el-form-item label="审批人">-->
    <!--<el-input v-model="formInline.user" placeholder="审批人"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="活动区域">-->
    <!--<el-select  placeholder="活动区域">-->
    <!--<el-option label="区域一" value="shanghai"></el-option>-->
    <!--<el-option label="区域二" value="beijing"></el-option>-->
    <!--</el-select>-->
    <!--</el-form-item>-->
    <!--<el-form-item>-->
    <!--<el-button type="primary" @click="onSubmit">查询</el-button>-->
    <!--</el-form-item>-->
    <!--</el-form>-->
    <option value="0571">望京校区</option>
    <option value="0571">公主坟校区</option>
    <option value="0571">望京校区</option>

  </div>
</template>

<script>
  // 把组件导入过来
  //  @ 是指根路径 这里的根路径是 src 文件
  //  这里导入 的 NavBar 名字 要跟下面 components ：冒号后面那个要一样 （别问为什么）
  import NavBar from '@/common/NavBar'

  export default {
    name: "Home",
    data() {
      return {
        msg: "我是初始数据，data 一般都是这样写的",
        marginRange: 0, // 控制 图片margin距离
        ruleForm: {
          name: '',
          region: '',
        }
      }
    },
    methods: {
      btn_left() {
        if (this.marginRange > -1480) {
          console.log(this.marginRange);
          this.marginRange -= '240'
        }
        $('.carousel_custom .carousel_content ul').css("margin-left", this.marginRange + 'px')

      },
      btn_right() {
        if (this.marginRange <0) {
          console.log(this.marginRange);
          this.marginRange += 240
        }
        $('.carousel_custom .carousel_content ul').css("margin-left", this.marginRange + 'px')

      }
      // 这里是处理事件的地方 比如说处理点击事件
      // dianji(){
      //   alert('大胖')
      // }
    },
    mounted() {
      // 这里是页面加载完成 执行的方法
      // alert('页面加载完我会弹出 吴大胖纸')
    },
    components: {
      // 头部导航是公共 所以做成组件 ， components 是放组件的， 你可以理解为 放了一个 DIV 名字随便起
      navBar: NavBar
    }
  }
</script>

<style scoped>
  .carousel_custom{
    position: relative;
  }
  .carousel_custom .carousel_content{
    margin: 0 auto;
    width: 970px;
    overflow: hidden;
    height: 280px;
    position:relative;
  }
  .carousel_custom .btnLeft{
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 30px;
    font-size: 30px;
  }
  .carousel_custom .btnRight{
    position: absolute;
    right: 20%;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 30px;
    font-size: 30px;
  }
  .carousel_custom .carousel_content ul{
    width: 2680px;
    transition: all 1s;
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    -o-transition:all 1s;
  }

  .carousel_custom .carousel_content li {
    float: left;
    padding-left: 10px;
    width: 240px;
    box-sizing: border-box;
  }

  .carousel_custom .carousel_content li img {
    width: 100%;
    display: block;
  }

  .teacherP {
    margin-top: 14px;
  }

</style>
