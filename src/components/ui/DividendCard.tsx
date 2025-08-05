import { Building2, Calendar, DollarSign, ExternalLink } from "lucide-react"
import { XButton } from "./x-button"
import { cn } from "@/lib/utils"

interface DividendCardProps {
  company: string
  ticker: string
  dividendAmount: string
  recordDate: string
  paymentDate: string
  className?: string
  isHighYield?: boolean
}

const DividendCard = ({
  company,
  ticker,
  dividendAmount,
  recordDate,
  paymentDate,
  className,
  isHighYield = false
}: DividendCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-card border shadow-card card-hover p-6",
      className
    )}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">{company}</h3>
            <p className="text-sm text-muted-foreground">{ticker}</p>
          </div>
        </div>
        {isHighYield && (
          <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md">
            고배당
          </span>
        )}
      </div>

      {/* Dividend Amount */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <DollarSign className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">배당금</span>
        </div>
        <p className="text-2xl font-bold text-primary">{dividendAmount}</p>
      </div>

      {/* Dates */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">기준일</span>
          </div>
          <span className="font-medium">{recordDate}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">지급일</span>
          </div>
          <span className="font-medium">{paymentDate}</span>
        </div>
      </div>

      {/* Action Button */}
      <XButton variant="outline" size="sm" className="w-full">
        상세보기
        <ExternalLink className="h-3 w-3" />
      </XButton>
    </div>
  )
}

export default DividendCard