export interface projectDetail {
  id: string;
  name: string;
  description: string;
  github: string;
  gitpages?: string;
  stacks: string[];
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
    stacks: ['HTML', 'CSS', 'Github'],
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
    stacks: ['HTML', 'CSS', 'JavaScript','Github'],
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
    stacks: ['WebSocket', 'Socket.io', 'WebRTC', 'JavaScript', 'pug'],
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
    stacks: ['HTML', 'CSS', 'Javascript','Github'],
    img: "todos.png"

  },
  {
    id: "d",
    name: "Kakao-Clone",
    description:  `카카오톡 디자인을 CSS와 HTML을 사용하여 구현하였습니다.`,
    github: `https://github.com/DonggiChae/kokoa-clone`,
    gitpages: 'https://donggichae.github.io/kokoa-clone/',
    stacks: ['HTML', 'CSS', 'Github'],
    img: "kakao_clone.png"

  },
  {
    id: "d",
    name: "Kakao-Clone",
    description:  `카카오톡 디자인을 CSS와 HTML을 사용하여 구현하였습니다.`,
    github: `https://github.com/DonggiChae/kokoa-clone`,
    gitpages: 'https://donggichae.github.io/kokoa-clone/',
    stacks: ['HTML', 'CSS', 'Github'],
    img: "kakao_clone.png"

  },
]

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };