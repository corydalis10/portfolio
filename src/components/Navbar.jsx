import { Link } from "react-router-dom"
import { GrMenu } from "react-icons/gr";

function Navbar(props) {
    return (
        <div className="navbar bg-transparent">
            <div className="dropdown">
                <div className="tooltip tooltip-bottom" data-tip="메뉴">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <GrMenu size={24} />
                    </div>
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
                    <li><a href="https://hyeonho64.hashnode.dev">Hashnode</a></li>
                </ul>
            </div>
            <Link className="btn btn-ghost text-xl" to="/">corydalis10 {props.subtitle}</Link>
        </div>
    )
}

export default Navbar;