import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/dashboard/StatCard';
import DashboardHeader from "../components/dashboard/DashboardHeader";
import TinyLineChart from '../components/dashboard/TinyLineChart';
import ChartContainer from '../components/dashboard/ChartContainer';
import MonthlySalesChart from '../components/dashboard/MonthlySalesChart';




const statsData = [
    { title: 'Average Order Volume', value: '$208', change: '+12%', period: 'vs last month',
      chartData: [{value: 10}, {value: 208}, {value: 12}, {value: 1}, {value: 25}],
    },
    { title: 'Transaction Count (Orders)', value: '100', change: '-2%', period: 'vs last month',
      chartData: [{value: 40}, {value: 15}, {value: 100}, {value: 20}, {value: 25}],
    },
    { title: 'Products Sold', value: '270', change: '+3%', period: 'vs last month',
      chartData: [{value: 50}, {value: 15}, {value: 16}, {value: 67}, {value: 25}], },

    { title: 'Gross Profit Margin', value: '69.10%', change: '+12%', period: 'vs last month',
      chartData: [{value: 30}, {value: 15}, {value: 8}, {value: 20}, {value: 25}], },

    { title: 'Gross Profit', value: '$26.4k', change: '-2%', period: 'vs last month',
      chartData: [{value: 10}, {value: 15}, {value: 8}, {value: 20}, {value: 25}], },

    { title: 'Total Net Revenue', value: '$1.8M', change: '+3%', period: 'vs last month',
      chartData: [{value: 200}, {value: 738}, {value: 88}, {value: 900}, {value: 25}], },
];


const AdminDashboard = () => {


    return (
        <DashboardLayout> 
            
            <h1 className="text-2xl font-semibold text-gray-900 mb-4  md:ml-0 ml-10">Welcome back, Olivia</h1>
            <DashboardHeader 
           
            />
            <div className="grid gap-6 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {statsData.map((stat, index) => (
                    <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        percentageChange={stat.change}
                        period={stat.period}
                        chartComponent={
                            <TinyLineChart 
                                trend={stat.change} 
                                data={stat.chartData}
                            />
                        }
                    />
                ))}
            </div>

           
            
            <div className="mb-8">
                <ChartContainer title="Monthly Sales Vs Inventory Analysis">
                    
                    <MonthlySalesChart />
                </ChartContainer>
            </div>
       


        </DashboardLayout>
    );
};

export default AdminDashboard;



