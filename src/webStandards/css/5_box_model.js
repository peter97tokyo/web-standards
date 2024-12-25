import '../../styles/webStandards/webStandards_common.css'

const BoxModel = () => {
    return <div className='common-container'>
            <div className='common-head'>CSS와 박스 모델</div>
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
                    <td>border-box</td>
                    <td>테두리까지 포함해서 너빗값을 지정합니다.</td>
                    
                </tr>
                <tr>
                    <td>content-box</td>
                    <td>콘텐츠 영역만 너빗값을 지정합니다. 기본값입니다.</td>
                </tr>
            </table> 
        </div>
}
export default BoxModel;