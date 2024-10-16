'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import data from '../../../data/analytics'

const AnalyticsChart = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Analytics For This Year</CardTitle>
                    <CardDescription>View per month</CardDescription>
                    <div className=' p-4 ' style={{ width: "100%", height: "300px" }}>
                        <ResponsiveContainer>

                            <LineChart width={750} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardHeader>
            </Card>

        </div>
    )
}

export default AnalyticsChart
