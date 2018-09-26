import request from '@/utils/request'
import axios from 'axios'
import qs from 'qs'
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  console.log(data)
  return request({
    url: 'login.php',
    method: 'post',
    data:qs.stringify(data)
  })
}