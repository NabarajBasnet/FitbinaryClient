"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useQuery } from "@tanstack/react-query";

const chartConfig = {
    newadmission: {
        label: "New Admission",
        color: "hsl(var(--chart-1))",
    },
};

export function NewMembersLineChart() {
    const getNewMembers = async () => {
        try {
            const response = await fetch(`https://fitbinary.com/api/graphdata/newmembers`);
            const data = await response.json();
            return Array.isArray(data) ? data : data?.newMembers || [];
        } catch (error) {
            console.error("Error fetching new members:", error);
            return [];
        }
    };

    const { data: newMembers = [], isLoading } = useQuery({
        queryKey: ['newMembers'],
        queryFn: getNewMembers
    });

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const chartData = monthNames.map(month => {
        const monthData = Array.isArray(newMembers)
            ? newMembers.find(item => item?.month === month)
            : null;

        return {
            month,
            newadmission: monthData?.value || 0
        };
    });

    const currentMonthIndex = new Date().getMonth();
    const currentMonthData = chartData[currentMonthIndex]?.newadmission || 0;
    const prevMonthData = chartData[currentMonthIndex - 1]?.newadmission || 0;
    const increasePercentage = prevMonthData > 0
        ? (((currentMonthData - prevMonthData) / prevMonthData) * 100).toFixed(1)
        : "0.0";

    const date = new Date();
    const fromStartingMonth = new Date();
    fromStartingMonth.setMonth(0);
    fromStartingMonth.setDate(1)

    return (
        <div className="w-full border-none">
            <Card className="w-full dark:border-none dark:bg-gray-800 border-none rounded-2xl">
                <CardHeader>
                    <CardDescription>{fromStartingMonth.toLocaleString('default', { month: 'long' })} {fromStartingMonth.getDate()} - {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    })}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 20,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            {/* Grid lines - positioned behind everything */}
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="3 3"
                                stroke="hsl(var(--border))"
                                strokeOpacity={0.5}
                                style={{
                                    position: 'absolute',
                                    zIndex: 0,
                                }}
                            />

                            {/* XAxis with proper z-index and background */}
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={true}
                                tickMargin={24}
                                tickFormatter={(value) => value.slice(0, 3)}
                                style={{
                                    zIndex: 2,
                                    fontSize: '12px',
                                }}
                                tick={{
                                    fill: 'hsl(var(--foreground))',
                                }}
                            />

                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />

                            {/* Line - positioned above grid but below text */}
                            <Line
                                dataKey="newadmission"
                                type="natural"
                                stroke="#14b8a6"
                                strokeWidth={2}
                                dot={{
                                    fill: "#14b8a6",
                                    strokeWidth: 1,
                                    r: 3,
                                }}
                                activeDot={{
                                    r: 5,
                                    stroke: "#14b8a6",
                                    strokeWidth: 2,
                                }}
                                style={{
                                    zIndex: 1,
                                }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none text-green-600 dark:text-green-400">
                        {parseFloat(increasePercentage) >= 0 ? (
                            <>
                                Increasing new admission by {increasePercentage}% this month <TrendingUp className="h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Decreasing new admission by {Math.abs(parseFloat(increasePercentage))}% this month
                            </>
                        )}
                    </div>
                    <div className="leading-none text-muted-foreground dark:text-gray-400">
                        Showing total new admission for the last 12 months
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}