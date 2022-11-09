import React, { useEffect, useState } from 'react'
// import { useFetching } from '../../hooks/useFetching'
// import ProductService from '../../API/ProductService'
import { Avatar, Card, Switch } from 'antd'
const { Meta } = Card

const ActualCard = () => {
  const [loading, setLoading] = useState(true)

  const onChange = (checked) => {
    setLoading(!checked)
  }

  return (
    <>
      <Switch style={{ width: 10 }} checked={!loading} onChange={onChange} />
      <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="ActualCard title"
          description="This is the description"
        />
      </Card>
    </>
  )
}

export default ActualCard
