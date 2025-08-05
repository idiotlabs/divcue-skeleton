import { ArrowRight, Bell, Search, Zap, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "@/components/layout/Navigation"
import { XButton } from "@/components/ui/x-button"
import DividendCard from "@/components/ui/DividendCard"

const Dashboard = () => {
  // 샘플 데이터
  const recentDividends = [
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
    }
  ]

  const howItWorksSteps = [
    {
      icon: Search,
      title: "실시간 모니터링",
      description: "DART 공시를 24시간 실시간으로 수집하여 배당 정보를 즉시 감지합니다."
    },
    {
      icon: Bell,
      title: "즉시 알림",
      description: "이메일, 텔레그램, 웹 대시보드를 통해 5분 이내에 알림을 받아보세요."
    },
    {
      icon: Zap,
      title: "빠른 의사결정",
      description: "깔끔하게 정리된 배당 정보로 투자 기회를 놓치지 마세요."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            배당 공시, 5분 안에 받아보세요
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            한국 상장사의 현금배당 공시를 실시간으로 모니터링하고 
            즉시 알림을 받아 투자 기회를 놓치지 마세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <XButton size="xl" className="w-full sm:w-auto">
                무료로 시작하기
                <ArrowRight className="h-5 w-5" />
              </XButton>
            </Link>
            <Link to="/dividends">
              <XButton variant="outline" size="xl" className="w-full sm:w-auto">
                배당 정보 보기
              </XButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Dividends */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">최근 배당 공시</h2>
            <Link to="/dividends">
              <XButton variant="outline">
                전체보기
                <ArrowRight className="h-4 w-4" />
              </XButton>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDividends.map((dividend, index) => (
              <DividendCard
                key={index}
                {...dividend}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">어떻게 작동하나요?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-panel bg-gradient-primary mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">요금제</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-card rounded-panel border shadow-card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-3xl font-bold">₩0<span className="text-lg text-muted-foreground">/월</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>월 10개 알림</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>이메일 알림</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>웹 대시보드</span>
                </li>
              </ul>
              <Link to="/register">
                <XButton variant="outline" className="w-full">
                  시작하기
                </XButton>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-card rounded-panel border-2 border-primary shadow-hover p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  추천
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-3xl font-bold text-primary">₩3,900<span className="text-lg text-muted-foreground">/월</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>무제한 알림</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>이메일 + 텔레그램 알림</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>고급 필터링</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  <span>우선 고객 지원</span>
                </li>
              </ul>
              <Link to="/billing">
                <XButton className="w-full">
                  Pro로 업그레이드
                </XButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 DivCue. 한국 상장사 현금배당 실시간 알림 서비스
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard