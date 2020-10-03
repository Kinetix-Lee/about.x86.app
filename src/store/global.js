export default {
  // debug: true,
  state: {
    avatarMouseover: false,
    introduction: '',
  },
  setAvatarMouseover(newValue) {
    // if (this.debug) console.log('avatarMouseover = ', newValue);
    this.state.avatarMouseover = newValue;
  },
  generateIntroductionAuto() {
    this.introductionToDisplay = Math.round(Math.random() * 6);
    this.introduction = this.introductionList[this.introductionToDisplay];
    return this.introduction;
  },
  linkList: [
    {
      index: 'QQ',
      name: 'QQ',
      target: 'https://wpa.qq.com/msgrd?v=3&uin=202938099&site=qq&menu=yes',
    },
    {
      index: 'NCM',
      name: '网易云音乐',
      target: 'https://music.163.com/#/user/home?id=341431918',
    },
    {
      index: 'BiliBili',
      name: '哔哩哔哩',
      target: 'https://space.bilibili.com/182888860',
    },
    // {
    //   index: 'Twitter',
    //   name: 'Twitter',
    //   target: 'https://twitter.com/Kinetixxx_',
    // },
    {
      index: 'GitHub',
      name: 'GitHub',
      target: 'https://github.com/Kinetix-Lee',
    },
    {
      index: 'Kdev',
      name: 'Kdev',
      target: 'https://x86.app/',
    },
    // {
    //   index: 'default',
    //   target: '/',
    // },
  ],
  introductionList: [
    '四肢不发达，头脑很简单。',
    'console.log(\'Hello world!\');',
    '学生，啥都不会的业余的打代码的。',
    '<span class="light">Trouble making. </span>Redefined. ',
    '<span class="light">Mess making. </span>Redefined. ',
    'Hi there! Here\'s Kinetix. ',
    '你好，我是 Kinetix。',
  ],
};
