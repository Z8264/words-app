<template>
  <div class="page">
    <ul class="keys">
      <li v-for="(item,i) in keys" :key="i">{{item}}</li>
    </ul>
    <ul class="words">
      <li v-for="(item,i) in words" :key="i">
        <span>{{i+1}}</span>
        <strong>{{item}}</strong>
      </li>
    </ul>
    <a href="javascript:void(0)" class="btn-1" @click="randomKey">密码</a>
    <a href="javascript:void(0)" class="btn-2" @click="randomWord">密码本</a>
  </div>
</template>
<script>
import {getMultipleWords} from '../words';

export default {
  data(){
    return {
      keys:[0,0,0],
      words:['词汇','词汇','词汇','词汇'],
    };
  },
  mounted(){
    this.randomWord();
  },
  methods: {
    randomWord(){
      this.words = getMultipleWords(4);
    },
    randomKey(){
      const arr = [1,2,3,4];
      arr.sort(() => Math.random() - 0.5); 
      this.keys = arr.slice(0,3);
    },
  },
}
</script>
<style lang="scss" scoped>
ul.keys{
  padding: 20px;
  display:flex;
  li{
    flex:1;
    height: 60px;
    font-size: 35px;
    line-height:60px;
    text-align: center;
  }
}
ul.words {
  position:fixed;
  top:50%;
  left:50%;
  width:80%;
  
  transform: translate(-50%,-50%);

  li {
    height: 60px;
    font-size: 24px;
    line-height:60px;
    text-align: left;

    span {
      display: block;
      float:left;
      width:30%;
      text-align: center;
    }
    strong {
      display: block;
      float:right;
      width:70%;
      text-align: center;
    }
  }
}

.btn-1 {
  display:block;
  width: 150px;
  position:absolute;
  bottom: 20px;
  left:20px;
  font-size:24px;
  line-height: 50px;
  background:#ddd;
}
.btn-2 {
  display:block;
  width: 150px;
  position:absolute;
  bottom: 20px;
  right:20px;
  font-size:24px;
  line-height: 50px;
  background:#ddd;
}
</style>