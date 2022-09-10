import styled from "styled-components";
import  hiMotion   from '../data/mimoji/hiMotion.png'


const Wrapper = styled.div`
  background: black;
  overflow-x:hidden;
`;

const Introduce = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Frame = styled.div`
  width: 35%;
  height: 35%;
`
const HelloMimoji = styled.img`
  width: 95%;
  height: 95%;
  padding-top: 15%;
`

const Article = styled.article`
  padding-top: 100px;
  color: white;
  width: 35%;
  height: 35%;
`

const Title = styled.h1`
  font-size: 3em;
  padding-bottom: 30px;
  font-weight: 600;
`

const Content =styled.p`
  font-size: 2em;
  display: flex;
  flex-direction: column;
  font-weight: 550;
`

function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <Introduce>
      <Frame>
        <HelloMimoji src={hiMotion} />
      </Frame>
        <Article>
          <Title>
            Welcome to my page!!!
          </Title>
          <Content>
            Hi! I'm Donggi.
            <br/>
            <br/>
            I'm frontEnd Developer.
          </Content>
        </Article>
      </Introduce>
    </div>
    
  );
}
export default Home;