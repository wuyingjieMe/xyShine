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
        <el-col :span=12 style="padding: 0 10px 0 0;">
          <img src="../assets/N_001.png" alt="">
        </el-col>

        <el-col :span=12>
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


    <!--轮播图小的-->

    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
        2
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
        2
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">2</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">3</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">3</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">3</div>
      </el-col>
    </el-row>

    <!--预约试听-->
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
        msg: "我是初始数据，data 一般都是这样写的"
      }
    },
    methods: {
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
  .teacherP {
    margin-top: 14px;
  }

</style>
