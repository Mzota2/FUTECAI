'use client';
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { service: "AI Solutions", orders: 24 },
    { service: "Custom Software Development", orders: 18 },
    { service: "Tech Consultancy", orders: 12 },
    { service: "Mentorship & Training", orders: 8 },
]

function BarChartComponent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Orders by Service</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
                        <XAxis dataKey="service" tick={{ fontSize: 12 }} />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="orders" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default BarChartComponent