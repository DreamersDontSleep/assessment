import request from '@/utils/request'

export function addCode(para) {
  return request({
    url: 'tss/dictionary/saveDictionary',
    method: 'post',
    data: para
  })
}

export function getAllcodeData(para) {
  return request({
    url: 'tss/dictionary/findDictionaryByBatch?codes=' + para,
    method: 'get',
    data: {}
  })
}