import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    // hidden: true,
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: '', permissions: [] }
    }]
  }
]

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/announcement',
    component: Layout,
    noredirect: true,
    redirect: '/announcement/index',
    name: 'Announcement',
    meta: { title: '公告管理', permissions: [296, 297, 298, 299, 300] },
    children: [{
      path: 'index',
      name: 'Table',
      component: () => import('@/views/announcement/index'),
      meta: { title: '公告目录', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'release',
      name: 'Release',
      component: () => import('@/views/announcement/release'),
      meta: { title: '发布公告', permissions: [296, 297, 298, 299, 300] }
    },
    {
      // path: 'detail/:announcementId',
      path: 'detail',
      name: 'Detail',
      hidden: true,
      component: () => import('@/views/announcement/detail'),
      meta: { title: '详情查看', permissions: [296, 297, 298, 299, 300] }
    }]
  },
  {
    path: '/project',
    component: Layout,
    noredirect: true,
    redirect: '/project/index',
    name: 'Project',
    meta: { title: '项目管理', icon: '', permissions: [296, 297, 298, 299, 300] },
    children: [{
      path: 'index',
      name: 'Projecttable',
      component: () => import('@/views/project/index'),
      meta: { title: '项目维护', icon: '', permissions: [296, 297, 298, 299, 300] }
    }, {
      path: 'collectInformation',
      name: 'Collect',
      component: () => import('@/views/project/collectInformation'),
      meta: { title: '征收信息', icon: '', permissions: [296, 297, 298, 299, 300] }
    }, {
      path: 'trial',
      name: 'Trial',
      component: () => import('@/views/project/trial'),
      meta: { title: '项目初审', icon: '', permissions: [296, 297, 298, 299, 300] }
    }, {
      path: 'final',
      name: 'Final',
      component: () => import('@/views/project/final'),
      meta: { title: '项目终审', icon: '', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'collectList',
      name: 'CollectList',
      hidden: true,
      component: () => import('@/views/project/collectList'),
      meta: { title: '被征收户列表', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'registerEvictions',
      name: 'RegisterEvictions',
      hidden: true,
      component: () => import('@/views/project/registerEvictions'),
      meta: { title: '登记拆迁户', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'decorate',
      name: 'Decorate',
      hidden: true,
      component: () => import('@/views/project/decorate'),
      meta: { title: '房屋装修', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'view',
      name: 'View',
      hidden: true,
      component: () => import('@/views/project/view'),
      meta: { title: '查看', permissions: [296, 297, 298, 299, 300] }
    },
		{
		  path: 'mainBody',
		  name: 'MainBody',
		  hidden: true,
		  component: () => import('@/views/project/mainBody'),
		  meta: { title: '主体信息', permissions: [296, 297, 298, 299, 300] }
		},
    {
      path: 'trialList',
      name: 'TrialList',
      hidden: true,
      component: () => import('@/views/project/trialList'),
      meta: { title: '初审列表', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'trialCheck',
      name: 'TrialCheck',
      hidden: true,
      component: () => import('@/views/project/trialCheck'),
      meta: { title: '初审审核', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'finalList',
      name: 'FinalList',
      hidden: true,
      component: () => import('@/views/project/finalList'),
      meta: { title: '终审列表', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'finalCheck',
      name: 'FinalCheck',
      hidden: true,
      component: () => import('@/views/project/finalCheck'),
      meta: { title: '终审审核', permissions: [296, 297, 298, 299, 300] }
    }]
  },
  {
    path: '/demolition',
    component: Layout,
    meta: { title: '拆迁信息', icon: '', permissions: [296, 297, 298, 299, 300] },
    children: [{
      path: 'index',
      name: 'Demolition',
      component: () => import('@/views/demolition/index'),
      meta: { title: '拆迁信息', icon: '', permissions: [296, 297, 298, 299, 300] }
    }]
  },
  {
    path: '/report',
    component: Layout,
		noredirect: true,
		redirect: '/report/index',
		name: 'Reportindex',
    meta: { title: '报表管理', icon: '', permissions: [296, 297, 298, 299, 300] },
    children: [{
      path: 'index',
      name: 'Report',
      component: () => import('@/views/report/index'),
      meta: { title: '报表', icon: '', permissions: [296, 297, 298, 299, 300] }
    },{
      path: 'householdSummary',
      name: 'HouseholdSummary',
	  hidden: true,
      component: () => import('@/views/report/householdSummary'),
      meta: { title: '分户汇总表', icon: '', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'householdValue',
      name: 'HouseholdValue',
      hidden: true,
      component: () => import('@/views/report/householdValue'),
      meta: { title: '分户估价表', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'decorateValue',
      name: 'DecorateValue',
      hidden: true,
      component: () => import('@/views/report/decorateValue'),
      meta: { title: '装修评估表', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'householdReport',
      name: 'HouseholdReport',
      hidden: true,
      component: () => import('@/views/report/householdReport'),
      meta: { title: '分户估价报告', permissions: [296, 297, 298, 299, 300] }
    },
    {
      path: 'evaluationPublic',
      name: 'EvaluationPublic',
      hidden: true,
      component: () => import('@/views/report/evaluationPublic'),
      meta: { title: '初步评估公示', permissions: [296, 297, 298, 299, 300] }
    }]
  },
  {
    path: '/data',
    component: Layout,
    meta: { title: '数据管理', icon: '', permissions: [296, 297, 298, 299, 300] },
    children: [{
      path: 'index',
      name: 'Data',
      component: () => import('@/views/data/index'),
      meta: { title: '成套住宅房屋结构因素', icon: '', permissions: [296, 297, 298, 299, 300] }
    }, {
      path: 'uncomplete',
      name: 'Uncomplete',
      component: () => import('@/views/data/uncomplete'),
      meta: { title: '非成套住宅房屋结构因素', icon: '', permissions: [296, 297, 298, 299, 300] }
    }]
  },
  {
    path: '/system',
    component: Layout,
    noredirect: true,
    redirect: '/system/user/index',
    name: 'System',
    meta: { title: '系统管理', permissions: ['role.view', 'user.view'] },
    children: [{
      path: 'user/index',
      name: 'User',
      component: () => import('@/views/user/index'),
      meta: { title: '用户管理', permissions: ['user.view'] }
    },
    {
      path: 'role/index',
      name: 'Role',
      component: () => import('@/views/role/index'),
      meta: { title: '角色管理', permissions: ['role.view'] }
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
