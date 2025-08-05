import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import { XButton } from "@/components/ui/x-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          {/* 404 Icon */}
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mb-8">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">404</h1>
          
          {/* Description */}
          <h2 className="text-xl font-semibold mb-2">페이지를 찾을 수 없습니다</h2>
          <p className="text-muted-foreground mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 다시 확인해주세요.
          </p>

          {/* Current Path */}
          <div className="bg-muted rounded-card p-3 mb-8">
            <code className="text-sm text-muted-foreground">
              {location.pathname}
            </code>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/">
              <XButton size="lg" className="w-full">
                <Home className="h-4 w-4" />
                홈으로 돌아가기
              </XButton>
            </Link>
            <Link to="/dividends">
              <XButton variant="outline" size="lg" className="w-full">
                배당 리스트 보기
              </XButton>
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              문제가 계속되면{" "}
              <a href="mailto:support@divcue.com" className="text-primary hover:underline">
                고객지원
              </a>
              으로 연락해주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
