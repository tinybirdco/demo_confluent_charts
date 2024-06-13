'use client'

import { DonutChart } from '@tinybirdco/charts'

export function UTMSales() {
  return (
    <DonutChart
      endpoint="https://api.us-east.tinybird.co/v0/pipes/utm_sales.json"
      token="your_token"
      index="utm_source"
      categories={['total_sales']}
      borderRadius="4px"
      boxShadow="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      title="UTM Sales"
      showLegend={true}
      height="500px"
      padding="16px"
    />
  )
}