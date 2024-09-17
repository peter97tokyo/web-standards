import '../../styles/webStandards/webStandards_common.css'

const Form = () => {

    return( 
    <div className='common-container'>
        <div className='common-head'>FORM</div>
        <hr className='common-line'></hr>
        <p className='p-title'>폼 요소를 그룹으로 묶는 fieldset, legend</p>
        <p>하나의 폼 안에서 여러 구역을 나누어 표시할 때 fieldset 태그를 사용합니다.</p>
        <section className='example-box'>
            &lt;fieldset [속성="속성값"] &gt;&lt;/fieldset&gt;
        </section>
        <p>legend 태그는 다음과 같이 fieldset 태그로 묶은 그룹에 제목을 붙일 수 있습니다.</p>
        <section className='example-box'>
            &lt;fieldset&gt;
                <p className='inline'>&lt;legend&gt;그룹 이름&lt;/legend&gt;</p>
            &lt;/fieldset&gt;
        </section>
        <p>아래 예제는 상품 주문 양식을 만들 때 fieldset, legend 태그를 사용해서 상품 선택과 배송 정보를 그룹으로 묶은 것입니다.</p>
        <form>
            <fieldset>
                <legend>
                    상품 선택
                </legend>
            </fieldset>
            <fieldset>
                <legend>
                    배송 정보
                </legend>
            </fieldset>
        </form>
        <hr></hr>
        <p className='p-title'>폼 요소에 레이블을 붙이는 label 태그</p>
        <p>label 태그는 input 태그와 같은 폼 요소에 레이블을 붙일 때 사용, 레이블이란 입력란 가까이에 아이디나 비밀번호처럼 붙여 놓은 텍스트
            <br></br>
            label 태그를 사용하면 폼요소와 레이블 텍스트가 서로 연결되었다는 것을 웹 브라우저가 알 수 있습니다.    
        </p>
        <p className='p-title'>label 태그의 2가지 사용법</p>
        <p>첫 번째 방법은 태그 안에 폼 요소를 넣는 것</p>
        <section className='example-box'>
            &lt;label&gt;
                <p className='inline'>레이블명&lt;input&gt;</p>
            &lt;/label&gt;
        </section>
        <p>두 번째 방법은 label 태그와 폼 요소를 따로 사용하고 label 태그의 for속성과 폼 요소의 id속성을 이용해 서로 연결하는 것입니다.</p>
        <section className='example-box'>
            &lt;label for='user-id' &gt;아이디(6자 이상)&lt;/label&gt; <br></br>
            &lt;input type='text' id='user-id' &gt;
        </section>
        <hr></hr>
        <p className='p-title'>폼을 만드는 form 태그</p>
        <p>form 태그는 몇 가지 속성을 사용해서 입력받은 자료를 어떤 방식으로 서버에 넘길 것인지, 서버에서 어떤 프로그램을 이용해 처리할 것인지를 지정</p>
        <section className='example-box'>
            &lt;form [속성='속성값'] &gt;여러 폼 요소&lt;/form&gt; 
        </section>
        <table className='others-table'>
            <thead>
                <tr>
                    <th>종류</th>
                    <th>설명</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>method</td>
                    <td>form의 method 속성은 폼 데이터를 서버에 전송할 때 사용할 HTTP 메서드를 정의합니다. 일반적으로 GET 또는 POST 메서드를 사용합니다. GET은 데이터를 URL에 추가하고, POST는 데이터를 본문에 숨겨서 전송합니다.</td>
                </tr>
                <tr>
                    <td>action</td>
                    <td>form의 action 속성은 폼 데이터를 전송할 URL을 지정합니다. 이 속성이 비어 있으면 현재 페이지로 데이터가 전송됩니다.</td>
                </tr>
                <tr>
                    <td>target</td>
                    <td>form의 target 속성은 폼이 제출된 후 결과를 어디에 표시할지를 정의합니다. 예를 들어, "_blank"는 새로운 탭이나 창에서 결과를 표시합니다.</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Form