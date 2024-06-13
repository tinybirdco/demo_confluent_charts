import { SalesTrend } from "@/components/SalesTrend"
import { UTMSales } from "@/components/UTMSales"

export default function SalesDashboard() {
  return (
    <main className="flex-col p-10 gap-8">
      <h1 className="text-2xl font-bold my-8">Tinybird Charts</h1>
      <div className="grid grid-cols-2 gap-8">
        <SalesTrend />
        <UTMSales />
      </div>
    </main>
  )
}