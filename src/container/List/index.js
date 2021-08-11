
import React, { useContext } from 'react'
import useTitle from '@/UseTitle'
import { UserContext } from '~/store'
import avatarImg from '../../images/avatar.jpg'
import './style.less'

const List = () => {
  useTitle('测试')
  const { user, resetUser } = useContext(UserContext)
  return (
    <div className="list">
      姓名:{user.name} 年龄：{user.age}
      <a onClick={() => resetUser({ age: 22 })}>切换年龄</a>
    </div>
  )
}

export default List
