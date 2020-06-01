
<template>
  <div class="page">
    <div class="mianban">
      <a href="javascript:void(0)" @click="showWord=true;showColor=false;">操作版</a>
      <a href="javascript:void(0)" @click="showWord=false;showColor=true">颜色版</a>
    </div>

    <ul v-show="showWord" >
      <li 
        :class="{active:current===i,red:selected[i]==='2',blue:selected[i]==='1',black:selected[i]==='3',white:selected[i]==='0'}" @click="select(i)"
        v-for="(item,i) in words" 
        :key="i"
      >
        <strong>{{item}}</strong>
      </li>
    </ul>
    <ul v-show="showColor">
      <li :class="{red:color[i]==='2',blue:color[i]==='1',black:color[i]==='3',white:color[i]==='0'}" v-for="(item,i) in words" :key="i">
        <strong>{{item}}</strong>
      </li>
    </ul>

    <a href="javascript:void(0)" class="submit" @click="submit">确定</a>
  </div>
</template>
<script>
import {getMultipleWords} from '../words';

export default {
  data(){
    return {
      current: -1,
      showWord:true,
      showColor:false,
      words:[
          '护照','赌场','阴谋','账单','俱乐部',
          '旅行','海滩','水池','柠檬','匕首',
          '甲板','战争','船','土星','短袜',
          '戒指','学校','阴影','论文','马',
          '射击','绿色','天平','胡萝卜','鸭子',
      ],
      color:[
        '1','0','2','0','0',
        '0','1','0','1','2',
        '0','1','3','1','2',
        '0','1','2','1','2',
        '2','2','1','0','0',
      ],
      selected:[
        '','','','','',
        '','','','','',
        '','','','','',
        '','','','','',
        '','','','','',
      ]
    };
  },
  mounted(){
    this.newWords();
  },
  methods: {
    newWords(){
      // this.words = getMultipleWords(4);
    },
    select(i){
      if(this.current===i) this.current =-1;
      else this.current = i;
    },
    submit(){
      if(this.current === -1) return;
      this.selected[this.current] = this.color[this.current];
      this.$forceUpdate();
    }
  },
}
</script>
<style lang="scss" scoped>
.mianban {
  padding: 20px;
  a {
    margin-right:10px;
    color:#333;
  }
}
ul {
  position:fixed;
  top:50%;
  left:50%;
  width:95%;
  
  transform: translate(-50%,-50%);

  li {
    float:left;
    width: 20%;
    height: 50px;
    padding: 5px;

    strong {
      display:block;
      font-size: 14px;
      line-height:40px;
      text-align: center;
      border:1px solid #ddd;
    }
  }
  li.active {
    strong{
      box-shadow: 0 0 2px 1px rgba(0,0,0,.5);;
    }
  }
  li.red{
    
    strong{
      color:red;
      border-color:red;
      background:rgba(222,111,000,.1)
    }
  }
  li.blue{
    
    strong{
      color:blue;
      border-color:blue;
      background:rgba(000,111,222,.1)
    }
  }
  li.black{
    
    strong{
      color:#fff;
      background:#333;
      border-color:#333;
    }
  }
  li.white{
    strong {
      color: #333;
      background:#f1f1f1;
    }
  }
}
.submit {
  display:block;
  width: 150px;
  position:absolute;
  bottom: 20px;
  left:50%;
  font-size:24px;
  line-height: 50px;
  transform: translateX(-50%);
  background:#ddd;
}
</style>