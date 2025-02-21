import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar.jsx'
import RecommendationData from '../components/Recommendation.json'

function Recommendation() {
  return (
    <>
      <Helmet>
        <title>corydalis10 · 프로젝트 추천</title>
      </Helmet>
      <Navbar subtitle="· 프로젝트 추천" />
      <div className="m-4 grid grid-cols-4 gap-4">
        {RecommendationData.map((data) => (
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={data.img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Recommendation;
