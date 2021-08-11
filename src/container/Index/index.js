
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { UserContext } from '~/store'
import useTitle from '@/UseTitle'
import './style.less'

export default () => {
  useTitle('首页')
  const { data } = useSWR(['/api/list/queryListAll'])
  const { user, resetUser } = useContext(UserContext)

  return (
    <div className="index">
      姓名:{user.name} 年龄：{user.age}
      <a onClick={() => resetUser({ age: 24 })}>切换年龄</a>
      <div className="lists">
        <div className="list">11</div>
        <div className="list">22</div>
        <div className="list">33</div>
      </div>
      <Link to="/list">跳转list</Link>
    </div>
  )
}
