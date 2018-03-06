<template>
  <div class="form">
    <!-- 我是一个computed的全局api -->
  <div :class="{ yangshi:shifou }">computed前，和computed后的值</div>
  <div>{{chicun}} &nbsp;&nbsp;&nbsp;{{reMsg}}</div>
  <br>
  <br>
   <!-- 我是一个按钮  -->
  <button v-bind:class="{ yangshi:shifou }" @click="transform">点击我，来切换数据</button>
  <br>
  <br>
  <br>
  <br>

  <!-- 关于radio获取选中的值 -->
  <div  v-bind:class="{ yangshi:shifou }">单选框获取选中的值</div>
  <input type="radio" id="runoob" value="Runoob" v-model="picked">
  <label for="runoob">Runoob</label>
  <br>
  <input type="radio" id="google" value="Google" v-model="picked">
  <label for="google">Google</label>
  <br>
  <span>选中值为: {{ picked }}</span>

  <!-- 多选框获取选中的值 -->
  <div :class="{ yangshi:shifou }">多个，多选框获取选中的值</div>
 <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
  <label for="runoob">Runoob</label>
  <input type="checkbox" id="google" value="Google" v-model="checkedNames">
  <label for="google">Google</label>
  <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
  <label for="taobao">taobao</label>
  <br>
  <span>选择的值为: {{ checkedNames }}</span>


 <!-- 单个多选框选中的值 -->
 <div :class="{ yangshi:shifou }">下拉框获取选中的值</div>
  <select v-model="selected" name="fruit">
    <option value="">选择一个网站</option>
    <option value="www.runoob.com">Runoob</option>
    <option value="www.google.com">Google</option>
     <option value="m.flashboyhe.com">flashboyhe</option>
  </select>
 
  <div>
      选择的网站是: {{selected}}
  </div>

    <br>
    <br>

    <hr>
    <div>我是v-bind:class 和v-bind:style</div>
		<p v-bind:class="{ yangshi:shifou }">{{msg}}</p>
    <p v-bind:style="{ color: yanse, fontSize: chicun + 'px' }">我的名字叫做何杰</p>
    <hr>
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
         <Loading haha='我非常喜欢uzi'></Loading>
         <hr>
         <div>mint-ui的input输入框</div>
         <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <hr>
        <div :class="{watch:watchStyle}">watch的真是用法，它用于观察Vue实例上的数据变动。有一个数据变化前的值，还有一个数据变化后的值</div>
        <div>
          <button @click="jia">加1</button>  {{n}}   <button @click="jian">减1</button>
        </div>

  </div>
  
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
    msg: 'Welcome to 闪哥',
    rangeValue: '30',
    shifou:'true',
    yanse:'pink',
    chicun:'50',
    picked : ' ',
    wenzi:'我刚被加载进来，就触发了（我是created）',
    wenzi2:'我刚被安装之后的mouted，就被触发了（也可以说是挂载）',
    checkedNames: [],
     selected: '' ,
     username:'杰哥哥',
     watchStyle:'true',
     n:'1'
   
   }
  },
  methods:{
    transform:function () {
	    this.msg="我是改变之后的。闪哥语句"
    },
    jia:function () {
	   this.n++
    },
    jian:function () {
	   this.n--
    }
  },
   created: function () {
    // `this` 指向 vm 实例
    alert(this.wenzi)
  },
   mounted: function () {
    // `this` 指向 vm 实例
    alert(this.wenzi2)
  },
   updated: function () {
    alert("我是数据更新之后，通过method的点击事件，来触发数据更新（updated）")
  },
   computed:{
      reMsg:function(){
        // return this.chicun.split('').reverse().join('')
        return this.chicun+1
      }
  },
  watch:{
    n:function(newVal,oldVal){
      //alert("haha")
        console.log(newVal)
        console.log(oldVal)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.watch{
  font-size: 30px;
  color:pink;
  font-family: microsoft yahei;
}

.yangshi{
  font-style: italic;
  font-size: 35px;
  color: greenyellow;
  font-weight: 800
}

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
