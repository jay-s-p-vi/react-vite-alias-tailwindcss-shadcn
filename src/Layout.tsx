import React, { ReactNode, Suspense } from 'react'
import Header from '@/components/Header'
import { cn } from '@/lib/utils'

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={cn('h-full w-full duration-300')}>
            <Header />
            <div className="mx-auto w-full max-w-[1920px] gap-20 pt-16">
                <div className="flex min-h-[calc(100vh-4rem)] flex-col">
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Layout
