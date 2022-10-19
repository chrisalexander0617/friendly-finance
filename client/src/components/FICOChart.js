import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import { 
    PieChart, 
    Pie, 
    ResponsiveContainer 
} from 'recharts';

export const FICOChart = ({data}) => {
    const applicantsWithExcellentCredit = data.filter(application => application.FICOScore === 5.1)
    const applicantsWithGreatCredit = data.filter(application => application.FICOScore === 5.4)
    const applicantsWithGoodCredit = data.filter(application => application.FICOScore === 5.8)
    const applicantsWithFairCredit = data.filter(application => application.FICOScore === 6.2)
    const applicantsWithBelowFairCredit = data.filter(application => application.FICOScore === 6.7)

    const dataForChart = [
        { name: 'Excellent Credit', value:applicantsWithExcellentCredit.length},
        { name: 'Great Credit', value:applicantsWithGreatCredit.length },
        { name: 'Good Credit', value:applicantsWithGoodCredit.length },
        { name: 'Fair Credit', value:applicantsWithFairCredit.length},
        { name: 'Below Fair Credit', value:applicantsWithBelowFairCredit.length },
    ]

    const customLabel =({cx, cy, midAngle, innerRadius, outerRadius, value, index}) => {
        const RADIAN = Math.PI / 180;
        const radius = 25 + innerRadius + (outerRadius - innerRadius);
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text
                x={x}
                y={y}
                fill="#333"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
            {dataForChart[index].name} ({dataForChart[index].value})
            </text>
        );
    }
         
    return (
        <>
            {data.length && (
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                            dataKey="value" 
                            data={dataForChart}
                            fill="#55cfbc" 
                            label={customLabel}
                        />
                    </PieChart>
                </ResponsiveContainer>
            )}
        </>
    )
}
