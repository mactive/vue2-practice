<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <message-todo></message-todo>
    </div>

    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

    <el-button type="text" @click.native="open2">点击打开 Message Box</el-button>

  </div>
</template>

<script>
import MessageTodo from './components/MessageTodo'
import TreeView from './treeview/treeview.vue'

export default {
  name: 'app',
  data(){
    return {
      title: '',
      checkList: ['选中且禁用','复选框 A']
    }
  },
  methods:{
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  components: {
    MessageTodo,
    TreeView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img{
  height: 50px;
}
  .container{
    width: 50%;
    padding: 0 25%;
    text-align: left;
  }
</style>
