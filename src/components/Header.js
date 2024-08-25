import React, { useEffect, useState } from 'react';
import '../styles/components/header.css'
import menuData from '../jsons/menu.json'

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
        // useEffect는 컴포넌트가 마운트될 때 한 번 실행됩니다.
        const one = menuData.menus.map((obj, index) => {
            return (
                <div key={index} className="oneDepth">    
                    <a href={`https://${obj.oneDepthLink }`} target="_blank" rel="noopener noreferrer">
                        {obj.oneDepthTitle }
                    </a>
                    
                    <ul className={`twoDepth ${isOver ? "active" : ""}`}>
                        {obj.underDepth.map((subObj, subIndex) => (
                            <li key={subIndex}>
                                <a href={`https://${subObj.twoDepthLink}`} target="_blank" rel="noopener noreferrer">
                                    {subObj.twoDepthTitle }
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            );
        });
       
        setOneDepth(one);
        // setTwoDepth(two);
        // 여기에 페이지 로딩 시 실행하고 싶은 코드를 작성하면 됩니다.
    }, [isOver]); // 빈 배열을 넣으면 컴포넌트가 처음 마운트될 때만 실행됩니다.

    return( 
    <div className='header'>
        <div className='jumbotron-container'>
            <div className='jumbotron-items'>
                <h1>Nice to see you</h1>
                <h3>I am korean man in Tokyo</h3>
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
        <div className={`twoDepthBg ${isOver ? "active" : ""}`}>
        </div>
        
    </div>
    )
}

export default Header