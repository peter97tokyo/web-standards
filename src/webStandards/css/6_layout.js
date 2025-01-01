import '../../styles/webStandards/webStandards_common.css'

const Layout = () => {
    return <div className='common-container'>
            <div className='common-head'>웹 문서의 레이아웃 만들기</div>
            <hr className='common-line'></hr>
            <p className='p-title'>배치 방법 결정하는 display 속성</p>
            <p>display 속성을 사용하면 블록 레벨 요소와 인라인 레벨 요소를 서로 바꿔서 사용할 수 있습니다.</p>
            <table className="others-table">
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <thead>                
                    <tr>
                        <th>종류</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>                
                <tr>
                    <td>block</td>
                    <td>인라인 레벨 요소를 블록 레벨 요소로 만듭니다.</td>
                </tr>
                <tr>
                    <td>inline</td>
                    <td>블록 레벨 요소를 인라인 레벨 요소로 만듭니다.</td>
                </tr>                
                <tr>
                    <td>inline-block</td>
                    <td>인라인 레벨 요소와 블록 레벨 요소의 속성을 모두 가지고 있으며 마진과 패딩을 지정할 수 있습니다.</td>
                </tr>                
                </tbody>
            </table>
            <p>다음 예제는 수평 내비게이션을 만들기 위해 원래 블록 레벨 요소였던 목록을 인라인 레벨 요소로 바꾼 것입니다.</p>
            <section className='example-box'>
                nav ul &#123;
                <p className='inline'>list-style: none;</p>
                &#125;
                nav ul li &#123;
                <p className='inline'>display: inline-block;</p>
                <p className='inline'>padding: 20px;</p>
                <p className='inline'>margin: 0 20px;</p>
                <p className='inline'>border: 1px solid #222;</p>
                &#125;
            </section>
            <nav>
                <ul style={{listStyle:"none"}}>
                    <li style={{display:"inline-block", padding:"20px", margin:"0 20px", border:"1px solid #222"}}>menu1</li>
                    <li style={{display:"inline-block", padding:"20px", margin:"0 20px", border:"1px solid #222"}}>menu2</li>
                    <li style={{display:"inline-block", padding:"20px", margin:"0 20px", border:"1px solid #222"}}>menu3</li>
                    <li style={{display:"inline-block", padding:"20px", margin:"0 20px", border:"1px solid #222"}}>menu4</li>
                </ul>
            </nav>
            <p className='p-title'>왼쪽이나 오른쪽으로 배치하는 float 속성</p>
            <p>웹 문서를 만들다 보면 p 태그처럼 문단의 왼쪽이나 오른쪽에 이미지를 나란히 표시해야 할 경우가 있습니다.
                그런데 p 태그는 블록 레벨 요소이므로 이미지와 나란히 한 줄에 배치할 수 없습니다. 이럴 때는 float속성을 사용하여
                이미지를 표시하고 그 주변에 텍스트가 둘러 싸도록 할 수 있습니다. float 속성은 웹 요소를 문서 위에 떠 있게 만듭니다.
                여기서 '떠 있다'는 의미는 요소가 왼쪽이나 오른쪽 구석에 배치된다는 것을 말합니다. float 속성에서 사용할 수 있는 값에는
                왼쪽 left, 오른쪽 right, 그리고 좌우 어느쪽도 아닌 것 none이 있습니다.
            </p>
            <table className="others-table">
                
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>종류</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>left</td>
                        <td>해당 요소를 문서의 왼쪽에 배치합니다.</td>
                    </tr>
                    <tr>
                        <td>inline</td>
                        <td>해당 요소를 문서의 오른쪽에 배치합니다.</td>
                    </tr>                
                    <tr>
                        <td>none</td>
                        <td>좌우 어느 쪽에도 배치하지 않습니다. 기본값</td>
                    </tr>                
                </tbody>
            </table>
            <section>
                <span style={{height:"100px", width:"300px", backgroundColor:"blue", border:"1px solid #222", float:"left", marginRight:"40px"}}></span>
                <p>웹 문서를 만들다 보면 p 태그처럼 문단의 왼쪽이나 오른쪽에 이미지를 나란히 표시해야 할 경우가 있습니다.
                그런데 p 태그는 블록 레벨 요소이므로 이미지와 나란히 한 줄에 배치할 수 없습니다. 이럴 때는 float속성을 사용하여
                이미지를 표시하고 그 주변에 텍스트가 둘러 싸도록 할 수 있습니다. float 속성은 웹 요소를 문서 위에 떠 있게 만듭니다.
                여기서 '떠 있다'는 의미는 요소가 왼쪽이나 오른쪽 구석에 배치된다는 것을 말합니다. float 속성에서 사용할 수 있는 값에는
                왼쪽 left, 오른쪽 right, 그리고 좌우 어느쪽도 아닌 것 none이 있습니다.</p>
            </section>

            <p className='p-title'>float 속성을 해제하는 clear 속성</p>
            <p>float 속성을 사용해 웹의 요소를 왼쪽이나 오른쪽에 배치하면 그다음에 넣는 다른 요소에도 똑같은 속성이 전달됩니다.
                따라서 float 속성이 더이상 유용하지 않다고 알려 주는 속성이 필요한데 그것이 바로 clear 속성입니다.
            </p>
            <section>
                <div style={{height:"100px", width:"100px", background:"#ffd800", float:"left", marginTop:"30px"}}>박스 #1</div>
                <div style={{height:"100px", width:"100px", background:"#0094ff", float:"left", marginTop:"30px"}}>박스 #2</div>
                <div style={{height:"100px", width:"auto", background:"#00ff21"}}>박스 #3</div>
                <div style={{height:"100px", width:"auto", background:"#a874ff", clear:"left"}}>박스 #4</div>
            </section>
            <p>float: left를 이용해 왼쪽으로 배치했다면 clear: left로 종료하고, float: right를 사용했다면 clear
                : right를 사용해 해제합니다. float 속성값이 left인지 right인지와 상관없이 무조건 기본 상태로 되돌리고 싶다면
                clear: both라고 지정하면 됩니다. <br></br>
                위 예제에서 박스1, 박스2요소는 float: left를 적용해서 왼쪽부터 차례대로 배치됩니다. 하지만 박스3 요소는 float
                속성을 지정하지 않았으므로 웹브라우저의 기본 흐름으로 배치됩니다. 마지막 박스4에는 clear: left 속성을 사용했으므로
                앞에서 사용한 float속성이 해제되어 평범한 박스 형태로 표시됩니다.
            </p>
            <section className='tip-box'>
                <div className='tip-container'>
                    <div className='tip-notice'>
                        <b>알아 두면 좋아요!</b>
                    </div>
                    <div className='tip-title'>
                        <b>display: inline-block과 float: left 속성은 어떻게 다른가요?</b>
                    </div>
                </div>
                <div className='tip-content'>
                    <p> 
                        display: inline-block의 특징 <br></br>
                        레이아웃 속성: inline처럼 한 줄에 요소가 배치되지만, block처럼 요소의 너비와 높이를 조정할 수 있습니다, 요소는 주변 콘텐츠와 동일한 줄에 배치됩니다.
                        <br></br>
                        주요 사용처: 버튼, 아이콘 등 크기를 지정하면서 여러 개를 한 줄에 정렬해야 할 때, 부모 요소의 구조를 깔끔하게 유지하면서 정렬을 구성할 때.
                        <br></br><br></br>
                        float: left의 특징<br></br>
                        레이아웃 속성: 요소를 왼쪽으로 플로팅시켜 부모 컨테이너의 레이아웃 흐름에서 벗어나게 만듭니다,
                        형제 요소와의 관계에서 레이아웃이 달라질 수 있습니다.
                        <br></br>
                        주요 사용처: 이미지나 텍스트를 감싸는 레이아웃을 구성할 때, 한때 그리드 레이아웃을 구성하는 데 많이 사용되었으나, 현재는 flexbox나 grid가 대체함.
                        <br></br><br></br>
                        정리: display: inline-block은 현대적인 CSS 작성 방식으로 더 많이 사용되며, 요소의 정렬과 배치를 더 직관적으로 제어할 수 있습니다.
                    </p>                    
                </div>
            </section>
        </div>
}
export default Layout;