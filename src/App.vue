<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *,div,p{
    padding: 0;
    margin: 0;
  }

  a {
    color: #fff;   /*a 标签是不继承颜色 的*/
    text-decoration: none;
  }

  /*a:hover {*/
    /*color: #C81623;*/
  /*}*/

  h1, h2, h3, h4, h5, h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
  }
li {
  list-style: none;
}
  s, i, em {  /*一般是起装饰作用*/
    font-style: normal;  /*去掉原有的样式*/
    text-decoration: none;  /*去掉下划线或是删除线*/
  }

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
  .navbar{
    width: 1140px;
    margin: 0 auto;
    color:#000;
  }
  .text-right{
    text-align: right;
  }
  .text-left{
    text-align:left;
  }
  .text-center{
    text-align:center;
  }
  .font_teacher {
    font-size: 40px;
    color: #000;
    position: relative;
  }
  .font_teacher>span {
    font-size: 18px;
    color:#646464;
  }

  .font_teacher>span::after {
    content: '';
    width: 95px;
    height: 6px;
    background-color: red;
    position: absolute;
    left: 0px;
    bottom: -4px;
  }
  .fl{
    float: left;
  }

  .fr {
    float: right;
  }


  .clearfix:before, .clearfix:after {
    /*清除浮动，最好最标准的写法*/
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1; /*IE/7/6*/  /*兼容IE6下的写法*/
  }

</style>
