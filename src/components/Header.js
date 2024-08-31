import React, { useEffect, useState } from 'react';
import '../styles/components/header.css';
import menuData from '../jsons/menu.json';

const Header = () => {
    const [oneDepth, setOneDepth] = useState(null);
    const [isOver, setIsOver] = useState(false);

    const handleOver = () => {
        setIsOver(true);
    };

    const handleOut = () => {
        setIsOver(false);
    };

    useEffect(() => {
        // 메뉴 데이터를 한 번만 렌더링
        const one = menuData.menus.map((obj, index) => (
            <div key={index} className="menuItem">
                <div className="oneDepth">    
                    <a href={`https://${obj.oneDepthLink}`} target="_blank" rel="noopener noreferrer">
                        {obj.oneDepthTitle}
                    </a>
                </div>    
                <ul className={`twoDepth ${isOver ? "active" : ""}`}>
                    {obj.underDepth.map((subObj, subIndex) => (
                        <li key={subIndex}>
                            <a href={`https://${subObj.twoDepthLink}`} target="_blank" rel="noopener noreferrer">
                                {subObj.twoDepthTitle}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ));

        setOneDepth(one);
    }, [isOver]); // isOver가 변경될 때마다 실행

    return( 
        <div className='header'>
            <div className='jumbotron-container'>
                <div className='jumbotron-items'>
                    <h1>Nice to see you</h1>
                    <h3>I am Korean man in Tokyo</h3>
                </div>
            </div>
            <div className='menu-container' 
                onMouseOver={handleOver} 
                onMouseOut={handleOut} 
                onFocus={handleOver}
                onBlur={handleOut}
            > 
                {oneDepth}
            </div>
        </div>
    )
}

export default Header;
