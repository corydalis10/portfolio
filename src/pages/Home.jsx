import Navbar from '../components/Navbar.jsx'

function Home() {
  return (
    <>
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
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">더 알아보기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
