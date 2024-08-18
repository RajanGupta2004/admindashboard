import TheamTag from '@/components/TheamTag'
import React from 'react'



const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' h-[100vh] flex items-center justify-center'>
            {children}

            <div className="absolute bottom-2 right-2">
                <TheamTag />
            </div>

        </div>
    )
}

export default AuthLayout
