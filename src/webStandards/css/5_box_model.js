import '../../styles/webStandards/webStandards_common.css'

const BoxModel = () => {
    return <div className='common-container'>
            <div className='common-head'>박스 모델</div>
            <hr className='common-line'></hr>
            <p className='p-title'>블록 레벨 요소와 인라인 레벨 요소</p>
            <p>박스 모델은 <b>블록 레벨 요소</b>인지 <b>인라인 레벨 요소</b>인지에 따라 나열 방법이 다릅니다.</p>
            <p><b>블록 레벨 요소</b>란 태그를 사용해 요소를 삽입했을 때 혼자 한 줄 차지하는 것을 가리킵니다. 한 줄을 차지한다 해당 요소의 <b>넓이가 100%</b>라는 뜻입니다.
                그래서 왼쪽이나 오른쪽에 다른 요소가 올 수 없습니다. 대표적인 태그로 h1 ~ h6, div, p등이 있습니다.
            </p>
            <p><b>인라인 레벨 요소</b>는 한줄을 차지하지 않습니다. 콘텐츠만큼만 영역을 차지하고 나머지 공간에는 다른 요소가 올 수 있습니다. 대표적인 태그로 span, img, strong이 있습니다.</p>
            <p className='p-title'>박스 모델의 기본 구성</p>
            <p>앞에서 배운 <b>블록 레벨 요소는 모두 박스 형태</b>입니다. 이걸 박스 모델 요소라고 합니다. css 박스 모델을 잘 알고 있어야 한줄에 배치할지, 줄을 
                바꾸어 배치할지, 요소와 요소 사이의 간격을 어떻게 조절할지 결정할 수 있습니다.</p>
            <p>박스 모델은 콘텐츠 영역, 박스와 콘텐츠 영역 사이의 여백인 패딩, 박스의 테두리 그리고 여러 박스 박스 모델 사이의 여백인 마진등의 요소로 구성됩니다.
                마진이나 패딩은 웹문서에서 다른 콘텐츠 사이의 간격이나 배치등을 고려할 때 필요한 개념입니다. 
            </p>
            <p className='p-title'>박스 모델의 크기를 계산하는 box-sizing</p>
            <p>width 속성, height 속성은 박스 모델에서 콘텐츠 주변의 여백이나 테두리를 뺸 콘텐츠 영역의 크기를 가리킵니다.
                그래서 웹 문서에 여러 가지 요소를 배치할 떄 실제 박스 모델이 차지하는 크기는 콘텐츠 영역 외에도 콘텐츠와 테두리 사이의 여백, 테두리 두께까지
                계산해야합니다. 그래서 box-sizing 속성이 필요합니다. box-sizing은 박스 모델의 너비와 높이를 어떻게 결정할 것인지에 따라 border-box,
                content-box 중에서 선택할 수 있습니다.
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
                    <td>border-box</td>
                    <td>테두리까지 포함해서 너빗값을 지정합니다.</td>
                    
                </tr>
                <tr>
                    <td>content-box</td>
                    <td>콘텐츠 영역만 너빗값을 지정합니다. 기본값입니다.</td>
                </tr>
            </table> 

            <p className='p-title'>박스 모델의 방향 살펴보기</p>
            <p>박스 모델은 상하좌우 4개의 방향이 있어서 테두리나 마진, 패딩 등을 지정할 때 한꺼번에 똑같이 지정하거나, 모두 다르게 지정할 수도 있습니다.
                이때 박스 모델의 4개 방향을 가리키는 예약어를 미리 알아 두는 것이 좋다 <br></br>
                <b>top → right → bottom → left</b> 시계 방향으로 외울 것
            </p>
            <hr></hr>
            <p className='p-title'>테두리 스타일을 지정하는 border-style 속성</p>
            <p>테두리 스타일을 지정하는 border-style속성의 기본 값은 none이므로 속성값을 따로 지정하지 않으면 
                테두리 색상이나 두께를 지정하더라도 화면에 표시되지 않습니다.</p>
            <table className="others-table">
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>hidden</td>
                    <td>테두리를 감춥니다. 표에서 <code>border-collapse: collapse</code>일 경우 다른 테두리도 표시되지 않습니다.</td>
                </tr>
                <tr>
                    <td>solid</td>
                    <td>테두리를 실선으로 표시합니다.</td>
                </tr>
                <tr>
                    <td>dotted</td>
                    <td>테두리를 점선으로 표시합니다. 작은 점들이 연결된 형태입니다.</td>
                </tr>
                <tr>
                    <td>dashed</td>
                    <td>테두리를 대시(-)로 표시합니다. 점선보다 긴 선분들로 구성됩니다.</td>
                </tr>
                <tr>
                    <td>double</td>
                    <td>테두리를 이중선으로 표시합니다. 두 개의 실선으로 표시되며, 선 사이에 공간이 있습니다.</td>
                </tr>
                <tr>
                    <td>groove</td>
                    <td>테두리를 3D 음각처럼 표시합니다. 요소가 눌려 있는 것처럼 보입니다.</td>
                </tr>
                <tr>
                    <td>ridge</td>
                    <td>테두리를 3D 양각처럼 표시합니다. 요소가 튀어나온 것처럼 보입니다.</td>
                </tr>
                <tr>
                    <td>inset</td>
                    <td>테두리를 3D 안쪽으로 들어간 것처럼 표시합니다.</td>
                </tr>
                <tr>
                    <td>outset</td>
                    <td>테두리를 3D 바깥쪽으로 돌출된 것처럼 표시합니다.</td>
                </tr>
                <tr>
                    <td>none</td>
                    <td>테두리를 표시하지 않습니다.</td>
                </tr>
            </table>
            <p className='p-title'>테두리 두께를 지정하는 border-width속성</p>
            <p>
                border-width 속성의 이름에서 알 수 있듯이 이 속성을 이용하면 테두리의 두께를 지정할 수 있습니다.
                1px 나 5px처럼 크기를 직접 입력할 수도 있고 thin이나 medium, thick 같은 예약어 중에서 선택할 수도 있습니다.
            </p>
            <section className='example-box'>
                border-width: 크기 | thin | medium | thick
            </section>
            <p>border-width 속성을 사용해서 상하좌우 4개 방향의 테두리 스타일을 한꺼번에 지정할 수 있는데 
                이때 값을 1개만 지정할수도 있고 2개나 3개 또는 4개를 각각 다르게 지정할 수 있습니다.</p>
            <section className='example-box'>
                border-width: 2px;
            </section>
            <p>결과 확인하기</p>
            <div style={{borderStyle: 'solid', height: '50px', width: '100px', borderWidth: '2px'}}></div>
            <p>모든 방향의 두께가 2px로 설정됩니다.</p>
            <section className='example-box'>
                border-width: thick, thin;
            </section>
            <p>결과 확인하기</p>
            <div style={{borderStyle: 'solid', height: '50px', width: '100px', borderWidth: 'thick thin'}}></div>
            <p>첫번째 thick가 위아래, 두번째 thin라는 예약어가 오른쪽 왼쪽이 두께를 설정합니다.</p>

            <section className='example-box'>
                border-width: thick, thin thin;
            </section>
            <p>결과 확인하기</p>
            <div style={{borderStyle: 'solid', height: '50px', width: '100px', borderWidth: 'thick thin thin'}}></div>
            <p>top → right → bottom → left중 left값만 없습니다 left는 right와 값을 공유합니다.</p>
            
            <section className='example-box'>
                border-width: thick, thin thin;
            </section>
            <p>결과 확인하기</p>
            <div style={{borderStyle: 'solid', height: '50px', width: '100px', borderWidth: '10px 5px 5px 10px'}}></div>
            <p>border-width의 두께를 각각 설정했습니다. top → right → bottom → left순으로 값이 할당됩니다.</p>
            <p className='p-title'>테두리 색상을 지정하는 border-color</p>
            <p>border-color 속성은 박스모델에서 테두리 색상을 지정할 수 있습니다. border-color 속성을 사용해서 4개 방향의 테두리 색상을 한꺼번에 지정할 수도 있고, 
                border-top-color처럼 border와 color사이에 테두리 방향을 넣어주면 색상을 하나씩 지정할 수도 있습니다. </p>
            <section className='example-box'>
                .box &#123;
                <p className='inline'>border-color:red;</p>
                &#125;
                <br></br>
                .box2 &#123;
                <p className='inline'>border-top-color:blue;</p>
                <p className='inline'>border-left-color:red;</p>
                &#125;
            </section>
            <p>class box2 결과 확인하기</p>
            <div style={{borderStyle: 'dotted', height: '50px', width: '100px', borderWidth: '10px 5px 5px 10px', borderTopColor: 'blue', borderLeftColor: 'red'}}></div>

            <p className='p-title'>테두리 스타일 묶어 지정하는 border 속성</p>
            <p>테두리의 스타일, 색상, 두께를 따로 설정하면 css가 너무 길어집니다. border 속성 사용해서 한꺼번에 표현할 수 있습니다. 이때 테두리의
                두께와 색상, 스타일의 속성값의 순서는 중요하지 않습니다. 하지만 방향을 다르게 설정하고 싶은 경우 border-top이나 border-right처럼 속성 이름에 방향을 함께 써서 따로 지정할 수 있습니다.
            </p>
            <section className='example-box'>
                .box &#123;
                <p className='inline'>border: 3px dotted blue</p>
                &#125;
            </section>
            <p>결과 확인하기</p>
            <div style={{height: '50px', width: '100px', border: '3px dotted blue'}}></div>
            <p className='p-title'>둥근 테두리를 만드는 border-radius 속성</p>
            <p>border-radius 속성을 사용하면 꼭짓점 부분에 원이 있다고 가정하여 둥글게 처리합니다. 
                이때 원의 반지름을 이용하여 둥근 정도를 나타낼 수 있습니다. 또한 모든 꼭짓점이 아닌 각각 하나씩 설정할 수 있습니다.
                border-top-left-radius 속성을 사용하면 위쪽의 왼쪽 꼭짓점의 둥근 정도를 설정할 수 있습니다
            </p>
            <section className='example-box'>
                border-radius: 크기 | 백분율
            </section>
            <table className="others-table">
                <colgroup>
                    <col style={{width : '30%'}}></col>
                    <col style={{width : '70%'}}></col>
                </colgroup>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>크기</td>
                    <td>반지름 크기를 px, em의 단위와 함께 수치로 표시합니다.</td>
                </tr>
                <tr>
                    <td>백분율</td>
                    <td>현재 요소의 크기를 기준으로 비율로 지정합니다.</td>
                </tr>                
            </table>

            <div style={{height: '50px', width: '100px', border: '3px solid', borderRadius:'25px'}}></div>
        </div>
}
export default BoxModel;