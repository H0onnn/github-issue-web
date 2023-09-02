# GITHUB ISSUE WEB

## 👥 Member Info

### 임정훈

<br/>
<br/>

## 개발 기간

### 2023.08.30 - 2023.08.31

<br/>
<br/>

## 💪🏻 기능 소개

깃허브 API를 이용해 Facebook의 React Repository의 Issue 목록 페이지 및 상세 페이지를 구현합니다.
데이터 Fetching 시에는 Infinite Scroll을 이용하였습니다.

<br/>
<br/>

## ✔️ 배포

- `AWS S3` [🔗Link](http://hoonnn-storage.s3-website.ap-northeast-2.amazonaws.com/)

<br/>
<br/>

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (3가지 중 1가지 선택)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행
  > 3. 아래 키워드를 통한 실행
```bash
$ git clone https://github.com/H0onnn/wanted-pre-onboarding-02.git
$ cd wanted-onboarding-02
$ npm install
$ npm run start
```

<br/>
<br/>

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=Typescript&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img src="https://img.shields.io/badge/GITHUB OCTOKIT-181717?style=for-the-badge&logo=Github&logoColor=white">

<br/>
<br/>

## 🚀 요구사항

- 필수 요구사항

  - [x] 로딩 및 에러 화면 구현

- `/` 이슈 목록 페이지

  - [x] 특정 레파지토리의 이슈 목록 출력
  - [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
  - [x] 다섯 번째 셀마다 광고 이미지 출력
  - [x] 화면을 아래로 스크롤 시 추가 이슈 목록 로딩 (Infinity Scroll)

- `/issue:id` 이슈 상세 페이지
  - [x] 이슈의 상세 내용 표시

<br/>
<br/>

## ✨ Assignments별 구현 방식

#### 과제 소개

#### [Assignment 1] 이슈 데이터 가져오기

- GitHub Octokit 라이브러리를 사용
- 비동기 통신으로 API 로직 Custom Hook으로 구현

#### [Assignment 2] Open 상태인 이슈를, Comment가 가장 많은 순서대로 정렬하여 출력

- GitHub REST API에서 지원하는 parameters를 이용하여 정렬

#### [Assignment 3] 이슈 데이터를 출력할 때, 5번째 셀마다 광고 이미지 출력하기

- map 함수의 index 속성을 이용하여 일정 순서마다 지정된 광고 이미지가 출력되도록 구현

#### [Assignment 4] 이슈 데이터를 출력하는 무한 스크롤 기능 구현하기

- IntersectionObserver API를 사용해서 이슈 목록의 마지막 요소를 관찰자로 등록하고 해당 요소가 뷰포트에 포함될 때 이슈 목록 추가 로딩

#### [Assignment 5] 이슈 상세 페이지 구현

- 이슈 목록에서 특정 이슈 클릭 시 이슈 상세 페이지로 이동

#### [Assignment 6] 이슈 상세 페이지의 마크다운 렌더링

- react-markdown 라이브러리 사용

#### [Assignment 7] 데이터가 요청 중 로딩 화면을 렌더링

- API 호출 로직이 포함된 custom hook을 이용하여 데이터 및 로딩 상태를 관리하고, 상태 값에 따라 로딩 화면 렌더링

#### [Assignment 8] 에러 핸들링

- 에러 상태를 관리하는 Custom Hook을 구현해서 관리하고 상태 값에 따라 에러 페이지를 화면에 렌더링

<br/>
<br/>

## 🌲프로젝트 구조

```bash
src/
├── README.md
├── dist
│   ├── bundle.js
│   ├── bundle.js.LICENSE.txt
│   └── index.html
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.tsx
│   ├── api
│   │   ├── issue.ts
│   │   ├── octokit.ts
│   │   └── repoData.ts
│   ├── components
│   │   ├── AdBanner
│   │   │   └── AdBanner.tsx
│   │   ├── Issue
│   │   │   ├── IssueAuthor.tsx
│   │   │   ├── IssueBodyContent.tsx
│   │   │   ├── IssueItem.tsx
│   │   │   └── IssueList.tsx
│   │   ├── Markdown
│   │   │   └── MarkdownRenderer.tsx
│   │   └── UI
│   │       ├── Button.tsx
│   │       ├── Error
│   │       │   └── ErrorComponent.tsx
│   │       └── Loading
│   │           └── LoadingComponent.tsx
│   ├── constants
│   │   └── colors.ts
│   ├── hooks
│   │   ├── useError.ts
│   │   ├── useInfiniteScroll.ts
│   │   ├── useIssueData.ts
│   │   ├── useLoading.ts
│   │   └── useRepoData.ts
│   ├── index.css
│   ├── index.tsx
│   ├── layout
│   │   ├── Header.tsx
│   │   └── PageLayout.tsx
│   ├── pages
│   │   ├── ErrorPage.tsx
│   │   ├── IssueDetailPage.tsx
│   │   └── IssueListPage.tsx
│   └── routes.tsx
├── tsconfig.json
└── webpack.config.js
```
