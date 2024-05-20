import { useTheme } from '@/components/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {
                if (theme === 'light') {
                    setTheme('dark')
                } else if (theme === 'dark') {
                    setTheme('light')
                }
            }}
        >
            <Sun className="w-h-5 h-5 rotate-0 scale-100 text-black transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="w-h-5 absolute h-5 rotate-90 scale-0 text-white transition-transform dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
