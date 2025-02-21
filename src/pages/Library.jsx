import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar.jsx'
import LibraryData from '../components/Library.json'

function Library() {
  return (
    <>
      <Helmet>
        <title>corydalis10 · 도서관</title>
      </Helmet>
      <Navbar subtitle="· 도서관" />
      <div className="m-4 grid grid-cols-4 gap-4">
        {LibraryData.map((data) => (
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={data.img}
                alt={data.alt} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>시작일: {data.startdate}</p>
              <p>완료일: {data.enddate}</p>
              <div className="tooltip" data-tip="별점은 저의 주관적 의견으로 자료로 활용될 수 없습니다">
                <p>{data.rating}</p>
              </div>
              <div className="card-actions justify-end">
                <a href={data.aladinlink} target="_blank">
                  <button className="btn">알라딘에서 보기</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Library;
