let roles = [
  {
    id: 0,
    name: '旁白',
    karma: 0,//因果，业障
    friend: 0,//友好值
    health: 100,//健康
    god: 0,//神性
    human: 0,//人性
    devil: 0,//魔性
  },
  {
    id: 1,
    name: '阿季卢尔福',
    karma: 0,//因果，业障
    friend: 100,//友好值
    health: 100,//健康
    god: 100,//神性
    human: 1,//人性
    devil: 0,//魔性
  },
  {
    id: 2,
    name: '查里曼大帝',
    karma: 0,//因果，业障
    friend: 0,//友好值
    health: 80,//健康
    god: 0,//神性
    human: 1,//人性
    devil: 0,//魔性
  },
  {
    id: 3,
    name: '骑士甲',
    karma: 0,//因果，业障
    friend: 0,//友好值
    health: 80,//健康
    god: 0,//神性
    human: 1,//人性
    devil: 0,//魔性
  },
];

let events = [
  {
    id: 0,
    content: [
      {rid: 0, text: '公元 768 年法兰克王国边境'},
      {rid: 2, text: '法兰克的 卫士，您是谁？'},
      {rid: 3, text: '鄙人是布列塔尼的所罗门，陛下!我们有5000名骑兵，3500位步兵和1800个侍从，每一个都至少征战过5年。'},
      {rid: 2, text: '很好！请退回布列塔尼人的队列，勇士！'},
    ],
    background: 'bg01.png',
    nextEvent: 1,
  },
  {
    id: 1,
    content: [

    ],
    background: 'bg02.png',
    nextEvent: 2,
  },
  {
    id: 1,
    content: [

    ],
    background: 'bg02.png',
    nextEvent: 0,
  }
];

let content = {};

function initData() {
  content['events'] = events;
  content['roles'] = roles;
  return content
}

module.exports = initData;
