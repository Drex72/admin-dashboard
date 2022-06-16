import './featuredinfo.css'
import { featured } from '../../data/data'

const FeaturedInfo = () => {
  return (
    <div className="featured">
      {featured.map((item) => (
        <div key={item.id} className="featuredItem">
          <span className="featuredTitle">{item.title}</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{item.money}</span>
            <span className="featuredMoneyRate">
              {item.rate} {item.icon}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      ))}
    </div>
  )
}

export default FeaturedInfo
