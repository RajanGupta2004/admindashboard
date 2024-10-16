import React from 'react'
import { LucideIcon } from 'lucide-react'

import {
    Card,
    CardContent,

} from "@/components/ui/card"

interface DashboardCardProps {
    title: String,
    count: Number,
    icon: React.ReactElement<LucideIcon>
}


const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
    return (
        <>
            <Card className='bg-slate-200 p-2'>
                <CardContent>
                    <h3 className='text-2xl text-center font-semibold text-slate-800  pb-4'>{title}</h3>
                    <div className='flex items-center justify-between gap-4'>
                        {icon}
                        <h3 className='text-3xl font-bold text-slate-600 '>100</h3>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default DashboardCard
