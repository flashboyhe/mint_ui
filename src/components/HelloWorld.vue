<template>
  <div class="hello">
    <!--  <img src="../assets/yifa.gif" style="width:100%"> -->
    <h1>
	     <input type="text" v-model="msg">
	</h1>
  <ul>
      <li v-for="todo in todos">
      {{ todo.id}} {{ todo.name}} {{todo.age}} {{todo.class}} {{todo.sex}} {{todo.edit}}
      </li>
  </ul>
	
    <mt-button type="danger" @click.native="open">danger</mt-button>

    <br>
    <br>
     <Loading></Loading>
     <hr>
     <div>单选框获取选中的值</div>
    <input type="radio" id="runoob" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="google" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'xiaoyujian',
      todos:[],
       picked : ' '
	  }
  },
  created: function () {
      //调试打断点用的，debugger
      //debugger;
       alert("我是创建之后，created")
       var _this=this
       this.axios.get('static/json.json', {
　　	params: { 'key':_this.msg }
	}).then(function(response){
          // _this.todos=response.data.stu;
          _this.picked=response.data.stu[0].name;
		 })
  },
  methods:{
    open:function () {
	   var _this=this
       this.axios.get('static/json.json', {
　　	params: { 'key':_this.msg }
	}).then(function(response){
          _this.todos=response.data.stu;
          // _this.picked=response.data.stu[0].name;
		  console.log(_this.todos)
          
        })
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
