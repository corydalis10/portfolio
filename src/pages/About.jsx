import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar.jsx'

function About() {
  return (
    <>
      <Helmet>
        <title>corydalis10 · 소개</title>
      </Helmet>
      <Navbar subtitle="· 소개" />
    </>
  );
}

export default About;
