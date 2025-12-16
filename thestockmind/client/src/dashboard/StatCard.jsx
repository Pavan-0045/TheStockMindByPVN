import React from 'react';
import { FiArrowUp, FiArrowDown, FiMoreVertical } from 'react-icons/fi'; 
import PropTypes from 'prop-types'; 


const MenuIcon = ({ onClick }) => (
    <button onClick={onClick} className="text-gray-400 hover:text-gray-600 p-1 -mt-1 -mr-1">
        <FiMoreVertical size={18} /> 
    </button>
);


const StatCard = ({ title, value, percentageChange, period, chartComponent }) => {
    
    const isPositive = percentageChange.startsWith('+');
    const trendColor = isPositive ? 'text-green-600' : 'text-red-600';
    const TrendIcon = isPositive ? FiArrowUp : FiArrowDown; 

    return (
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 transition duration-300 hover:shadow-lg">
            
            
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {title}
                </h3>
               
                <MenuIcon onClick={() => console.log(`Menu for ${title} clicked`)} />
            </div>

           
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {value}
            </div>

            
            <div className="flex items-center justify-between">
                
                <p className={`flex items-center text-xs sm:text-sm ${trendColor} font-semibold`}>
                   
                    <TrendIcon className="mr-1 text-base" /> 
                    {percentageChange} 
                    <span className="text-gray-500 font-normal ml-1 text-xs">{period}</span>
                </p>

                
                <div className="w-1/3 h-8 flex items-end justify-end">
                    {chartComponent} 
                </div>
            </div>
        </div>
    );
};


// StatCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     percentageChange: PropTypes.string.isRequired,
//     period: PropTypes.string.isRequired,
//     chartComponent: PropTypes.element,
// };


export default StatCard;