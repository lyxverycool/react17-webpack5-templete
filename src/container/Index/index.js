
import React from 'react'
import useTitle from '@/UseTitle'
import avatarImg from '../../images/avatar.jpg'
import './style.less'

export default () => {
  useTitle('首页')
  return (
    <div className="list">
      <img src={avatarImg} alt="" />
    </div>
  )
}
