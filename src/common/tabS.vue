<template>

  <div>
    <div class="box" id="box1" v-for="(item,index) in data" style="padding-bottom:30px;">
      <!--<div class="hd">-->
        <!--<span class="current">体育</span>-->
        <!--<span>娱乐</span>-->
        <!--<span>新闻</span>-->
        <!--<span>综合</span>-->
      <!--</div>-->
      <!--<div class="bd">-->
        <!--<ul>-->
          <!--<li class="show">我是体育模块</li>-->
          <!--<li>我是娱乐模块</li>-->
          <!--<li>我是新闻模块</li>-->
          <!--<li>我是综合模块</li>-->
        <!--</ul>-->
      <!--</div>-->
      <li :class="{'showColor':item.flag}" @click="changBtn(index)">{{item.name}}</li>
    </div>

        <!--<li class="tab-item active">新音乐素养</li>-->
        <!--<li class="tab-item">舞蹈课程</li>-->
        <!--<li class="tab-item">乐器课程</li>-->
        <!--<li class="tab-item">朗读者课程</li>-->
        <!--<li class="tab-item">声乐课程</li>-->
  </div>
</template>

<script>
  export default {
    name: "tabS",
    components: {

    },
    data(){
      return{
        data:[
          {name:"新音乐素养</br>（3—6岁）",flag:false},
          {name:"舞蹈课程",flag:false},
          {name:"乐器课程",flag:false},
          {name:"朗读者课程",flag:false},
          {name:"乐器课程",flag:false}
        ]
      }
    },
    methods:{
      changBtn(index){
        this.data.forEach(function(item,index){
          item.flag = false;
        })
        this.data[index].flag = true
      },
    },
    mounted(){

    }
  }
</script>

<style scoped>
  .message:after {
    /*content: '';*/
    position: relative;
    background-image: url('../assets/留言.png') ;
    top:0;
    left: 0;
  }
  .showColor{
    color:red;
  }
</style>
