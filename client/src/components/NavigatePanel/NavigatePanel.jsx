import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { useBreadCrumb } from '../../hooks/useBreadCrumb'

const NavigatePanel = ({ startFrom }) => {
  const { navigate, pathNames, reNavigate } = useBreadCrumb()
  return (
    <Breadcrumb style={{ marginBottom: '20px' }}>
      <Breadcrumb.Item style={{ cursor: 'pointer' }} onClick={reNavigate}>
        {startFrom}
      </Breadcrumb.Item>
      {pathNames.map((pathname, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
        const isLast = index === pathNames.length - 1
        return isLast ? (
          <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item
            style={{ cursor: 'pointer' }}
            key={index}
            onClick={() => navigate(routeTo)}
          >
            {pathname}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default NavigatePanel
