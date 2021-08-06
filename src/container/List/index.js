
import React from 'react'
import useTitle from '@/UseTitle'
import avatarImg from '../../images/avatar.jpg'
import './style.less'

const List = () => {
  useTitle('测试')
  return (
    <div className="list">
      测试页面
      <img src={avatarImg} alt="" />
    </div>
  )
}

export default List
