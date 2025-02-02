import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar.jsx'

function Library() {
  return (
    <>
      <Helmet>
        <title>corydalis10 · 도서관</title>
      </Helmet>
      <Navbar subtitle="· 도서관" />
    </>
  );
}

export default Library;
