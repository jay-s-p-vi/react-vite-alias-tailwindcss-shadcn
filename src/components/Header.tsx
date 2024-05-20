import { ThemeSwitch } from "./theme-switch"

const Header = () => {
    return (
        <div className="fixed left-0 top-0 z-10 h-16 w-full bg-slate-100 dark:bg-slate-900 border-b dark:border-slate-600/80 border-slate-400/50 p-3 justify-between items-center flex">
            <div>Title Here</div>
            <ThemeSwitch />
        </div>
    )
}

export default Header
