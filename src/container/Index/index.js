
import React, { useEffect } from 'react'
import useSWR from 'swr'
import useTitle from '@/UseTitle'
import avatarImg from '../../images/avatar.jpg'
import './style.less'

export default () => {
  useTitle('首页')
  const { data } = useSWR(['/api/list/queryListAll'])
  return (
    <div className="index">
      测试
      {/* <img src={avatarImg} alt="" /> */}
    </div>
  )
}
