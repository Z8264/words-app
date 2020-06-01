<template>
  <div class="page">
    <ul>
      <li v-for="(item,i) in words" :key="i">
        <span>{{i+1}}</span>
        <strong>{{item}}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
import {getMultipleWords} from '../words';

export default {
  data(){
    return {
      words:['词汇','词汇','词汇','词汇']
    };
  },
  mounted(){
    this.newWords();
  },
  methods: {
    newWords(){
      this.words = getMultipleWords(4);
    }
  },
}
</script>
<style lang="scss" scoped>

ul {
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
</style>