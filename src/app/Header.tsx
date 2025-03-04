import accountIco from '../assets/icons/user-circle.svg';
import Image from 'next/image';
export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Leaderboard</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">My Level</a></li>
                </ul>

                <ul className="navbar-list-2">
                    <li><Image src={accountIco} alt="" /></li>
                    
                </ul>
            </nav>
        </header>
    );
}