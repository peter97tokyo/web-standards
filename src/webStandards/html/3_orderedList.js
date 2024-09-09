import '../../styles/webStandards/webStandards_common.css'

const OrderedList = () => {

    return( 
    <div className='common-container'>
        <div className='common-head'>ORDERED LIST</div>
        <hr className='common-line'></hr>
        <h3>어떤 과정을 순서대로 설명할 때 ol과 li 태그를 사용해 만듭니다.</h3>
        <section className='example-box'>
            &lt;ol&gt;
                <p>&lt;li&gt;항목1&lt;/li&gt;</p>
                <p>&lt;li&gt;항목2&lt;/li&gt;</p>
            &lt;/ol&gt;
        </section>
        <ol>
            <li>
                샐러드 채소를 씻어 물기를 제거한 후 먹기 좋게 썰어서 준비합니다.
            </li>
            <li>
                레드향과 아보카도, 토마토도 먹기 좋은 크기로 썰어 둡니다.
            </li>
            <li>
                드레싱 재료를 믹서에 한꺼번에 넣고 갈아 줍니다.
            </li>
            <li>
                불에 샐러드 채소와 레드향 아보카드, 토마토를 넣고 드레싱을 뿌리면 끝!
            </li>
        </ol>
        <section>
            <h3>ol 태그의 type, start 속성</h3>
            <p>
                앞에 예제처럼 순서 있는 목록은 기본적으로 1, 2, 3, ... 으로 번호가 붙지만 type 속성을 사용하면 영문자나 로마 숫자 등으로 순서를 나타낼 수 있습니다.
                숫자는 1번 부터 시작하지만 start 속성을 사용하여 시작하는 숫자를 지정할 수 있습니다.
            </p>
        </section>
        <h3>다양한 텍스트 관련 태그</h3>
        <table class='others-table'>
            <tr>
                <th>종류</th>
                <th>설명</th>
            </tr>
            <tr>
                <td>type = "1"</td>
                <td>숫자(기본값)</td>
                
            </tr>
            <tr>
                <td>type = "a"</td>
                <td>영문 소문자</td>
            </tr>
            <tr>
                <td>type = "A"</td>
                <td>영문 대문자</td>
            </tr>
            <tr>
                <td>type = "i"</td>
                <td>로마 숫자 소문자</td>
            </tr>
            <tr>
                <td>type = "I"</td>
                <td>로마 숫자 대문자</td>
            </tr>
        </table>
        <h3>설명 목록을 만드는 dl, dt, dd 태그</h3>
        <section className='example-box'>
            &lt;dl&gt;
                <p>&lt;dt&gt;이름&lt;/dt&gt;</p>
                <p>&lt;dd&gt;값&lt;/dd&gt;</p>
            &lt;/dl&gt;
        </section>
        <dl>
            <dt>
                선물용 3kg
            </dt>
            <dd>
                소과 13~16과
            </dd>
            <dd>
                중과 10~12과
            </dd>
        </dl>
        <section>
            <p>
                설명 목록 (description list)이란 이름(name)과 값(value) 형태로 된 목록을 말합니다. 마치 사전에서 단어명과 설명이 있는 모습을 떠올리면 쉽게 이해할 수 있습니다.
                <br></br>
                이름이나 단어명을 지정하는 dt 태그와 값을 지정하는 dd 태그로 구성됩니다.
                dl 한 쌍의 dt 태그와 dd 태그를 넣습니다.
                <br></br>                
                이때 dt태그 하나에 dd 태그를 여러개 사용 할 수도 있습니다.
            </p>
        </section>
    </div>
    )
}

export default OrderedList