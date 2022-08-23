export interface projectDetail {
  id: string;
  name: string;
  description: string;
  github: string;
  gitpages?: string;
  stacks: string;
  img: string;
}


export const projects = [
  {
    id: "Kakao-Clone",
    name: "Kakao-Clone",
    description:   `카카오톡 디자인을 CSS와 HTML을 사용하여 구현하였습니다.
                    \n 핸드폰 크기에 맞추어 구현하였습니다. 
                    \n 그렇기 때문에 화면이 크면 화면이 크다는 문구가 나오게 하였습니다.`,
    github: `https://github.com/DonggiChae/kokoa-clone`,
    gitpages: 'https://donggichae.github.io/kokoa-clone/',
    stacks: `'HTML', 'CSS', 'Github'`,
    img: "kakao_clone.png"
  },
  {
    id: "paintJS",
    name: "paintJS",
    description:  `CSS와 JavaScript를 사용하여 구현하였습니다.
                  \n 마우스의 이벤트를 받아 Canvas에 그림을 그릴 수 있도록 하였습니다.
                  `,
    github: `https://github.com/DonggiChae/paintJS`,
    gitpages: 'https://donggichae.github.io/paintJS/',
    stacks: `'HTML', 'CSS', 'JavaScript', 'Github'`,
    img: "paintJS.png"
  },
  {
    id: "LiveChat(zoomClone)",
    name: "LiveChat(zoomClone)",
    description:  `실시간으로 영상 통화를 하고 메세지를 주고 받을 수 있도록 하였습니다.
                  \n WebSocket, Socket.io, WebRTC를 사용하였습니다.
                  \n 채팅방 생성. 화상채팅 그리고 개인 메시지를 구현였습니다.`,
    github: `https://github.com/DonggiChae/zoom`,
    gitpages: 'https://github.com/DonggiChae/zoom',
    stacks: `'WebSocket', 'Socket.io', 'WebRTC', 'JavaScript', 'pug'`,
    img: "zoomClone.png"
  },
  {
    id: "todosHome",
    name: "todosHome",
    description:  `시간과 todolist를 만들수 있는 수 있도록 GOOGLE을 참고하여 구현하였습니다.
                  \n 구석에는 원하는 문구가 랜덤으로 나오게 하였습니다.
                  \n 처음 들어가게 되면 이름을 입력하고 localStorage에 저장하였습니다. 
                  \n 저장한 이름은 인삿말과 함께 출력되도록 구현하였습니다.
                  `,
    github: `https://github.com/DonggiChae/chrome-clone-page`,
    gitpages: 'https://donggichae.github.io/chrome-clone-page/',
    stacks: `'HTML', 'CSS', 'Javascript', 'Github'`,
    img: "todos.png"

  },
  {
    id: "TwitterClone",
    name: "TwitterClone",
    description:  `FireBase를 사용하여 백엔트 코딩 없이 트위터 클론을 하였습니다. 
                  \n 아이디 인증 밑 리얼타임DB를 구현하였습니다. 
                  \n 로그인,  트윗 작성, 수정, 삭제와 같은 동작을 할 수 있습니다. 
                    `,
    github: `https://github.com/DonggiChae/nwitter`,
    gitpages: 'https://donggichae.github.io/nwitter/#/',
    stacks: `'HTML', 'CSS', 'Javascript', 'React','FireBase'`,
    img: "Twitter.png"

  },
  {
    id: "CoinChart",
    name: "CoinChart",
    description:  `코인 순위를 확인하고 각각의 코인에 대한 정보를 확인할 수 있도록 구현하였습니다.
                  \n Coin 상세페이지에서 한 페이지에서 코인 시세 차트와 가격정보를 볼 수 있도록 구현하였습니다.  
                  \n 다크모드로 전환할 수 있는 스위치는 만들어 테마를 변경할 수 있도록 하였습니다.
                  `,
    github: `https://github.com/DonggiChae/CoinChart`,
    gitpages: 'https://donggichae.github.io/CoinChart/',
    stacks: `'HTML', 'CSS', 'React', 'Github'`,
    img: "CoinChart.png"
  },
  {
    id: "NetflixClone",
    name: "NetflixClone",
    description:  `넷플릭스의 화면을 구현하였습니다.
                  \n   
                  \n 
                  `,
    github: `https://github.com/DonggiChae/nomflix-clone`,
    gitpages: 'https://github.com/DonggiChae/nomflix-clone',
    stacks: `'HTML', 'CSS', 'React', 'Github'`,
    img: "NetflixClone.png"
  },
  {
    id: "TodoList",
    name: "TodoList",
    description:  `TodoList를 해야할 것, 하는 중인것,끝낸 것으로 나눠서 구현하였습니다.
                  \n 각각의 리스트들을 드래그앤 드롭으로 이동시킬수 있습니다. 
                  \n 필요 없는 리스트는 스레기통에 넣어 삭제할수 있도록 구현하였습니다.
                  `,
    github: `https://github.com/DonggiChae/trello-clone`,
    gitpages: 'https://donggichae.github.io/trello-clone/',
    stacks: `'HTML', 'CSS', 'React', 'Github'`,
    img: "TodoList.png"
  },
  {
    id: "wantedChallenge1",
    name: "wantedChallenge1",
    description:  `원티드에서 프리온보딩 챌린지를 통해서 2주동안 과제 수행의 결과입니다.
                  TypeScript와 React를 사용하였습니다.
                  ReactQuery를 사용하여 서버에서 API를 불러오고 수정하였습니다.
                  `,
    github: `https://github.com/DonggiChae/wanted-pre-onboarding-challenge-fe-1`,
    gitpages: 'https://github.com/DonggiChae/wanted-pre-onboarding-challenge-fe-1',
    stacks: `'HTML', 'CSS', 'React', 'Github', 'TypeScript', 'ReactQuery'`,
    img: "LogInPage.png"
  },

]

export interface Iaboutme {
  school: string;
  major: string;
  position: string;
  skills: string;
  simpleCoverLetter: string;
}


export const aboutMe = 
  {
    school: "공주대학교",
    major: "기계설계과",
    position:   `프로트엔드 개발자`,
    skills: `Python,Git,React,Github,JavaScript,HTML,CSS,
            TypeScript`,
    simpleCoverLetter: `프론트엔드 신입 개발자입니다.
                        웹 페이지를 클론 코딩하면서 웹을 공부를 시작하였습니다.
                        클론 코딩을 하면서 TypeScript와 React에 대해서 공부하였습니다. 그리고 WebRTC, SocketIO, WebSockets을 사용하여 간단한 화상채팅 서비스를 구현하였습니다.
                        FireBase를 사용하여 리얼타임DB를 구현하였습니다. Next.js를 사용하여 서버사이드렌더링에 대해서 학습하였습니다.
                        더욱 좋은 경험을 제공하기 위해 꾸준히 배우고 성장하는 개발자가 되겠습니다.`,
  }
