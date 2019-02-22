<template>
<div>
      <navBar></navBar>

      <!--圖片-->

      <img style="width: 100%;" src="../assets/组33拷贝.png" alt="">

      <el-tabs class='w' type="card" @tab-click="handleClick">
        <el-tab-pane label="新音乐素养" name="first">
          <!--<div v-for="(item,index) in 10">-->
            <!--胖+{{index}}-->
          <!--</div>-->



          <!--(1)-->
            <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/new_01.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>启蒙课程体系</h2>
              <p class='newWorkFont'>在教师的引导中认识音乐常识，在情景提示与道具场景中体会音乐与视觉与故事的关系，在游戏中体会身体的反应，在课程过程中体会音乐过程的时间性与阶段性。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
            </div>


          <!--(2)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/new_02.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>启蒙课程体系<span class='icon4'><img src="../assets/HOT.png" alt=""></span></h2>
              <p class='newWorkFont'>在教师的引导中认识音乐常识，在情景提示与道具场景中体会音乐与视觉与故事的关系，在游戏中体会身体的反应，在课程过程中体会音乐过程的时间性与阶段性。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(3)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/new_03.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>启蒙课程体系</h2>
              <p class='newWorkFont'>在教师的引导中认识音乐常识，在情景提示与道具场景中体会音乐与视觉与故事的关系，在游戏中体会身体的反应，在课程过程中体会音乐过程的时间性与阶段性。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="舞蹈课程" name="second">
          <!--(1)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/dance_04.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>民族舞/现代舞/中国舞</h2>
              <p class='newWorkFont'>兴趣是学习的动力，在舞蹈教学中结合认知内容向学员介绍少数民族的知识，了解民族服装，民俗民风，增强他们的感性知识，教学中老师和学员共同感受、分析音乐在节奏、速度力度上的变化，提供可创造的空间。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(2)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/dance_01.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>街舞/爵士舞/拉丁舞<span class='icon4'><img src="../assets/HOT.png" alt=""></span></h2>
              <p class='newWorkFont'>一对一授课模式，针对零基础的舞蹈爱好者或者想要提升个人气质等需求人群，我们会为每一位学生量身定制课程。鼓励式、情景式教学；活力四射的课堂氛围，具有专业的教师团队、量身定制的教学课程。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(3)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/dance_02.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>芭蕾形体课程</h2>
              <p class='newWorkFont'>可以提升自身的气质,适当认真的按要求练一些基本功可以重新塑造身体的线条，同时跳芭蕾形体也能锻炼身体,增强身体各个部位的协调能力,有利于身心健康,修身养性，想要提升气质的小公举，先艺艺术教育是你的不二选择哦~</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(4)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/dance_03.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>舞蹈考级课程</h2>
              <p class='newWorkFont'>按照北京舞蹈学院考级标准进行上课，测试。统一考试，统一报名。鼓励式、情景式的教学和欢歌笑语的课堂氛围。提高艺术素养，审美能力的同时，强化体态律动，塑造身体形态，从而提高孩子们认识美、掌握美、展现美的品质。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>
        </el-tab-pane>


        <el-tab-pane label="乐器课程" name="third">
          <!--(1)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/instrument_01.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>民乐课程</h2>
              <p class='newWorkFont'>民乐课程：琵琶、古筝、二胡、古琴、竹笛、葫芦丝、中阮等...
                开设零基础一对一教学，由专业院校教师进行授课，结合学员学习期望进行授课，帮您推荐合适的曲目，给您找到适合的练习途径。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(2)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/instument_02.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>西洋乐课程<span class='icon4'><img src="../assets/HOT.png" alt=""></span></h2>
              <p class='newWorkFont'>西洋乐课程：小提琴、吉他、萨克斯、单/双簧管、大提琴、长笛、手风琴等...
                了解相关乐器历史，种类。掌握正确的演奏姿势，手型和基本指法及弹奏技法。基本乐理知识，识谱看谱视奏能力训练。课堂气氛佳，舞台展现机会多。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(3)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/instrument_03.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>钢琴/钢琴考级课程</h2>
              <p class='newWorkFont'>从不懂钢琴到会弹钢琴，享受由自己双手弹奏的音乐，让自己沉浸在这优雅而温馨的环境中。从简单的音乐知识入手，指法、手型的纠正，掌握演奏方法和技巧，一对一进行授课，按照中央院考级知识进行学习。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(4)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/instrument_04.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>乐器考级课程</h2>
              <p class='newWorkFont'>不定时开设音乐会、比赛、艺术交流等活动，民乐考级根据中国音乐学院知识进行授课，西洋乐根据中央音乐学院知识进行授课，要求严格，针对性强，专业性高。学员对音乐表现力及艺术素质将有明显提高。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div></el-tab-pane>
        <el-tab-pane label="朗读者课程" name="fourth"> <!--(1)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/leader_01.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>内容简介及推荐书籍</h2>
              <p class='newWorkFont'>本课程适用于6岁至12岁少儿学习，全部课程完成时长共3年，分初级、中级、高级三个阶段，必备教材和参考资料：《金波儿童诗歌集》《优秀儿童剧台词集》《唐诗宋词》《儿童散文集》。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(2)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/leader_02.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>初级朗读基本训练<span class='icon4'><img src="../assets/HOT.png" alt=""></span></h2>
              <p class='newWorkFont'>课程以训练朗读者所需要的基本功训练，包括呼吸训练，元音训练，辅音训练，韵母训练，普通话语音纠正训练，发音吐字的基本技巧与听觉训练，标点符号的认知，语速的变化训练。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(3)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/leader_03.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>中级调动自我朗读能力</h2>
              <p class='newWorkFont'>增强基本功训练，强调学生自我对文本的解读能力，能够独立断字、断词、断句，分配朗读速度，力度，并认知音色变化，独立制造朗读表情，并加强听觉能力训练从而形成自我纠正能力。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(4)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/leader_04.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>集体配合能力高级课程</h2>
              <p class='newWorkFont'>课程延续基本功训练，强调个人朗读过程的声音与表演特点，并加强多人间语言与语言的对接能力训练，形成语言自我表达的个性化方式。教学内容以优秀儿童剧台词为主要教材，学期结课形式：台词朗读会。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div></el-tab-pane>
        <el-tab-pane label="声乐课程" name="fourth"> <!--(1)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/singer_01.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>内容简介及推荐书籍</h2>
              <p class='newWorkFont'>本课程适用于6岁至12岁少儿学习，全部课程完成时长共3年，分初级、中级、高级三个阶段，必备教材和参考资料：《金波儿童诗歌集》《优秀儿童剧台词集》《唐诗宋词》《儿童散文集》。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(2)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/singer_02.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>初级朗读基本训练<span class='icon4'><img src="../assets/HOT.png" alt=""></span></h2>
              <p class='newWorkFont'>课程以训练朗读者所需要的基本功训练，包括呼吸训练，元音训练，辅音训练，韵母训练，普通话语音纠正训练，发音吐字的基本技巧与听觉训练，标点符号的认知，语速的变化训练。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>


          <!--(3)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/singer_03.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>中级调动自我朗读能力</h2>
              <p class='newWorkFont'>增强基本功训练，强调学生自我对文本的解读能力，能够独立断字、断词、断句，分配朗读速度，力度，并认知音色变化，独立制造朗读表情，并加强听觉能力训练从而形成自我纠正能力。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>

          <!--(4)-->
          <div class='newWork'>
            <div class="left fl">
              <a href=""><img src="../assets/singer_04.png" alt=""></a>
            </div>
            <div class="right fr">
              <h2>中级调动自我朗读能力</h2>
              <p class='newWorkFont'>增强基本功训练，强调学生自我对文本的解读能力，能够独立断字、断词、断句，分配朗读速度，力度，并认知音色变化，独立制造朗读表情，并加强听觉能力训练从而形成自我纠正能力。</p>
              <p><span class='icon1 fl'>20</span><span class='icon2 fl'>40</span><span class='icon3 fr'>先艺艺术教育</span></p>
            </div>
          </div>
          </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  // 把组件导入过来
  //  @ 是指根路径 这里的根路径是 src 文件
  //  这里导入 的 NavBar 名字 要跟下面 components ：冒号后面那个要一样 （别问为什么）
  import NavBar from '@/common/NavBar'

  export default {
    name: "Course",
    data() {
      return {
        // msg: "我是初始数据，data 一般都是这样写的"
        activeName2: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
      // 这里是处理事件的地方 比如说处理点击事件
      // dianji(){
      //   alert('大胖')
      // }
      // handleClick(tab, event) {

      // }


    },
    mounted() {
      // 这里是页面加载完成 执行的方法
      // alert('页面加载完我会弹出 吴大胖纸')

      // layui.use('element', function(){
      //   var element = layui.element;
      //
      //   //…
      // });
      layer.open({
        type: 1,
        content: '传入任意的文本或html' //这里content是一个普通的String
      });xie
      console.log($);
    },
    components: {
      // 头部导航是公共 所以做成组件 ， components 是放组件的， 你可以理解为 放了一个 DIV 名字随便起
      navBar: NavBar
    }
  }
</script>
<style scoped>
  .active{
    border-bottom: 2px solid red;
  }
  .content .selected{
    display: block;
  }
.newWork {
  width: 1140px;
  height: 262px;
  background-color: #fff;
  border-bottom: 1px solid #000;
  margin: 30PX auto;
  color:#646464;
}

  .icon4 img{
    width: 54px;
    height: 28px;
    line-height: 14px;
    position: absolute;
    top: -4px;
    right: 20px;
  }

  .newWork .left {
    width: 300px;
    height: 200px;
  }

  .newWork .right {
    width: 769px;
    height: 200px;
    margin-right: 20px;
  }
  .newWork .right h2 {
    font-size: 28px;
    color: #323232;
  }

  .newWork .right p{
    margin-top:20px;
    line-height: 34px;
    font-size: 18px;
  }

  .newWorkFont {
   width: 664px;
 }
</style>

<!--//注意：选项卡 依赖 element 模块，否则无法进行功能性操作-->
