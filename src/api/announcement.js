import request from '@/utils/request'

export function getAnnouncementList() {
  return request({
    url: 'tss/announcement/list',
    method: 'post',
    data: {}
  })
}
