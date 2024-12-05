// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (if, for 불가능)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다. (객체, boolean, undefined, null 등은 렌더링 되지 않음)
// 3. 모든 태그는 닫혀있어야 한다. (self closing이라도 꼭!)
// 4. 최상위 태그는 반드시 하나여야만 한다. (여러 태그를 쓸 경우 빈 태그로 감싸줄 것->실제로는 없는 태그)

import './Main.css'

const Main = function () {
  const user = {
    name:"sarah",
    isLogin: true,
  }

  if (user.isLogin) {
    return <div 
    className="logout"
    >
      로그아웃
    </div>
  } else {
    return <div>로그인</div>
  }
}

export default Main