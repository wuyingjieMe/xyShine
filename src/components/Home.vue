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
    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher">
      教师展示 / <span>TEACHER&nbsp;DISPLAY</span>
    </div>
    <div>
      <el-row style="width:100%;height: 394px;background-color: #f5f5f5;">
        <div class="navbar radioImg">
          <el-col :span="6">
            <div class="grid-content bg-purple" @mouseenter="changRadioImg(1)">
              <img v-if="img1" src="../assets/01、.png" alt="">
              <img v-else src="../assets/1.png" alt="">
              <p>专业测评</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light" @mouseenter="changRadioImg(2)">
              <img v-if="img2" src="../assets/02、.png" alt="">
              <img v-else src="../assets/2.png" alt="">
              <p>优秀师资</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" @mouseenter="changRadioImg(3)">
              <img v-if="img3" src="../assets/03.png" alt="">
              <img v-else src="../assets/3.png" alt="">
              <p>定制课程</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light" @mouseenter="changRadioImg(4)">
              <img v-if="img4" src="../assets/04.png" alt="">
              <img v-else src="../assets/4.png" alt="">
              <p>师资培训</p>
              <p>名校教授，考官制定课程大纲，参与教学工作</p>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
    <!--教师展示-->
    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher">
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

    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher">
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
          <!--<li><img src="../assets/教师页——王若兰.png" alt=""></li<li><img src="../assets/教师页——许斌.png" alt=""></li>-->
          <li><img src="../assets/教师页——赵晓云.png" alt=""></li>
          <li><img src="../assets/教师页——邢月.png" alt=""></li>
        </ul>
      </div>
      <span class="el-icon-caret-left btnLeft" @click="btn_left"></span>
      <span class="el-icon-caret-right btnRight" @click="btn_right"></span>
    </div>

    <!--预约试听-->

    <div class="layui-col-xs4 layui-col-sm7 layui-col-md8 font_teacher">
      预约试听 / <span>TEACHER&nbsp;DISPLAY</span>
    </div>
    <div class="formSubmit navbar clearfix">
      <div style="width: 49%;float: left;">
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="" prop="name" placeholder='请输入您的姓名'>
            <el-input v-model="ruleForm.name">您的姓名：</el-input>
          </el-form-item> <el-form-item label="" prop="name">
            <el-input v-model="ruleForm.name">请输入您的联系方式</el-input>
          </el-form-item>
        </el-form>
      </div>
      <div style="width: 50%;float: right;">
        <el-form style="float: right;" :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="请选择预约校区" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择预约校区">
              <el-option label="国贸校区" value="shanghai"></el-option>
              <el-option label="欢乐谷校区" value="beijing"></el-option>
              <el-option label="青年路校区" value="beijing"></el-option>
              <el-option label="公主坟校区" value="beijing"></el-option>
              <el-option label="望京校区" value="beijing"></el-option>
            </el-select>
          </el-form-item><el-form-item label="请选择预约课程" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择预约课程">
              <el-option label="声乐课程" value="shanghai"></el-option>
              <el-option label="舞蹈课程" value="beijing"></el-option>
              <el-option label="钢琴课程" value="beijing"></el-option>
              <el-option label="乐器课程" value="beijing"></el-option>
              <el-option label="表演课程" value="beijing"></el-option>
              <el-option label="朗读者课程" value="beijing"></el-option>
              <el-option label="新音乐素养课程" value="beijing"></el-option>
            </el-select>
          </el-form-item>

        </el-form>
      </div>
    </div>
    <el-row style="text-align: center">
      <el-button type="danger">马上预约</el-button>
    </el-row>
  </div>
</template>

<script>
  // 把组件导入过来
  //  @ 是指根路径 这里的根路径是 src 文件
  //  这里导入 的 NavBar 名字 要跟下面 components ：冒号后面那个要一样 （别问为什么）
  import NavBar from '@/common/NavBar'
  import footers from '@/common/footers'

  export default {
    name: "Home",
    data() {
      return {
        msg: "我是初始数据，data 一般都是这样写的",
        marginRange: 0, // 控制 图片margin距离
        ruleForm: {
          name: '',
          region: '',
        },
        img1:true,
        img2:true,
        img3:true,
        img4:true,
      }
    },
    methods: {
      changRadioImg(num){
        var that = this;
         switch (num){
           case 1:
             that.img1 = false;
             that.img2 = true;
             that.img3 = true;
             that.img4 = true;
             break;
           case 2:
             that.img1 = true;
             that.img2 = false;
             that.img3 = true;
             that.img4 = true;
             break;
             case 3:
             that.img1 = true;
             that.img2 = true;
             that.img3 = false;
             that.img4 = true;
             break;
             case 4:
             that.img1 = true;
             that.img2 = true;
             that.img3 = true;
             that.img4 = false;
             break;
         }
      },
      btn_left() {
        // 点击向左轮播
        if (this.marginRange > -1480) {
          console.log(this.marginRange);
          this.marginRange -= '240'
        }
        $('.carousel_custom .carousel_content ul').css("margin-left", this.marginRange + 'px')

      },
      btn_right() {
        // 点击向右轮播
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
     NavBar:NavBar,
      footers:footers
    }
  }
</script>

<style scoped>
  .font_teacher {
    width: 366px;
    margin: 40px auto;
    border-bottom: 2px solid #646464;
  }
  .grid-content{
    text-align: center;
    /*padding-top: 50px;*/
  }
  .radioImg p:nth-child(2){
    padding-top: 30px;
  }
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
