import '../../styles/webStandards/webStandards_common.css'

const Semantic = () => {

    return( 
    <div className='common-container'>
        <div className='common-head'>SEMANTIC</div>
        <hr className='common-line'></hr>
        <p>웹사이트의 디자인은 서로 달라 보여도 구조는 비슷합니다.</p>
        <p>헤더, 본문, 사이드바, 풋터등 이런 구조를 바탕으로 HTML에는 태그 이름만 봐도 어떤 역할을 하는지 쉽게 알 수 있는 문서 구조 테그를 추가할 수 있습니다.</p>
        <div className='example-header'>
            <p>&lt;header&gt;<span className='annotation'>말그대로 헤더 영역을 의미합니다 전체적인 헤더일 수도 있고 특정 영역의 헤더 일수도 있습니다.</span></p>
                ...
                <div className='example-nav'> 
                    <p>&lt;nav&gt;<span className='annotation'>nav 태그는 같은 웹 문서안에서 다른 위치로 연결하거나 다른 웹 문서로 연결하는 링크를 만듭니다.</span></p>
                    <p>&lt;nav&gt;</p>
                </div>
            <p>&lt;/header&gt;</p>
        </div>
        <div className='example-contents'>
            <p>&lt;main class='contents' &gt;<span className='annotation'>main 태그는 웹 문서에서 핵심이 되는 내용을 넣습니다. 웹 문서마다 다르게 보여 주는 내용으로 구성</span></p>
                <p className='inline'>&lt;section id='heading' &gt;</p>
                    <p className='inline-2'>&lt;h2&gt;몸과 마음이 치유되는 섬&lt;/h2&gt;</p>
                <p className='inline'>&lt;section&gt;</p>
                <p className='inline'>&lt;section id='activity' &gt;<span className='annotation'>section 태그는 웹 문서에서 콘텐츠 영역을 나타냅니다. article 태그와 비슷해 보이기도 하지만 section 태그는 몇개의 콘텐츠를 묶는 용도로 사용하고, article 태그는 독립된 콘텐츠로 사용됩니다.</span></p>
                    <p className='inline-2'>&lt;h2&gt;다양한 액티비티가 기다리는 섬&lt;/h2&gt;</p>
                <p className='inline'>&lt;section&gt;</p>
            <p>&lt;/main&gt;</p>
        </div>
        <div className='example-footer'>
            <p>&lt;footer&gt;</p>
                <p className='inline'>&lt;section id='bottomMenu'&gt;<span className='annotation'>footer 태그는 웹 문서에서 맨 아래쪽에 있는 푸터 영역을 만듭니다.</span></p>
                <p className='inline'>...</p>
                <p className='inline'>&lt;section&gt;</p>
            <p>&lt;/footer&gt;</p>
        </div>
        <p>Semantic Tag가 중요한 이유</p>
        <ol>
            <li>
                Semantic을 사용하면 웹 브라우저가 HTML의 소스 코드만 보고도 어는 부분이 제목이고 메뉴이고 본문 내용인지 알기 쉽다.
            </li>
            <li>
                문서 구조가 정확하게 나눠지므로 PC나 모바일의 웹 브라우저와 여러 스마트기기의 다양한 화면에서 웹 문서를 표현하기 쉽기 때문이다.
            </li>
            <li>
                인터넷에서 웹 사이트를 검색할 때 필요한 내용을 정확하게 찾을 수 있다.
            </li>
        </ol>
        <p>그 외 Semantic Tag</p>
        <ol>
            <li>
                article tag는 사전적 의미인 신문이나 잡지의 기사처럼 웹에서 실제로 보여 주고 싶은 내용을 넣습니다.
            </li>
            <li>
                aside tag는 본문 내용 외에 왼쪽이나 오른쪽 혹은 아래쪽에 사이드바를 만듭니다.
            </li>
            <li>
                여러 소스를 묶는 div tag는 header, section같은 semantic tag가 나오기 전에는 id나 class를 사용하여 header나 section으로 구분하고 div 태그를 사용했습니다.
            </li>
        </ol>
    </div>
    )
}

export default Semantic