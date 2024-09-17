import '../../styles/webStandards/webStandards_common.css'

const Media = () => {

    return( 
    <div className='common-container'>
        <div className='common-head'>MEDIA</div>
        <hr className='common-line'></hr>
        <p className='p-title'>img 태그에서 알아야 할 속성은 src와 alt</p>
        <p>src 속성은 이미지 파일의 경로를 지정하여 웹 브라우저에 알려 주는 역할을 하며 반드시 있어야 합니다.</p>
        <p>alt 속성에는 화면 낭독기 등에서 이미지를 대신해서 읽어 줄 텍스트 입력합니다.</p>
        <section className='tip-box'>
            <div className='tip-container'>
                <div className='tip-notice'>
                    <b>알아 두면 좋아요!</b>
                </div>
                <div className='tip-title'>
                    <b>웹에서 사용하는 대표적인 이미지 파일 형식</b>
                </div>
            </div>
        <div className='tip-content'>
            <table className='others-table'>
                <thead>
                    <tr>
                        <th>종류</th>
                        <th>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GIF</td>
                        <td>표시할 수 있는 색상 수는 최대 256가지입니다. 다른 이미지 파일 형식에 비해 파일 크기가 작아서 아이콘이나 불릿 등 작은 이미지에 주로 사용</td>
                    </tr>
                    <tr>
                        <td>JPG/JPEG</td>
                        <td>GIF보다 색상과 명암을 다양하게 표현할 수 있습니다. 이미지를 수정하고 저장하는 작업을 반복하면 화질이 떨어질 수도 있습니다.</td>
                    </tr>
                    <tr>
                        <td>PNG</td>
                        <td>네트워크용으로 개발된 파일 형식, 색상을 다양하게 표현하면서 투명한 배경도 만들 수 있어 웹에서 가장 많이 사용</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
        <hr></hr>
        <p className='p-title'>다양한 멀티미디어 파일을 삽입할 때 쓰는 object, embed 태그</p>
        <p>object 태그는 오디오 파일뿐만 아니라 비디오, 자바 애플릿 pdf 등 다양한 멀티미디어 파일을 삽입할 때 사용합니다. 웹 문서 안에 다른 문서를 삽입할 때도 사용할 수 있습니다.</p>
        <section className='example-box'>
            &lt;object width='너비' height='높이' data='파일' &gt;&lt;/object&gt;
        </section>
        <p>embed 태그는 HTML 초기 버전부터 사용해서 대부분 브라우저에서 사용가능, 비디오, 비디오, 이미지등 다양한 멀티미디어 파일을 삽입가능,
            audio, video, object 태그를 지원하지 않는 웹 브라우저에서 고려해볼만 함
        </p>
        <section className='example-box'>
            &lt;embed width='너비' height='높이' data='파일' &gt;&lt;/embed&gt;
        </section>
        <hr></hr>
        <p className='p-title'>audio, video에 대해서 생략...</p>
    </div>
    )
}

export default Media