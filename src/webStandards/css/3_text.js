

const Text = () => {
    return <div className='common-container'>
            <div className='common-head'>텍스트 관련 스타일</div>
            <hr className='common-line'></hr>
            <p className="p-title">텍스트를 정렬하는 text-align 속성</p>
            <p>text-align 속성은 문단의 텍스트 정렬 방법을 지정합니다.</p>
            <section className='example-box'>
                text-align: start | end | left | right | center | justify | match-parent
            </section>
            <table className='others-table'>
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>start</td>
                    <td style={{textAlign : 'start'}}>현재 텍스트 줄의 시작 위치에 맞추어 문단을 정렬합니다.</td>
                    
                </tr>
                <tr>
                    <td>end</td>
                    <td style={{textAlign : 'end'}}>현재 텍스트 줄의 끝 위치에 맞추어 문단을 정렬합니다.</td>
                </tr>
                <tr>
                    <td>left</td>
                    <td style={{textAlign : 'left'}}>왼쪽에 맞추어 문단을 정렬합니다.</td>
                </tr>
                <tr>
                    <td>right</td>
                    <td style={{textAlign : 'right'}}>오른쪽에 맞추어 문단을 정렬합니다.</td>
                </tr>
                <tr>
                    <td>center</td>
                    <td style={{textAlign : 'center'}}>가운데에 맞추어 문단을 정렬합니다.</td>
                </tr>
                <tr>
                    <td>justify</td>
                    <td style={{textAlign : 'justify'}}>양쪽에 맞추어 문단을 정렬합니다.</td>
                </tr>
                <tr>
                    <td>match-parent</td>
                    <td style={{textAlign : 'match-parent'}}>부모 요소를 따라 문단을 정렬합니다.</td>
                </tr>
            </table> 
            <p className="p-title">줄 간격을 조절하는 line-height 속성</p>
            <p>한 문단이 두 줄이 넘으면 줄 간격이 생깁니다. 줄 간격이 너무 좁거나 넓으면 가독성이 떨어집니다. 이때 line-height 속성을 이용하면 줄 간격을 원하는 만큼 조절할 수 있습니다.
                이때 line-height 속성을 사용하여 줄 간격을 원하는 만큼 조절할 수 있습니다. 줄 간격은 정확한 단위로 크깃값을 지정하거나 문단의 글자 크기를 기준으로 몇 배수인지 백분율로 지정할 수도 있습니다.
            </p>
            <section className='example-box'>
                <p>p &#123; line-height:24px; &#125;</p>
                <p>p &#123; line-height:2.0; &#125;</p>
                <p>p &#123; line-height:200%; &#125;</p>
            </section>
            <p className="p-title">텍스트의 줄을 표시하거나 없애 주는 text-decoration 속성</p>
            <p>text-decoration속성은 텍스트에 밑줄을 긋거나 취소선을 표시합니다. 그리고 텍스트에 하이퍼링크를 적용하면 기본적으로 밑줄이 생기는데 text-decoration 속성을 사용하면 없앨 수 있습니다.
            </p>
            <table className='others-table'>
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>none</td>
                    <td style={{textDecoration : 'none'}}>none</td>
                    
                </tr>
                <tr>
                    <td>underline</td>
                    <td style={{textDecoration : 'underline'}}>underline</td>
                </tr>
                <tr>
                    <td>overline</td>
                    <td style={{textDecoration : 'overline'}}>overline</td>
                </tr>
                <tr>
                    <td>line-through</td>
                    <td style={{textDecoration : 'line-through'}}>line-through</td>
                </tr>
            </table> 
            <p className="p-title">텍스트에 그림자 효과를 추가하는 text-shadow 속성</p>
            <p>CSS를 사용하여 텍스트에 그림자 효과도 줄 수 있습니다.</p>
            <section className='example-box'>
                text-shadow: none | 가로거리, 새로거리, 번짐정도, 색상
            </section>
            <table className='others-table'>
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>가로거리</td>
                    <td>텍스트부터 그림자까지의 가로 거리로 필수 속성입니다. 양숫값은 글자의 오른쪽, 음숫값은 글자의 왼쪽에 그림자를 만듭니다.</td>
                    
                </tr>
                <tr>
                    <td>세로거리</td>
                    <td>텍스트부터 그림자까지의 세로 거리로 필수 속성입니다. 양숫값은 글자의 아래쪽, 음숫값은 글자의 위쪽에 그림자를 만듭니다.</td>
                </tr>
                <tr>
                    <td>번짐정도</td>
                    <td>그림자가 번지는 정도입니다. 양숫값을 사용하면 그림자가 모든 방향으로 퍼져 나가므로 그림자가 크게 표시됩니다. 반대로 음숫값은 그림자가
                        모든 방향으로 축소되어 보입니다. 기본값은 0입니다.
                    </td>
                </tr>
                <tr>
                    <td>색상</td>
                    <td>그림자 색상을 지정합니다. 한가지만 지정할 수도 있고 공백으로 구분해 여러 색상을 지정할 수도 있습니다. 기본값은 현재 글자색입니다.</td>
                </tr>
            </table> 
            <h1 style={{ textShadow : '1px 1px black', color : 'red'}}>
                HTML 
            </h1>
            <h1 style={{ textShadow : '5px 5px 3px #ffa500'}}>
                CSS
            </h1>
            <p className="p-title">텍스트의 대소 문자를 변환하는 text-transform 속성</p>
            <table className='others-table'>
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>none</td>
                    <td>줄을 표시하지 않습니다.</td>
                    
                </tr>
                <tr>
                    <td>capitalize</td>
                    <td>첫번째 글자를 대문자로 변환합니다.</td>
                </tr>
                <tr>
                    <td>uppercase</td>
                    <td>모든 글자를 대문자로 변환합니다.</td>
                </tr>
                <tr>
                    <td>lowercase</td>
                    <td>모든 글자를 소문자로 변환합니다.</td>
                </tr>
                <tr>
                    <td>full-width</td>
                    <td>가능한 한 모든 문자를 전각 문자로 변환합니다.</td>
                </tr>
            </table>
            <p className="p-title">글자 간격을 조절하는 letter-spacing, word-spacing</p>
            <p>letter-spacing속성은 글자와 글자 사이의 간격을 조절하고 word-spacing 속성은 단어와 단어 사이 간격을 조절하는데, CSS에서는 주로 letter-spacing속성을 사용해 자간을 조절합니다.
                이 2가지 속성은 px, em과 같은 단위나 퍼센트로 크깃값을 조절합니다. 다음은 letter-spacing을 사용하여 자간을 조절한 예제입니다.
            </p>
            <p>CSS</p>
            <p style={{letterSpacing: '0.2em'}}>CSS</p>
            <p style={{letterSpacing: '0.5em'}}>CSS</p>
            
        </div>
}

export default Text