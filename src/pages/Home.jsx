import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'

function Home() {
  return (
    <>
      <Helmet>
        <title>corydalis10</title>
      </Helmet>
      <Navbar subtitle="" />
      <div className="hero min-h-fit">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="./portrait.jpg"
            className="max-w-sm rounded-4xl shadow-4xl mr-8"
          />
          <div>
            <h1 className="text-5xl font-bold">안녕하세요 😀</h1>
            <p className="py-6">
              저는 중학생 개발자로 Node.js와 Android, 한국어 번역을 하는 강현호라고 합니다!
            </p>
            <Link to="/about">
              <button className="btn btn-lg">더 알아보기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
