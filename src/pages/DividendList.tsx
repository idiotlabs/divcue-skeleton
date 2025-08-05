import { useState } from "react"
import { Search, Filter, Calendar, TrendingUp } from "lucide-react"
import Navigation from "@/components/layout/Navigation"
import { XButton } from "@/components/ui/x-button"
import DividendCard from "@/components/ui/DividendCard"
import { Input } from "@/components/ui/input"

const DividendList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [isRecentFilter, setIsRecentFilter] = useState(true)
  const [isHighYieldFilter, setIsHighYieldFilter] = useState(false)

  // 샘플 데이터 (실제로는 API에서 가져올 데이터)
  const dividends = [
    {
      company: "삼성전자",
      ticker: "005930",
      dividendAmount: "₩366",
      recordDate: "2024.03.29",
      paymentDate: "2024.05.17",
      isHighYield: false
    },
    {
      company: "SK하이닉스",
      ticker: "000660", 
      dividendAmount: "₩1,000",
      recordDate: "2024.03.29",
      paymentDate: "2024.05.20",
      isHighYield: true
    },
    {
      company: "LG화학",
      ticker: "051910",
      dividendAmount: "₩7,000",
      recordDate: "2024.03.29", 
      paymentDate: "2024.05.24",
      isHighYield: true
    },
    {
      company: "현대자동차",
      ticker: "005380",
      dividendAmount: "₩1,500",
      recordDate: "2024.03.28",
      paymentDate: "2024.05.22",
      isHighYield: false
    },
    {
      company: "NAVER",
      ticker: "035420",
      dividendAmount: "₩50",
      recordDate: "2024.03.27",
      paymentDate: "2024.05.21",
      isHighYield: false
    },
    {
      company: "카카오",
      ticker: "035720",
      dividendAmount: "₩30",
      recordDate: "2024.03.26",
      paymentDate: "2024.05.19",
      isHighYield: false
    }
  ]

  // 필터링 로직
  const filteredDividends = dividends.filter(dividend => {
    const matchesSearch = dividend.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dividend.ticker.includes(searchTerm)
    const matchesHighYield = !isHighYieldFilter || dividend.isHighYield
    
    return matchesSearch && matchesHighYield
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">배당 공시 리스트</h1>
          <p className="text-muted-foreground">
            최신 배당 공시 정보를 확인하고 관심 종목을 추가해보세요.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-card rounded-panel border shadow-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="회사명 또는 종목코드 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <XButton
                variant={isRecentFilter ? "primary" : "outline"}
                size="sm"
                onClick={() => setIsRecentFilter(!isRecentFilter)}
              >
                <Calendar className="h-4 w-4" />
                최근 30일
              </XButton>
              <XButton
                variant={isHighYieldFilter ? "accent" : "outline"}
                size="sm"
                onClick={() => setIsHighYieldFilter(!isHighYieldFilter)}
              >
                <TrendingUp className="h-4 w-4" />
                고배당만
              </XButton>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            총 <span className="font-medium text-foreground">{filteredDividends.length}</span>개의 배당 공시
          </p>
        </div>

        {/* Dividend Cards Grid */}
        {filteredDividends.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredDividends.map((dividend, index) => (
              <DividendCard
                key={index}
                {...dividend}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-panel bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">검색 결과가 없습니다</h3>
            <p className="text-muted-foreground mb-4">
              다른 검색어로 다시 시도해보세요.
            </p>
            <XButton 
              variant="outline" 
              onClick={() => {
                setSearchTerm("")
                setIsHighYieldFilter(false)
              }}
            >
              필터 초기화
            </XButton>
          </div>
        )}

        {/* Load More */}
        {filteredDividends.length > 0 && (
          <div className="text-center">
            <XButton variant="outline" size="lg">
              더 보기
            </XButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default DividendList