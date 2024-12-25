import '../../styles/webStandards/webStandards_common.css'

const List = () => {
    return <div className='common-container'>
            <div className='common-head'>목록 스타일</div>
            <hr className='common-line'></hr>
            <p className='p-title'>볼릿 모양과 번호 스타일을 지정하는 list-style-type 속성</p>
            <p>list-style-type 속성을 사용하여 불릿의 모양이나 번호 스타일 지정할 수 있습니다.</p>
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
                    <td>disc</td>
                    <td>채운 원 모양</td>
                    
                </tr>
                <tr>
                    <td>circle</td>
                    <td>빈 원 모양</td>
                </tr>
                <tr>
                    <td>square</td>
                    <td>채운 사각형 모양</td>
                </tr>
                <tr>
                    <td>decimal</td>
                    <td>1부터 시작하는 10진수</td>
                </tr>
                <tr>
                    <td>decimal-leading-zero</td>
                    <td>앞에 0이 붙는 10진수</td>
                </tr>
                <tr>
                    <td>lower-roman</td>
                    <td>로마 숫자 소문자</td>
                </tr>
                <tr>
                    <td>upper-roman</td>
                    <td>로마 숫자 대문자</td>
                </tr>
                <tr>
                    <td>lower-alpha or lower-latin</td>
                    <td>알파벳 소문자</td>
                </tr>
                <tr>
                    <td>upper-alpha or upper latin</td>
                    <td>알파벳 대문자</td>
                </tr>
                <tr>
                    <td>none</td>
                    <td>불릿이나 숫자를 제거합니다.</td>
                </tr>
            </table> 
            <p className='p-title'>불릿 대신 이미지를 사용하는 list-style-image</p>
            <section className='example-box'>
                list-style-image: url('이미지 경로') | none
            </section>
            <p className='p-title'>목록을 사용하여 세로 메뉴 만들기</p>
            <p>웹 사이트의 메뉴는 주로 순서 없는 목록을 사용한다. 세로 메뉴를 만든다면 목록에서 불릿을 없애고 마진과 패딩을 사용해 보기 좋게 배열한다.</p>
            <section className='example-box'>
                nav &#123;
                <p className='inline'>width: 300px;</p>
                <p className='inline'>margin: 50px 30px;</p>
                &#125;
                <br></br>
                ul &#123;
                <p className='inline'>list-style: none;</p>
                &#125;
                <br></br>
                li &#123;
                <p className='inline'>border 1px solid #222;</p>
                <p className='inline'>padding: 20px 40px;</p>
                <p className='inline'>margin: 5px;</p>
                &#125;
            </section>
            <p>결과 확인하기</p>
            <ul style={{listStyle:'none'}}>
                <li 
                    style={{
                        border:'1px solid #222',
                        padding:'20px 40px',
                        margin: '5px'
                }}
                >회사 소개</li>
                <li
                    style={{
                        border:'1px solid #222',
                        padding:'20px 40px',
                        margin: '5px'
                }}
                >도서</li>
                <li
                    style={{
                        border:'1px solid #222',
                        padding:'20px 40px',
                        margin: '5px'
                    }}
                >자료실</li>
                <li style={{
                    border:'1px solid #222',
                    padding:'20px 40px',
                    margin: '5px'
                }}
                >동영상 강의</li>
            </ul>
        </div>
}
export default List;