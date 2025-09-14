## Lollipop

"Lollipop" is framework for building MCP SSE Server

"Lollipop"은 SSE 기반의 MCP 서버 개발을 위한 프레임워크입니다.

### Why Lollipop?

- After introducing MCP to my friend, he said he would develop an MCP server example. However, even that “simple” task proved difficult for him. While it's a “simple” level of interface for most developers, it can be challenging for those who haven't been coding for very long.

- This project began because I believe that, at least in the era of LLM, everyone should have the opportunity to create an MCP.

####
####
####
####
####


- 저는 친구에게 MCP를 소개해주었습니다. MCP 서버 예제를 개발하겠다고 자신감 넘치게 도전하였는데... 그 "간단한" 작업 조차도 어려워 했습니다. 대부분의 개발자들에게는 "간단한" 수준의 인터페이스지만, 코딩을 접한지 얼마 되지 않은 개발자들에게는 어려울 수 있다는 점이 있습니다.

- LLM의 시대에서 적어도, 누구든 MCP를 만들 기회가 있어야 한다고 생각하여 이 프로젝트가 시작되었습니다.

#### 사실, 저도 MCP 개발 처음 할때는 환경 세팅에서 해맸답니다

## Start

Assuming Node.js and Git are already installed, let's begin.
이것은 Node.js와 Git이 이미 설치되어 있다고 가정합니다.

- First, Clone this repository
- 우선 이 리포지토리를 클론해주세요
```bash
git clone https://github.com/CodingManFocus/lollipop.git
```

- Please navigate to the cloned directory.
- 클론한 디렉토리로 이동해주세요
```bash
cd lollipop-main
```

- Then, install npm libraries
- 그 후, npm 라이브러리를 설치해주세요
```bash
npm install
```

Done! You are now ready to build the MCP server!
이게 끝 입니다! 이제 MCP 서버를 빌드할 준비가 끝났습니다!

## How to build?

`src/` directory contains the source code of the MCP server.
`src/` 디렉토리에는 MCP 서버의 소스코드가 있습니다

### Configure

In `src/config/config.ts`, You can modify the MCP server-related config
`src/config/config.ts`에서 MCP 서버 관련 config 수정이 가능합니다

```json
{
    name: "lollipop",
    version: "1.0.0",
    serverPort: 3000
}
```

### Add Tool / Resource

The `src/tools/register.ts` path contains code for registering tools and resources. After creating a tool or resource function, please register it in `src/tools/register.ts`.

`src/tools/register.ts` 경로에는 tool, resource를 등록하는 코드입니다. 도구나 리소스 함수를 만든 뒤, `src/tools/register.ts`에 등록해주세요

## Run

Let's start the server now!
이제 서버를 실행 해봅시다!
```bash
npm run dev
```

You can compile and run TypeScript with this command!
해당 명령어로 TypeScript 컴파일 / 실행이 가능합니다!


## TODO

- [ ] Creating a Lightweight Abstraction for the Extended MCP SDK / MCP SDK를 더 쉽게 추상화하기기
- [ ] Add Bundling system for production. / 프로덕션을 위한 번들링 시스템 구축하기

