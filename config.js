/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'SmartCreate-智能创见', // 社区名字
  description: '移动虚拟现实系统开发者社区', // 社区的描述，
  keywords: 'Cardboard, Vitual Reality, Cardboard SDK, ԎϷ¿ª·¢, Unity3d',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  site_logo: '/public/images/2015-11-21_003717.png', // default is `name`
  site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com 
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'http://www.smartcreate.net',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/node_club_dev',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,

  session_secret: 'smartcreate_club_secret', // 务必修改
  auth_cookie_name: 'smartcreate_club',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: 'Cardboard 移动虚拟现实系统开发者专业中文社区',
    link: 'www.smartcreate.net',
    language: 'zh-cn',
    description: 'Cardboard 移动虚拟现实系统开发者专业中文社区',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'smartcreate@126.com',
      pass: 'ksoqpardehvnvykp'
    }
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { user_login_name: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: 'your GITHUB_CLIENT_ID',
    clientSecret: 'your GITHUB_CLIENT_SECRET',
    callbackURL: 'http://cnodejs.org/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    domain: 'http://your qiniu domain',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx',
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
    ['DIY', '眼镜盒子制作'],
    ['u3d', 'Unity3d虚拟现实游戏开发'],
    ['cardboardsdk', 'Google Cardboard SDK'],
    ['dev', '外围交互设备开发'],
    ['opt', '游戏性能优化'],
    ['videomake', 'VR视频制作'],
    ['publish', 'VR作品'],
  ],

  // 极光推送
  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false,
  },

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  visit_per_day: 1000, // 每个 ip 每天能访问的次数
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
