import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Moon, Sun, Menu, X, TrendingUp } from "lucide-react"
import { XButton } from "@/components/ui/x-button"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const navLinks = [
    { href: "/", label: "대시보드" },
    { href: "/dividends", label: "배당 리스트" },
    { href: "/preferences", label: "알림 설정" },
    { href: "/billing", label: "구독" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold">DivCue</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActiveLink(link.href) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark mode toggle */}
            <XButton
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="h-9 w-9 p-0"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </XButton>

            {/* Auth buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <XButton variant="ghost" size="sm">
                  로그인
                </XButton>
              </Link>
              <Link to="/register">
                <XButton variant="primary" size="sm">
                  회원가입
                </XButton>
              </Link>
            </div>

            {/* Mobile menu button */}
            <XButton
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden h-9 w-9 p-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </XButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                    isActiveLink(link.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <XButton variant="ghost" size="sm" className="w-full justify-start">
                    로그인
                  </XButton>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <XButton variant="primary" size="sm" className="w-full justify-start">
                    회원가입
                  </XButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation