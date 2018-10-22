import Vue from 'vue'
import Router from 'vue-router'

const components = {
  home:()=>import ('@/views/home/home'),//首页
  notice:()=>import ('@/views/notice/notice'),//通知早知道
  mine:()=>import ('@/views/mine/mine'),//我的党建
  login:()=>import('@/views/login/login'),//登录
  newseye:()=>import('@/views/newseye/index'),//信工新闻盐
  dangjian:()=>import('@/views/dangjian/index'),//党建一点通
  showdy:()=>import('@/views/showdy/index'),//当原谅身份
  newsDetail:()=>import('@/views/notice/detail/details'),//唱片详情页
  newsDetail1:()=>import('@/views/home/deturl/index'),//图片信息详情
  anytimestudy:()=>import('@/views/home/study/anystu'),//随时随地学
  anytimephoto:()=>import('@/views/home/study/angphone'),//随时随地拍
  System:()=>import('@/views/home/study/system'),//制度建设
  activity:()=>import('@/views/home/study/activity'),//特色活动
  lift:()=>import('@/views/lift/index'),//掌上基本生活
  study:()=>import('@/views/lift/zjstudy/index'),//政治学习
  auditStatus:()=>import('@/views/lift/sixiang/index'),
  liftChoice:()=>import('@/views/lift/mzconnect/index'),//民主评议
  finddorg:()=>import('@/views/lift/team/index'),//找组织
  xinxi:()=>import('@/views/mine/xinxi/index'),
  yunhudong:()=>import('@/views/yunhudong/index')//云互动
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: components.home,
    },
    {
      path: '/lift',
      name: 'lift',
      meta:{
        title:'掌上组织生活'
      },
      component: components.lift,
    },
    {
      path: '/yunhudong',
      name: 'lift',
      meta:{
        title:'党员云互动'
      },
      component: components.yunhudong,
    },
    {
      path: '/study',
      name: 'study',
      meta:{
        title:'政治学习'
      },
      component: components.study,
    },
    {
      path: '/auditStatus',
      name: 'auditStatus',
      component: components.auditStatus,
    },
    {
      path: '/liftChoice',
      name: 'liftChoice',
      meta:{
        title:'掌上组织生活'
      },
      component: components.liftChoice,
    },
    {
      path: '/finddorg',
      name: 'finddorg',
      meta:{
        title:'流动党员找组织'
      },
      component: components.finddorg,
    },
    {
      path:'/newseye',
      name:'newseye',
      meta:{
        title:'信工新闻眼'
      },
      component:components.newseye
    },
    {
      path:'/anytimestudy',

      name:'anytimestudy',
      meta:{
        title:'随时随地学'
      },
      component:components.anytimestudy
    },
    {
      path:'/anytimephoto',
      name:'anytimephoto',
      meta:{
        title:'随时随地拍'
      },
      component:components.anytimephoto
    },
    {
      path:'/System',
      name:'System',
      meta:{
        title:'制度建设'
      },
      component:components.System
    },
    {
      path:'/activity',
      name:'activity',
      meta:{
        title:'特色活动'
      },
      component:components.activity
    },
    {
      path:'/dangjian',
      name:'dangjian',
      meta:{
        title:'党建一点通',
      },
      component:components.dangjian
    },

    {
      path:'/showdy',
      name:'showdy',
      meta:{
        title:'党员亮身份'
      },
      component:components.showdy
    },
    {
      path:'/notice',
      name:'notice',
      meta:{
        title:'通知早知道'
      },
      component:components.notice
    },
    {
      path:'/newsDetail1/:url',
      name:'newsDetailUrl',
      component:components.newsDetail1
    },
    {
      path:'/newsDetail/:id',
      name:'newsDetail',

      component:components.newsDetail
    },
    {
      path:'/mine',
      name:'mine',
      meta:{
        title:'我的党建'
      },
      component:components.mine
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录'
      },
      component:components.login
    },
    {
      path:'/xinxi',
      name:'xinxi',
      meta:{
        title:'xinxi'
      },
      component:components.xinxi
    }
  ]
})
