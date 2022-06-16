import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../data/data'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="home"
    >
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </motion.div>
  )
}

export default Home
