import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, ResponsiveContainer } from 'recharts';


const mockData = [
    
  { value: 10 }, { value: 15 }, { value: 8 }, { value: 20 }, { value: 12 }, { value: 25 }
];

const TinyLineChart = ({ trend, data = mockData }) => {

    const color = trend.startsWith('+') ? '#10B981' : '#EF4444'; 


    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke={color} 
                    strokeWidth={2} 
                    dot={false} 
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

// TinyLineChart.propTypes = {
//     trend: PropTypes.string.isRequired, 
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             value: PropTypes.number.isRequired,
//         })
//     ),
// };

export default TinyLineChart;