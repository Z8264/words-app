<template>
  <div>
    <div class="word">{{word}}</div>
  </div>
</template>
<script>
import {getSingleWord} from '../words';
export default {
  data(){
    return {
      word:'词汇'
    }
  },
  mounted(){
   this.newWord();
  },
  methods:{
    newWord(){
      this.word = getSingleWord()
    }
  }
}
</script>
<style lang="scss" scoped>
.word{
  position: fixed;
  top:50%;
  left:0;
  right:0;
  font-size: 45px;
  line-height: 100px;
  transform: translateY(-50%);
}
</style>