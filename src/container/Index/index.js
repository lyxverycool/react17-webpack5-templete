
import React, { useEffect } from 'react'
import useSWR from 'swr'
import useTitle from '@/UseTitle'
import './style.less'

export default () => {
  useTitle('首页')
  const { data } = useSWR(['/api/list/queryListAll'])
  return (
    <div className="index">
      <div className="lists">
        <div className="list">11</div>
        <div className="list">22</div>
        <div className="list">33</div>
      </div>
    </div>
  )
}
