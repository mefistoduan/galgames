// author: 八方龙杀阵

var datas = [
  {
    id : 1,
    role : {id : 1},
    content : '公元 768 年法兰克王国边境',
    next : {id : 2},
    backgroundImage : 'bg01.jpg'
  },
  {
    id : 2,
    role : {id : 1},
    content : '这里是第二句话',
    next : {id : 3},
    backgroundImage : 'bg01.jpg'
  },
  {
    id : 3,
    role : {id : 2},
    content : '这里是第三句话',
    backgroundImage : 'bg01.jpg',
    next : {
      choice : [
        {text : '回到第一句', id : 1},
        {text : '游戏结束', id : 4}
      ]
    }
  },
  {
    id : 4,
    content : '游戏结束',
    backgroundImage : 'office2.jpg'
  }
];
var roles = [
  {
    id : 0,
    name : '旁白',
    karma : 0,//因果，业障
    friend : 0,//友好值
    health : 100,//健康
    god : 0,//神性
    human : 0,//人性
    devil : 0,//魔性
  },
  {
    id : 1,
    name : '阿季卢尔福',
    karma : 0,//因果，业障
    friend : 100,//友好值
    health : 100,//健康
    god : 100,//神性
    human : 1,//人性
    devil : 0,//魔性
  },
  {
    id : 2,
    name : '查里曼大帝',
    karma : 0,//因果，业障
    friend : 0,//友好值
    health : 80,//健康
    god : 0,//神性
    human : 1,//人性
    devil : 0,//魔性
  },
];

//var speaker_1 = {
//	name:'角色A',
//	karma:0,//因果，业障
//	friend:0,//友好值
//	health:100,//健康
//	god:0,//神性
//	human:1,//人性
//	devil:0,//魔性
//}
let dataList = {};
let roleList = {};
let content = {};

// 信息、角色等基础数据由数据对象维护
function initData(){
  // $.each(datas, function(i, item){
  //     dataList[item.id] = item;
  // });
  // $.each(roles, function(i, item){
  //     roleList[item.id] = item;
  // });


  // datas.forEach(function (e,i) {
  //     dataList[e.id] = i;
  // });
  // roles.forEach(function (e,i) {
  //     roleList[e.id] = i;
  // });
  content['datas'] = datas;
  content['roles'] = roles;
  return  content
}

module.exports = initData;
