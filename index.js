//git 프로젝트123

// 1. 형상관리도구 중 하나
// 형상관리 도구 : 버전 관리 시스템
// 작업을 하면서 작업의 리스트를 관리 가능

// 2. git의 장점
// 협업하는 단계에서 소스 코드를 파일로 주고 받을 필요없이 같은 파일을
// 팀원들과 동시에 병렬로 작업 가능
// 서버에 파일 자동 갱신

//git init
//새로운 git 저장소를 생성할 때 사용하는 git 명령어

//git 저장소를 생성한 폴더에서
//숨김파일 보기를 체크하면 .git

//git add 커밋을 추가하는데 git저장소에 추가하려고 대기
//$ git add README.md -> git저장소에 README.md파일을 추가하려고 대기

//git commit -m 커밋 메시지 작성 가능
//git commit -m "first commit" 이거면 저장소에 추가하면서
//작업 내용 메시지는 first commit이 메시지가 보임

//git branch -M master 마스터 브런치 설정
//git branch -M main -> main이라는 마스터 브런치 설정

//git remote add origin 깃 저장소 링크 추가
//origin : 복제한 원격 git저장소의 기본 이름
//git remote add origin https://github.com/msss32/Study.git
//자신의 깃 저장소 주소를 추가

// cd "들어갈 폴더" : 경로변경
// cd .. : 경로를 한 단계 위로 올림
// ls : 경로에 있는 파일구조 보여줌

//git 저장소가 초기화 된 경로인지 꼭 확인!
//경로는 git init을 한 경로

//git push -u origin main 깃 저장소에 첫 커밋을 푸쉬

// 소스제어 탭을 선택시 git 그래프에 변경사항 중 파일 이름 옆에

// U : 저장소에 없는 새로운 파일
// M : 저장소에 파일은 있고 내용이 변경되었을 때
// D : 저장소에 있는 파일이 제거되었을 때

// 1. git 설정
// 사용자 설정
// 사용자 셋팅시 깃 명령어
// git config --global user.name "자기 닉네임"
// git config --global user.email. "자기 이메일"

// 설정 정보 조회
// git config --global --list

// git 저장소 초기화 저장소 생성
// git의 저장소로 지정할 경로로 이동해서
// git init

// git 저장소 복제 (파일 내려받기)
// git clone (url)

// git 저장소 추가
// git remote add origin "git저장소 url"

// git 사용
// 스테이징에 추가
// git add 파일명(확장자까지)

// 커밋 메시지
// git commit -m "작업내용"

// 현재 브런치 변경
// git switch "브런치 이름"

// 브런치 목록 전부보기
// git branch -r

// 로컬 깃 브런치 목록 정보 보기
// git branch -a

// 브런치 추가
// git branch "추가하고 싶은 브런치 이름"

// 브런치 제거
// git branch -d "제거할 브런치 이름"

// 리드미 작성

// 1. 글씨의 크기
// #을 입력하고 뒤에 글씨를 작성
// #은 5개까지 입력 가능
// #의 갯수가 적을수록 큼

// 2. 코드사용
// ```(사용하는 언어) 백틱 3개로 시작하고 뒤에 사용할 언어를 기록
// 코드의 내용 작성
// ``` 백틱 3개로 닫음

// 3. 링크 사용
// 링크를 넣고싶으면
// [링크의 이름] 표시될 링크의 문자
// (url) 접속할 주소

// 4. 목록 추가
// *로 목록표현

// 5. 테이블 추가
// |, --- 이것으로 구분
// 형태는
//  1 | 2 | 3
// ---|---|---|
// 제목 | 이름 | 날짜123

// 6. 이미지 추가
// 새로운 이슈 생성
// 쓰기 창에 이미지 드래그&드랍
// ![character](https://user-images.githubusercontent.com/107897886/174937011-35382067-6384-4832-aa61-c59c21778b69.gif)
// 복사해서 바로 사용
