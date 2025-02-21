import { Link } from "react-router-dom"

function Navbar(props) {
    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 border-1 border-gray-300">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/about">소개</Link></li>
                        <li className="menu-title">프로그래밍</li>
                        <li><Link to="/experience">경험</Link></li>
                        <li><Link to="/recommendation">프로젝트 추천</Link></li>
                        <li className="menu-title">독서</li>
                        <li><Link to="/library">도서관</Link></li>
                        <li className="menu-title">링크</li>
                        <li><a href="https://github.com/corydalis10">GitHub</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" to="/">corydalis10 {props.subtitle}</Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar;