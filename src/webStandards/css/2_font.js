import '../../styles/webStandards/webStandards_common.css'

const Font = () => {
    return <div className='common-container'>
            <div className='common-head'>글꼴 관련 스타일</div>
            <hr className='common-line'></hr>
            <p className='p-title'>글꼴을 지정하는 font-family</p>
            <p>웹 문서에서 사용할 글꼴은 font-family 속성으로 지정, 이 속성은 body, p, hn 태그등 텍스트를 사용하는 요소에서 자주 사용합니다.</p>
            <section className='example-box'>
                font-family:  &lt;글꼴 이름&gt; | [&lt;글꼴 이름&gt;, &lt;글꼴 이름&gt;]
            </section>
            <p>웹 문서에서 지정한 글꼴이 사용자 시스템에 설치되어 있지 않다면 웹 문서에서 의도한 글꼴이 아닌 글꼴로 표시됩니다. 
                그래서 글꼴이 없는 경우를 대비해서 세번째 글꼴까지 생각해두기도 합니다.</p>
            <p className='p-title'>글자 크기를 지정하는 font-size 속성</p>
            <p>글자 크기는 font-size 속성을 사용하여 조절할 수 있습니다. 글자 크기의 단위는 px(픽셀)이나 pt(포인트) 등으로 지정할 수 있고 백분율을 사용할 수도 있습니다.</p>
            <section className='example-box'>
                font-size:  &lt;절대 크기&gt; | &lt;상대 크기&gt; | &lt;크기&gt; | &lt;백분율&gt;  
            </section>
            <ol>
                <li>
                    브라우저에서 지정한 글자 크기
                </li>
                <li>
                    부모 요소의 글자 크기를 기준으로 상대적인 글자 크기를 지정
                </li>
                <li>
                    브라우저와 상관없이 글자 크기를 직접 지정 
                </li>
                <li>
                    부모 요소의 글자 크기를 기준으로 백분율(%)로 표시
                </li>
            </ol>
            <p>키워드를 사용하여 글자 크기 지정가능</p>
            <section className='example-box'>
                xx-small &lt; x-small &lt; small &lt; medium &lt; large &lt; x-large &lt; xx-large
            </section>
            <p>단위를 사용하여 글자 크기 지정하기</p>
            <p>키워드 보단 단위를 사용하여 글자 크기를 지정합니다. 사용하는 단위는 px이나 pt, em등이며 음수값은 사용할 수 없습니다. 
                이전에는 px, pt를 많이 사용했지만 모바일 기기까지 고려해야하는 요즘에는 상대 크기 단위인 em이나 rem을 많이 사용함</p>
            <table class='others-table'>
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>em</td>
                    <td>부모 요소에서 지정한 글꼴의 대문자 M의 너비를 기준으로 1em으로 한 후 비율 값을 지정합니다.</td>
                    
                </tr>
                <tr>
                    <td>rem</td>
                    <td>문서 사작 부분 root에서 지정한 크기를 기준(1rem)으로 한 후 비율값을 지정합니다.</td>
                </tr>
                <tr>
                    <td>ex</td>
                    <td>해당 글꼴의 소문자 x의 높이를 기준으로(1px)으로 한 후 비율값을 지정합니다.</td>
                </tr>
                <tr>
                    <td>px</td>
                    <td>모니터의 1픽셀을 기준(1px)으로 한 후 비율값을 지정합니다.</td>
                </tr>
                <tr>
                    <td>pt</td>
                    <td>포인트라고 하며, 일반 문서에서 많이 사용합니다.</td>
                </tr>
            </table> 
            <p className='p-title'>이탤릭체로 글자를 표시하는 font-style 속성</p>               
            <p>글자를 이탤릭체로 표시할 때는 font-style 속성을 사용하며 이탤릭체로 바꾸는 속성값은 italic과 oblique가 있는데 웹에서는 주로 italic을 사용합니다.</p>
            <p className='p-title'>글자 굵기를 지정하는 font-weight</p>
            <p>글자 굵기를 지정하는 속성은 font-weight으로 웹 문서를 작성할 때 자주 사용합니다. 예약어나 숫자값으로 굵기를 변경할수 있습니다.</p>
            <section className='example-box'>
                font-weight : normal | bold | bolder | lighter | 100 ~ 900 
            </section>
            <p className='p-title'>웹 폰틀 업로드하고 사용하기</p>
            <p>컴퓨터에서 사용하는 글꼴은 투르타입이며 파일 확장자는 *.ttf입니다. 하지만 트루타입 글꼴은 파일의 크기가 커서 웹에서 사용하기에는 부적절, 
                EOT와 WOFF, WOFF2가 적절합니다.</p>
            <section className='example-box'>
                @font-face &#123;
                <p className='inline'>font-family: '글꼴 이름';</p>
                <p className='inline'>src: '글꼴 파일' | ['글꼴 파일' , '글꼴 파일', ...] </p>
                &#125;
            </section>
            <p>가장 먼저 font-family 속성을 사용해 글꼴 이름을 만듭니다. 변수의 이름을 선언하는 것과 동일하다고 생각하기, src 속성에서는 사용할 글꼴 파일의 경로를 지정합니다.
                글꼴 파일의 경로를 지정하기전에 local() 문을 사용해서 사용자 시스템에 해당 글꼴이 있는지 먼저 확인해야만 함 
            </p>
        </div>
}
export default Font;