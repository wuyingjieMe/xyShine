<template>
  <div class='NavBar'>
  <div class='footers clearfix'>
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
        name: "footers"
    }
</script>

<style scoped>
  .footer-top-product dl dd {
    height: 22px;
  }

  .coverage h2 {
    margin-top: 9px;
  }
  .coverage p {
    line-height: 22px;
  }
  /*footer部分开始*/

  .footer {
    height: 320px;
    background-color: #4D4D4D;
  }

  a {
    font-size: 18px;
    line-height: 28px;
  }
  .footer-top-slogan span {
    position: absolute;
    left: 50%;
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
    border:1px dashed #fff;
    width: 90px;
    text-align: center;
    color: #fff;
    border-radius: 30px;
  }
  .footer-top-product dl dd {
    height: 22px;
  }
  .coverage h2 {
    margin-top: 9px;
  }
  .coverage p {
    line-height: 22px;
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
  .
  .footer-bottom-message a {
    margin: 0 10px;
  }
  /*footer部分结束*/
</style>
