//git 프로젝트 1122

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

//git push -u origin main 깃 저장소에 첫 커밋을 푸쉬