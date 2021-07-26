import './home.css';
import FeaturedInfo from '../../components/featured/FeaturedInfo';
import Chart from '../../components/charts/Chart';
import { dataChart } from '../../helpers/dataChart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';


const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title='User Analytics'
                data={ dataChart }
                dataKey='Active User'
                grid 
            />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;
