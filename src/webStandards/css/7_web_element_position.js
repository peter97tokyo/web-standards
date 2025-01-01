import '../../styles/webStandards/webStandards_common.css'

const WebElementPosition = () => {
    return <div className='common-container'>
            <div className='common-head'>웹 요소의 위치 지정하기</div>
            <hr className='common-line'></hr>
            <p className='p-title'>웹 요소의 위치를 정하는 left, right, top, bottom</p>
            <p>웹 문서에서 요소를 원하는 곳에 갖다 놓으려면 위치를 지정할 수 있어야 합니다. 이때 사용하는 속성이 
                left, right, top, bottom입니다.
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
                        <td>기준 위치와 요소 사이에 왼쪽으로 얼마나 떨어져 있는지 지정합니다.</td>
                    </tr>
                    <tr>
                        <td>right</td>
                        <td>기준 위치와 요소 사이에 오른쪽으로 얼마나 떨어져 있는지 지정합니다.</td>
                    </tr>                
                    <tr>
                        <td>top</td>
                        <td>기준 위치와 요소 사이에 위쪽으로 얼마나 떨어져 있는지 지정합니다.</td>
                    </tr>
                    <tr>
                        <td>bottom</td>
                        <td>기준 위치와 요소 사이에 아래쪽으로 얼마나 떨어져 있는지 지정합니다.</td>
                    </tr>                
                </tbody>
            </table>
            <p className='p-title'>배치 방법을 지정하는 position</p>
            <p>position 속성은 웹 문서 안의 요소를 자유자재로 배치해 주므로 html, css 이용해 웹 문서를 만들 때 중요합니다.
                position 속성을 이용하면 텍스트나 이미지 요소를 나란히 배치할 수 있고 원하는 위치를 선택할 수 있습니다.
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
                        <td>static</td>
                        <td>문서의 흐름에 맞춰 배치합니다. 기본값</td>
                    </tr>
                    <tr>
                        <td>relative</td>
                        <td>위칫값을 지정할 수 있다는 점을 제외하면 static과 같습니다.</td>
                    </tr>                
                    <tr>
                        <td>absolute</td>
                        <td>relative값을 사용한 상위 요소를 기준으로 위치를 지정해 배치합니다.</td>
                    </tr>
                    <tr>
                        <td>fixed</td>
                        <td>브라우저 창을 기준으로 위치를 지정해 배치합니다.</td>
                    </tr>
                    <tr>
                        <td>Sticky</td>
                        <td>스크롤 위치에 따라 동작합니다.</td>
                    </tr>                 
                </tbody>
            </table>

             {/* Static */}
            <div style={{ position: "static", background: "lightgray", padding: "10px", marginBottom: "10px" }}>
                <p>Static: 기본값입니다. 부모 기준으로 배치됩니다.</p>
            </div>

            {/* Relative */}
            <div
                style={{
                position: "relative",
                top: "10px",
                left: "20px",
                background: "lightblue",
                padding: "10px",
                marginBottom: "10px",
                }}
            >
                <p>Relative: 자기 자신 위치 기준으로 이동 (top: 10px, left: 20px).</p>
            </div>

            {/* Absolute */}
            <div style={{ position: "relative", border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                <p>Absolute: 가장 가까운 부모의 position을 기준으로 이동.</p>
                <div
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "lightcoral",
                    padding: "10px",
                }}
                >
                <p>나는 absolute! 부모가 relative입니다.</p>
                </div>
            </div>

            {/* Fixed */}
            <div
                style={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                background: "lightgreen",
                padding: "10px",
                zIndex: 10,
                }}
            >
                <p>Fixed: 뷰포트를 기준으로 고정 (스크롤에도 움직이지 않음).</p>
            </div>

            {/* Sticky */}
            <div style={{ height: "200px", overflow: "scroll", border: "1px solid gray", padding: "10px" }}>
                <p>스크롤을 내려보세요!</p>
                <div
                    style={{
                        position: "sticky",
                        top: "0",
                        background: "lightyellow",
                        padding: "10px",
                        zIndex: 5,
                    }}
                    >
                    <p>Sticky: 스크롤 시 부모 경계를 넘어가지 않음 (top: 0).</p>
                </div>
                <div style={{ height: "500px", background: "white" }}>
                    <p>많은 내용이 들어있습니다...</p>
                </div>
            </div>
        </div>
}
export default WebElementPosition;