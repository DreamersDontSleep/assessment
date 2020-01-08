import request from '@/utils/request'

// url写法
export function getProjectList(params) {
  return request({
    url: '/tss/project/list',
    method: 'get',
    params
  })
}

export function addNewProject(para) {
  return request({
    url: '/tss/project/add',
    method: 'post',
    data: para
  })
}

export function searchProjectData(para) {
  return request({
    url: '/tss/project/list/$' + para,
    method: 'get',
    data: {}
  })
}

export function getProjectId() {
  return request({
    url: '/tss/project/getProjectId',
    method: 'get',
    data: {}
  })
}

export function deleteProject(para) {
  return request({
    url: '/tss/project/delete/$' + para,
    method: 'get',
    data: {}
  })
}

export function updateProject(para) {
  return request({
    url: '/tss/project/update',
    method: 'post',
    data: para
  })
}

export function removeUser(para) {
  return request({
    url: '/tss/project/list/' + para,
    method: 'post',
    data: {}
  })
}

export function register(paraId,para) {
  return request({
    url: '/tss/households/add/$' + paraId,
    method: 'post',
    data: para
  })
}

export function getRegList(para) {
  return request({
    url: '/tss/households/listInProject/$' + para,
    method: 'get',
    data: {}
  })
}

export function updateRegList(paraId,para) {
  return request({
    url: '/tss/households/update/$' + paraId,
    method: 'post',
    data: para
  })
}

export function searchHouseholdList(para) {
  return request({
    url: '/tss/households/list/$' + para,
    method: 'get',
    data: {}
  })
}

export function saveDecorate(paraId,para) {
  return request({
    url: '/tss/households/saveRenovation/$' + paraId,
    method: 'post',
    data: para
  })
}

export function getDecorateList(para) {
  return request({
    url: '/tss/households/getRenovationByHouseholdsId/$' + para,
    method: 'get',
    data: {}
  })
}

export function getTrialList() {
  return request({
    url: '/tss/review/listProject',
    method: 'get',
    data: {}
  })
}

export function getCheckList(para,level) {
  return request({
    url: '/tss/review/listHousehold/$' + para + '/$' + level,
    method: 'get',
    data: {}
  })
}

export function postTrailList(para,cmd,act,reviewLevel) {
  return request({
    url: '/tss/review/$' + para + '?' + 'command=' + cmd + '&' + 'action=' + act + '&' + 'reviewLevel=' + reviewLevel,
    method: 'get', 
    data: {}
  })
}

export function postCheckId(param) {
  return request({
    url: '/tss/review/add/$' + param,
    method: 'get',
    data: {}
  })
}

export function getTrialInfoList(param) {
  return request({
    url: '/tss/project/trialInfo',
    method: 'post',
    data: param
  })
}

export function getFinalList() {
  return request({
    url: '/tss/review/listProject',
    method: 'get',
    data: {}
  })
}

export function getFinalInfoList(param) {
  return request({
    url: '/tss/project/finalInfo',
    method: 'post',
    data: param
  })
}