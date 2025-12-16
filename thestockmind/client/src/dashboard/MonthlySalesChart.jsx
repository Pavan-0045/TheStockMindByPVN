
import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; 

const mockChartData = [
  { month: 'Jan', year: 2023, sales: 4500, transactions: 2000, inventory: 1500 },
  { month: 'Feb', year: 2023, sales: 5000, transactions: 2500, inventory: 1600 },
  { month: 'Mar', year: 2023, sales: 4000, transactions: 2000, inventory: 1400 },
  { month: 'Apr', year: 2023, sales: 3800, transactions: 1800, inventory: 1200 },
  { month: 'May', year: 2023, sales: 4800, transactions: 2200, inventory: 1700 },
  { month: 'Jun', year: 2023, sales: 5500, transactions: 3000, inventory: 1800 },
  { month: 'Jul', year: 2023, sales: 5200, transactions: 2800, inventory: 1900 },
  { month: 'Aug', year: 2023, sales: 5800, transactions: 3200, inventory: 1750 },
  { month: 'Sep', year: 2023, sales: 6000, transactions: 3500, inventory: 1850 },
  { month: 'Oct', year: 2023, sales: 5700, transactions: 3100, inventory: 1600 },
  { month: 'Nov', year: 2023, sales: 6200, transactions: 3600, inventory: 1950 },
  { month: 'Dec', year: 2023, sales: 6500, transactions: 4000, inventory: 2000 },
  { month: 'Jan', year: 2024, sales: 6800, transactions: 4200, inventory: 2100 },
  { month: 'Feb', year: 2024, sales: 6100, transactions: 3800, inventory: 1900 },
  { month: 'Mar', year: 2024, sales: 7000, transactions: 4500, inventory: 2200 },
];



const CustomXAxisTick = ({ x, y, payload }) => {
    const isYearStart = payload.index === 0 || mockChartData[payload.index].month === 'Jan';
    const year = mockChartData[payload.index].year;
    
    return (
        <g transform={`translate(${x},${y})`}>
            {/* Month  */}
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666" fontSize={12}>
                {payload.value}
            </text>
           
            {isYearStart && (
                <text x={0} y={0} dy={32} textAnchor="middle" fill="#EF4444" fontWeight="bold" fontSize={12}>
                    {year}
                </text>
            )}
        </g>
    );
};


const MonthlySalesChart = ({ data = mockChartData }) => {
    const chartRef = React.useRef(null);
    const itemWidth = 80; 

    const scrollChart = (direction) => {
        if (chartRef.current) {
            chartRef.current.scrollBy({
                left: direction * itemWidth * 5, 
                behavior: 'smooth'
            });
        }
    };
    
    return (
       
        <div className="relative w-full h-full">
            
        
            <Legend 
                wrapperStyle={{ marginBottom: 15 }} 
                layout="horizontal" 
                align="center" 
                verticalAlign="top" 
            />

            <div 
                ref={chartRef}
                style={{ width: '100%', overflowX: 'auto', paddingBottom: '30px', scrollbarWidth: 'none' }} 
                className="no-scrollbar" 
                // hide scrollbar
            >
                
                <div style={{ width: `${data.length * itemWidth + 50}px`, height: '350px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                            data={data} 
                            barSize={30} 
                            barCategoryGap="15%" 
                            margin={{ left: 20, right: 20, top: 0, bottom: 0 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            
                            <XAxis 
                                dataKey="month" 
                                interval={0} 
                                tick={CustomXAxisTick} 
                                height={50} 
                                axisLine={{ stroke: '#ddd' }} 
                                tickLine={false}
                                 
                            />
                            
                            <Tooltip />

                            <Bar dataKey="sales" stackId="a" fill="#3B82F6" name="Gross Sales Revenue" /> 
                            <Bar dataKey="transactions" stackId="a" fill="#EF4444" name="Transaction Count" /> 
                            <Bar dataKey="inventory" stackId="a" fill="#FBBF24" name="Inventory Moved" /> 
                            
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <button 
                onClick={() => scrollChart(-1)} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-red-500 hover:text-red-700 z-10"
                style={{ marginLeft: '-15px' }}
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button 
                onClick={() => scrollChart(1)} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-red-500 hover:text-red-700 z-10"
                style={{ marginRight: '-15px' }} 
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
};



export default MonthlySalesChart;