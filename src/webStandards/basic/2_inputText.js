import '../../styles/webStandards/webStandards_common.css'

const InputText = () => {

    return( 
    <div className='common-container'>
        <div className='common-head'>텍스트 입력하기</div>
        <hr className='common-line'></hr>
        <h3>텍스트 단락을 만드는 &lt;p&gt;, 줄을 바꾸는 &lt;br&gt;</h3>
        <section className='tip-box'>
            <div className='tip-container'>
                <div className='tip-notice'>
                    <b>알아 두면 좋아요!</b>
                </div>
                <div className='tip-title'>
                    <b>&lt;p&gt; 태그와 &lt;br&gt; 태그의 차이점은 무엇일까요?</b>
                </div>
            </div>
            <div className='tip-content'>
                br 태그를 두번 사용하면 빈줄이 생기면서 텍스트 단란이 나뉜 것처럼 화면에 표시할 수 있습니다. 하지만 
                실제로는 단락이 만들어진 게 아니므로 CSS를 사용해 텍스트 단란 스타일을 적용할 때 문제가 생깁니다. 따라서
                텍스트 단락을 만들 때는 p 태그를 사용해야 합니다.
            </div>
        </section>
        <h3>인용할 때 쓰는 &lt;blockquote&gt;</h3>
        <p>
            blockquote 태그 안의 내용을 인용문으로 알고 다른 텍스트보다 약간 들여 씁니다.
        </p>
        <section className='example-box'>
            &lt;blockquote&gt;인용문&lt;/blockquote&gt;
        </section>
        <div>결과 : <blockquote　lang='ja'>99人に馬鹿にされてもひとりが笑ったらそれで良いじゃないか -江頭2時50分</blockquote></div>
        <h3>텍스트를 굵게 표시하려는 &lt;strong&gt;, &lt;b&gt;</h3>
        <p>
            strong, b 태그는 눈으로 볼 때 큰 차이가 없지만 그래도 구분하는 이유는 화면 낭독기의 기능때문입니다. 경고나 주의 사항처럼 중요한 내용을 강조해야할 때는
            strong 태그, 단순히 글자만 굵게 표시할 때는 b 태그를 사용합니다.
        </p>
        <section className='example-box'>
            &lt;strong&gt;강하게&lt;/strong&gt;<br></br>
            &lt;b&gt;단순하게&lt;/b&gt;
        </section>
        <div>결과 : <strong>강하게</strong>, <b>단순하게</b></div>
        <h3>기울인 텍스트를 입력해 주는 &lt;em&gt;, &lt;i&gt;</h3>
        <p>
            em은 강조를 뜻하는 emphasis의 줄임말이고 i는 기울임을 뜻하는 italic의 줄임말입니다.<br></br>
            em은 흐름상 특정 부분을 강조하고 싶을 때 사용하고 i는 마음속의 생각이나 용어 관용구 등에 사용합니다.
        </p>
        <section className='example-box'>
            &lt;em&gt;강조&lt;/em&gt;<br></br>
            &lt;i&gt;구별&lt;/i&gt;
        </section>
        <div>결과 : <em>강조</em>, <i>구별</i></div>
        <h3>다양한 텍스트 관련 태그</h3>
        <table class='others-table'>
            <tr>
                <th>종류</th>
                <th>설명</th>
                <th>예시</th>
                <th>결과</th>
            </tr>
            <tr>
                <td>addr</td>
                <td>줄임말을 표시하고 title 속성을 함께 사용할 수 있습니다.</td>
                <td>&lt;abbr title="Internet of Things"&gt;IoT&lt;/abbr&gt;</td>
                <td><abbr title="Internet of Things">IoT</abbr></td>
            </tr>
            <tr>
                <td>cite</td>
                <td>출처나 참고 문헌을 나타냅니다.</td>
                <td>&lt;cite&gt;Shakespeare&lt;/cite&gt;</td>
                <td><cite>Shakespeare</cite></td>
            </tr>
            <tr>
                <td>small</td>
                <td>작은 크기의 텍스트를 표시합니다.</td>
                <td>&lt;small&gt;This is small text&lt;/small&gt;</td>
                <td><small>This is small text</small></td>
            </tr>
            <tr>
                <td>sub</td>
                <td>아래 첨자를 나타냅니다.</td>
                <td>&lt;sub&gt;H&lt;sub&gt;2&lt;/sub&gt;O&lt;/sub&gt;</td>
                <td><sub>H<sub>2</sub>O</sub></td>
            </tr>
            <tr>
                <td>sup</td>
                <td>위 첨자를 나타냅니다.</td>
                <td>&lt;sup&gt;E=mc&lt;sup&gt;2&lt;/sup&gt;&lt;/sup&gt;</td>
                <td><sup>E=mc<sup>2</sup></sup></td>
            </tr>
            <tr>
                <td>s</td>
                <td>취소선이 그어진 텍스트를 표시합니다.</td>
                <td>&lt;s&gt;This text is crossed out&lt;/s&gt;</td>
                <td><s>This text is crossed out</s></td>
            </tr>
            <tr>
                <td>u</td>
                <td>밑줄이 그어진 텍스트를 표시합니다.</td>
                <td>&lt;u&gt;This text is underlined&lt;/u&gt;</td>
                <td><u>This text is underlined</u></td>
            </tr>
            <tr>
                <td>ins</td>
                <td>추가된 텍스트를 나타냅니다.</td>
                <td>&lt;ins&gt;This is inserted text&lt;/ins&gt;</td>
                <td><ins>This is inserted text</ins></td>
            </tr>
            <tr>
                <td>del</td>
                <td>삭제된 텍스트를 나타냅니다.</td>
                <td>&lt;del&gt;This is deleted text&lt;/del&gt;</td>
                <td><del>This is deleted text</del></td>
            </tr>
        </table>        
    </div>
    )
}

export default InputText