<template>
  <div class="about">
        {{msg}}
        <mt-range
        v-model="rangeValue"
        :min="10"
        :max="90"
        :step="10"
        :bar-height="5">
        </mt-range>


        <br>
        <br>
        <mt-header title="long long long long title">
        <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <br>
        <br>
         <Loading haha="闪电简直帅到掉渣"></Loading>
         <br>
         
         <hr>
         <div>v-show的指令，控制内容的显示和隐藏的</div>
         <div v-show='showorder'>我是v-show</div>
         
         <hr>
         <div>v-if的指令，也是控制内容显示和隐藏的</div>
         <div v-if='iforder'>我是v-if</div>
         
         <hr>
         <div>v-if和v-else的指令混用的效果</div>
        <div v-if="ifVal > 10">
         我是大于10的数字
        </div>
        <div v-else>
         我是小于10的数字
        </div>

        <hr>
        <div>v-if、v-if-else和v-else的指令混用的效果</div>
        <div v-if="type === 'A'">
        A
        </div>
        <div v-else-if="type === 'B'">
        B
        </div>
        <div v-else-if="type === 'C'">
        C
        </div>
        <div v-else>
        Not A/B/C
        </div>
        <hr>
        <div>如何公共组件的，父组件向组件传值</div>
       <Loading haha="我爱你们" hehe="我想你们了"></Loading>
     
  </div>
  
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
     msg: 'Welcome to 闪哥',
	  rangeValue: '30',
    showorder:false,
    iforder:false,
    ifVal:5,
    type:'D'
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.layout{
	border: 1px solid #d7dde4;
	background: #f5f7f9;
}
.layout-logo{
	width: 100px;
	height: 30px;
	background: #5b6270;
	border-radius: 3px;
	float: left;
	position: relative;
	top: 15px;
	left: 20px;
}
.layout-nav{
	width: 420px;
	margin: 0 auto;
}
.layout-assistant{
	width: 300px;
	margin: 0 auto;
	height: inherit;
}
.layout-breadcrumb{
	padding: 10px 15px 0;
}
.layout-content{
	min-height: 200px;
	margin: 15px;
	overflow: hidden;
	background: #fff;
	border-radius: 4px;
}
.layout-content-main{
	padding: 10px;
}
.layout-copy{
	text-align: center;
	padding: 10px 0 20px;
	color: #9ea7b4;
}
</style>
