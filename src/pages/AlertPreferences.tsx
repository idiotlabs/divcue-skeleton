import { useState } from "react"
import { Plus, Search, Trash2, Building2, Bell } from "lucide-react"
import Navigation from "@/components/layout/Navigation"
import { XButton } from "@/components/ui/x-button"
import { Input } from "@/components/ui/input"

interface SubscribedStock {
  id: string
  company: string
  ticker: string
  minAmount: string
}

const AlertPreferences = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [minAmount, setMinAmount] = useState("")
  const [subscribedStocks, setSubscribedStocks] = useState<SubscribedStock[]>([
    {
      id: "1",
      company: "삼성전자",
      ticker: "005930",
      minAmount: "₩300"
    },
    {
      id: "2", 
      company: "SK하이닉스",
      ticker: "000660",
      minAmount: "₩500"
    }
  ])

  const handleAddStock = () => {
    if (searchTerm.trim()) {
      const newStock: SubscribedStock = {
        id: Date.now().toString(),
        company: searchTerm,
        ticker: "000000", // 실제로는 검색 API에서 가져올 값
        minAmount: minAmount || "₩0"
      }
      setSubscribedStocks([...subscribedStocks, newStock])
      setSearchTerm("")
      setMinAmount("")
    }
  }

  const handleRemoveStock = (id: string) => {
    setSubscribedStocks(subscribedStocks.filter(stock => stock.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">알림 설정</h1>
          <p className="text-muted-foreground">
            관심 있는 종목을 추가하고 최소 배당금액을 설정해보세요.
          </p>
        </div>

        {/* Add Stock Section */}
        <div className="bg-card rounded-panel border shadow-card p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">종목 추가</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="회사명 또는 종목코드 입력..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="lg:w-48">
              <Input
                placeholder="최소 배당금액 (선택)"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
            </div>
            <XButton onClick={handleAddStock} disabled={!searchTerm.trim()}>
              <Plus className="h-4 w-4" />
              추가
            </XButton>
          </div>
        </div>

        {/* Subscribed Stocks */}
        <div className="bg-card rounded-panel border shadow-card p-6">
          <h2 className="text-xl font-semibold mb-4">구독 중인 종목</h2>
          
          {subscribedStocks.length > 0 ? (
            <div className="space-y-4">
              {subscribedStocks.map((stock) => (
                <div key={stock.id} className="flex items-center justify-between p-4 border rounded-card hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{stock.company}</h3>
                      <p className="text-sm text-muted-foreground">{stock.ticker}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">최소 배당금액</p>
                      <p className="font-medium">{stock.minAmount}</p>
                    </div>
                    <XButton
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStock(stock.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </XButton>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-panel bg-muted mb-4">
                <Bell className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">구독 중인 종목이 없습니다</h3>
              <p className="text-muted-foreground mb-4">
                관심 있는 종목을 추가하여 배당 공시 알림을 받아보세요.
              </p>
            </div>
          )}
        </div>

        {/* Alert Settings */}
        {subscribedStocks.length > 0 && (
          <div className="bg-card rounded-panel border shadow-card p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">알림 설정</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">이메일 알림</h3>
                  <p className="text-sm text-muted-foreground">배당 공시를 이메일로 받습니다</p>
                </div>
                <div className="h-6 w-11 bg-primary rounded-full relative">
                  <div className="absolute right-0 top-0 h-6 w-6 bg-white rounded-full shadow transform translate-x-0"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">텔레그램 알림</h3>
                  <p className="text-sm text-muted-foreground">Pro 플랜에서 이용 가능합니다</p>
                </div>
                <div className="h-6 w-11 bg-muted rounded-full relative">
                  <div className="absolute left-0 top-0 h-6 w-6 bg-white rounded-full shadow"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AlertPreferences