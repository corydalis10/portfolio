import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar.jsx'

function Library() {
  return (
    <>
      <Helmet>
        <title>corydalis10 · 프로젝트 추천</title>
      </Helmet>
      <Navbar subtitle="· 프로젝트 추천" />
    </>
  );
}

export default Library;
