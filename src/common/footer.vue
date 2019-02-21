<template>
  <div class='navbar footers'>
  <div class='footer clearfix'>
      <div class="navbar footer-top-product clearfix">
        <dl>
          <dt>声乐类</dt>
          <dd><a href="#">合唱培训班</a></dd>
          <dd><a href="#">少儿声乐培训班</a></dd>
          <dd><a href="#">成人声乐培训班</a></dd>
          <dd><a href="#">声乐考前培训班</a></dd>
          <dd><a href="#">声乐考级培训班</a></dd>
        </dl>
        <dl>
          <dt>舞蹈类</dt>
          <dd><a href="#">街舞培训班</a></dd>
          <dd><a href="#">民族舞培训班</a></dd>
          <dd><a href="#">拉丁舞培训班</a></dd>
          <dd><a href="#">现代舞培训班</a></dd>
          <dd><a href="#">古典舞培训班</a></dd>
          <dd><a href="#">舞蹈考级培训班</a></dd>
        </dl>
        <dl>
          <dt>乐器类</dt>
          <dd><a href="#">钢琴培训班</a></dd>
          <dd><a href="#">琵琶培训班</a></dd>
          <dd><a href="#">吉他培训班</a></dd>
          <dd><a href="#">小提琴培训班</a></dd>
          <dd><a href="#">萨克斯培训班</a></dd>
        </dl>
        <dl>
          <dt>形体类</dt>
          <dd><a href="#">瑜伽培训班</a></dd>
          <dd><a href="#">形体培训班</a></dd>
          <dd><a href="#">健身操培训班</a></dd>
          <dd><a href="#">少儿模特培训班</a></dd>
          <dd><a href="#">少儿芭蕾形体培训班</a></dd>
        </dl>
        <dl>
          <dt>表演类</dt>
          <dd><a href="#">表演培训班</a></dd>
          <dd><a href="#">台词培训班</a></dd>
          <dd><a href="#">诗词朗诵培训班</a></dd>
        </dl>
        <div class="coverage">
          <h2></h2>

          <p></p>

          <p class="fr"><a href="#">查看详情 ></a></p>
        </div>
      </div>
    </div>
  <div class="footer-bottom-copyright">
    <p><a href="#"></a>京公网安备 11000002000088号<br/>
       北京传承先艺音乐文化有限公司拥有最终解释权&nbsp;&nbsp;违规和不良信息举报电话：400063008
    </p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .footers {
    background-color: #4D4D4D;
    width: 100%;
    /*height: 320px;*/
  }
  .footer-top-product dl dd {
    height: 22px;
  }

  .coverage {
    float: right;
    width: 189px;
    height: 167px;
    margin-top: 16px;
    /*background: url(../images/china.png) no-repeat left bottom;*/
    padding-left: 18px;
  }
  .coverage h2 {
    margin-top: 9px;
  }
  .coverage p {
    line-height: 22px;
  }
  /*footer部分开始*/
  .footer-top-slogan {
    height: 54px;
    background-color: #F5F5F5;
    padding: 20px 0;
  }
  a {
    font-size: 18px;
    line-height: 28px;
  }
  .footer-top-slogan span {
    position: absolute;
    left: 50%;
  }
  .slogan1 {
    margin-left: -600px;
  }
  .slogan2 {
    margin-left: -294px;
  }
  .slogan3 {
    margin-left: 10px;
  }
  .slogan4 {
    margin-left: 308px;
  }
  .footer-top-product dl {
    /*margin-top: 12px;*/
    float: left;
    width: 180px;
  }
  .footer-top-product dl dt,
  .coverage h2
  {
    font-size: 22px;
    margin: 40px 0;
    font-family: "microsoft yahei";
    height: 30px;
    border:1px solid #fff;
    width: 90px;
    text-align: center;
    color: #fff;
  }
  .footer-top-product dl dd {
    height: 22px;
  }
  .coverage {
    float: right;
    width: 189px;
    height: 167px;
    margin-top: 16px;
    /*background: url(../images/china.png) no-repeat left bottom;*/
    padding-left: 18px;
  }
  .coverage h2 {
    margin-top: 9px;
  }
  .coverage p {
    line-height: 22px;
  }
  .footer-bottom {
    border-top: 1px solid #EAEAEA;
    margin-top: 26px;
    text-align: center;
  }
  .footer-bottom-links {
    margin-top: 20px;
  }
  .footer-bottom-links a {
    padding: 0 12px;
  }
  .footer-bottom-copyright {
    margin-top: 12px;
    background-color: #333232;
  }
  .footer-bottom-copyright p {
    line-height: 22px;
    text-align: center;
    color: #fff;
    padding: 5px 0;
  }
  .footer-bottom-message {
    margin: 10px 0;
  }
  .footer-bottom-message a {
    margin: 0 10px;
  }
  /*footer部分结束*/
</style>
