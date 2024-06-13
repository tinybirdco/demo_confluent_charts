'use client'

import { AreaChart } from '@tinybirdco/charts'

export function SalesTrend() {
  return (
    <AreaChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/sales_trend.json"
      token="your_token"
      index="ts"
      categories={['total_sales']}
      colorPalette={['#27F795', '#008060']}
      borderRadius="4px"
      boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      title="Sales Trend"
      height="500px"
      padding="16px"
    />
  )
}