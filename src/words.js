
/**
 * 动物
 */
const animals = {
  'tiger': '老虎',
  'giraffe': '长颈鹿',
  'lion': '狮子',
  'elephant': '大象',
  'horse': '马',
  'bear': '熊',
  'kangaroo': '袋鼠',
  'ox': '牛',
  'sheep': '绵羊',
  'doy': '狗',
  'cat': '猫',
  'camel': '骆驼',
  'snake': '蛇',
  'rabbit': '兔子',
  'panda': '熊猫',
  'zebra': '斑马',
  'squirrel': '松鼠',
  'wolf': '狼',
  'dragofly': '蜻蜓',
  'butterfly': '蝴蝶',
  'fish': '鱼',
  'penguin': '企鹅',
  'mosquuito': '蚊子',
  'blackbird': '乌鸦',
  'bat': '蝙蝠',
};
/**
 * 植物
 */
const plants = {
  'tomato':'西红柿',
  'cucumber':'黄瓜',
  'carrot':'胡萝卜',
  'potato':'土豆',
  'chilli':'辣椒',
  'garlic':'蒜',
  'chive':'葱',
  'bamboo':'竹子',
  'tree': '树',
  'flower':'花',
};
/**
 * 职业
 */
const words = [
  // 动物
  ['老虎','长颈鹿','狮子','大象','马','熊','袋鼠','牛','绵羊','狗','猫','骆驼','蛇','兔子','熊猫','斑马','松鼠','狼','蜻蜓','蝴蝶','鱼','企鹅','蚊子','乌鸦','蝙蝠'],
  // 植物
  ['西红柿','黄瓜','胡萝卜','土豆','辣椒','蒜','葱','竹子','树','花'],
  // 水果
  ['西瓜','苹果','橘子','柠檬','香蕉','梨'],
  // 职业
  ['医生','教师','程序员','秘书','电工'],
  // 地点
  ['学校','公司','家','瀑布','森林','大海','山','沙漠','赌场','水池','海滩','厨房'],
  // 称谓
  ['爸爸','妈妈','爷爷','奶奶','叔叔','妹妹','哥哥'],
  // 国家 & 城市
  ['中国','美国','日本','泰国','北京','上海'],
  // 日用
  ['衣服','帽子','鞋子'],
  // 家具
  ['桌子','椅子','电脑','电视机','沙发','洗衣机','电饭煲','吸尘器'],
  // 天文
  ['火星','水星','地球','月球','太阳','银河系','宇宙'],
  // 交通
  ['飞机','火车','客车','汽车','热气球','船'],
  // 运动
  ['滑雪','足球','篮球','乒乓球','羽毛球','射击'],
  // 颜色
  ['红色','绿色','紫色','黑色','白色'],
  // 学校
  ['论文','图书馆','学生','天平','硫酸'],
  // 武器
  ['匕首','刀','棍子','飞镖','枪','炮','导弹'],
  // 其他
  ['战争','阴谋','账单','戒指','阴影','酒'],
  // 其他2
  ['互联网','可口可乐','药片','月饼','皇帝','诗']

]

const  getSingleWord =()=>{
  const group = words[Math.floor(Math.random()*words.length)];
  const word = group[Math.floor(Math.random()*group.length)];
  return word;
}

const getMultipleWords = (num) => {
  const result = [];
  for(let i = 0;i<num;i++){
    result.push(getSingleWord());
  }
  return result;
}

// console.log([...Object.values(plants)].map(item=>`'${item}'`).join(','))
// words.push(...Object.values(animals))
// words.push(...Object.values(plants))

module.exports = {
  words,
  getSingleWord,
  getMultipleWords
}