import { CheckCircle, Crown, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "@/components/layout/Navigation"
import { XButton } from "@/components/ui/x-button"

const Billing = () => {
  const freeFeatures = [
    "월 10개 알림",
    "이메일 알림",
    "웹 대시보드 접근",
    "기본 필터링",
    "커뮤니티 지원"
  ]

  const proFeatures = [
    "무제한 알림",
    "이메일 + 텔레그램 알림",
    "고급 필터링 옵션",
    "배당 수익률 분석",
    "우선 고객 지원",
    "API 접근 권한",
    "사용자 정의 알림 설정",
    "배당 캘린더 기능"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            요금제 선택
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            투자에 필요한 배당 정보를 더 빠르고 정확하게 받아보세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Free Plan */}
          <div className="bg-card rounded-panel border shadow-card p-8">
            <div className="text-center mb-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-panel bg-muted mb-4">
                <Zap className="h-6 w-6 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Free</h2>
              <div className="text-4xl font-bold mb-2">
                ₩0
                <span className="text-lg text-muted-foreground font-normal">/월</span>
              </div>
              <p className="text-muted-foreground">개인 투자자를 위한 기본 플랜</p>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/register">
              <XButton variant="outline" size="lg" className="w-full">
                무료로 시작하기
              </XButton>
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-card rounded-panel border-2 border-primary shadow-hover p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Crown className="h-4 w-4 mr-1" />
                가장 인기있는 플랜
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-panel bg-gradient-primary mb-4">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Pro</h2>
              <div className="text-4xl font-bold mb-2 text-primary">
                ₩3,900
                <span className="text-lg text-muted-foreground font-normal">/월</span>
              </div>
              <p className="text-muted-foreground">전문 투자자를 위한 프리미엄 플랜</p>
            </div>

            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/billing/success">
              <XButton size="lg" className="w-full">
                Pro로 업그레이드
              </XButton>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">자주 묻는 질문</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-panel border p-6">
              <h3 className="font-semibold mb-2">언제든지 플랜을 변경할 수 있나요?</h3>
              <p className="text-muted-foreground">
                네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 
                변경 사항은 다음 결제 주기부터 적용됩니다.
              </p>
            </div>
            <div className="bg-card rounded-panel border p-6">
              <h3 className="font-semibold mb-2">알림은 얼마나 빠르게 받을 수 있나요?</h3>
              <p className="text-muted-foreground">
                DART 공시가 등록된 후 평균 3-5분 이내에 알림을 받아보실 수 있습니다.
              </p>
            </div>
            <div className="bg-card rounded-panel border p-6">
              <h3 className="font-semibold mb-2">환불 정책은 어떻게 되나요?</h3>
              <p className="text-muted-foreground">
                구독 후 7일 이내에 100% 환불이 가능합니다. 
                서비스에 만족하지 않으시면 언제든지 연락주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing