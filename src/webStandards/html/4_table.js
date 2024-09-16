import '../../styles/webStandards/webStandards_common.css'

const Table = () => {

    return( 
    <div className='common-container'>
        <div className='common-head'>테이블</div>
        <hr className='common-line'></hr>
        <p className='p-title'>테이블은 행과 열 그리고 셀로 이루어집니다. 셀은 행과 열이 만나 이루어진 곳으로 표의 내용이 들어가는 한칸을 의미합니다.</p>
        <section className='example-box'>
            &lt;table&gt;
                <p className='inline'>&lt;caption&gt;표 제목&lt;/caption&gt;</p>
                <p className='inline'>&lt;tr&gt;</p>
                    <p className='inline-2'>&lt;th&gt;1행 1열&lt;/th&gt;</p>
                    <p className='inline-2'>&lt;th&gt;1행 2열&lt;/th&gt;</p>
                <p className='inline'>&lt;/tr&gt;</p>
                <p className='inline'>&lt;tr&gt;</p>
                    <p className='inline-2'>&lt;td&gt;1행 1열&lt;/td&gt;</p>
                    <p className='inline-2'>&lt;td&gt;1행 2열&lt;/td&gt;</p>
                <p className='inline'>&lt;/tr&gt;</p>
                <p className='inline'>&lt;tr&gt;</p>
                    <p className='inline-2'>&lt;td&gt;2행 1열&lt;/td&gt;</p>
                    <p className='inline-2'>&lt;td&gt;2행 2열&lt;/td&gt;</p>
                <p className='inline'>&lt;/tr&gt;</p>
            &lt;/table&gt;
        </section>
        <p>테이블에 제목을 붙이고 싶으면 table 태그 바로 아랫줄에 caption 태그를 사용합니다.</p>
        <p>tr 태그는 행을 만들고 td 태그는 행안에 있는 셀을 만들기 떄문에 table 태그 안에 tr, td 태그가 모두 모여야 하나의 셀을 만들 수 있습니다.</p>
        <p>표의 제목 행에 셀을 만들 때는 td 태그 대신 th 태그를 사용합니다. th태그를 사용하면 진하고 중앙에 배열됩니다.</p>
        <hr></hr>
        <p className='p-title'>표의 구조를 지정하는 thead, tbody, tfoot 태그</p>
        <p>일부 표에서는 제목이 표시된 셀과 자료가 표시된 셀외에 표 아래쪽에 합계나 요약 내용을 표시하기도 합니다. 이런 표는 제목과 본문 그리고 요약이
            있는 부분으로 표의 구조를 나누어 놓는 것이 좋습니다. 이때 사용하는게 thead, tbody, tfoot 태그입니다.
        </p>
        <table className='others-table'>
            <caption>선물용과 가정용 상품 구성</caption>
            <thead>
                <tr>
                    <th>용도</th>
                    <th>중량</th>
                    <th>개수</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>선물용</td>
                    <td>3kg</td>
                    <td>11 ~ 16과</td>
                    <td>35,000원</td>
                </tr>
            </tbody>
        </table>
        <hr></hr>
        <p className='p-title'>열을 묶어 주는 col, colgroup 태그</p>
        <p>단순히 표를 만들기만 하는 것이 아니라 특정 열에 배경색을 넣거나 너비를 바꾸려면 원하는 열을 선택할 수 있어야 합니다.</p>
        <p>col 태그는 열을 1개만 지정할 때 사용하고, colgroup은 col 2개 이상 묶어서 사용합니다.</p>
        <section className='example-box'>
            &lt;colgroup&gt;
                <p className='inline'>&lt;col&gt;</p>
            &lt;/colgroup&gt;
        </section>
        <p>colgroup, col 태그는 반드시 caption 태그 다음에 써야 합니다</p>
        <div className='example-contents'>
            <p>&lt;colgroup &gt;</p>
                <p className='inline'>&lt;col style='background-color:#eee;' &gt;<span className='annotation'>첫 번째 열의 배경색 지정</span></p>
                <p className='inline'>&lt;col&gt;</p>
                <p className='inline'>&lt;col style='width:150px;' &gt;<span className='annotation'>세 번째, 네 번째 열의 너비 지정</span></p>
                <p className='inline'>&lt;col style='width:150px;' &gt;</p>
            <p>&lt;/colgroup &gt;</p>
        </div>
    </div>
    )
}

export default Table