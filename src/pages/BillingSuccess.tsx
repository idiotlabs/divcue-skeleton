import { CheckCircle, ArrowRight, Crown } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "@/components/layout/Navigation"
import { XButton } from "@/components/ui/x-button"

const BillingSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary mb-8">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">
            구독이 활성화되었습니다!
          </h1>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8">
            이제 DivCue Pro의 모든 기능을 이용하실 수 있습니다. 
            무제한 알림과 고급 기능으로 투자 기회를 놓치지 마세요.
          </p>

          {/* Pro Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white rounded-full text-sm font-medium mb-8">
            <Crown className="h-4 w-4 mr-2" />
            DivCue Pro 회원
          </div>

          {/* Features List */}
          <div className="bg-card rounded-panel border p-6 mb-8 text-left">
            <h3 className="font-semibold mb-4 text-center">이제 이용 가능한 기능들:</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-3" />
                <span className="text-sm">무제한 배당 알림</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-3" />
                <span className="text-sm">텔레그램 실시간 알림</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-3" />
                <span className="text-sm">고급 필터링 및 분석</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-3" />
                <span className="text-sm">우선 고객 지원</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/">
              <XButton size="lg" className="w-full">
                대시보드로 이동
                <ArrowRight className="h-4 w-4" />
              </XButton>
            </Link>
            <Link to="/preferences">
              <XButton variant="outline" size="lg" className="w-full">
                알림 설정하기
              </XButton>
            </Link>
          </div>

          {/* Support Note */}
          <div className="mt-8 p-4 bg-muted rounded-panel">
            <p className="text-sm text-muted-foreground">
              궁금한 점이 있으시면 언제든지 
              <span className="font-medium text-primary"> support@divcue.com </span>
              으로 연락해주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingSuccess