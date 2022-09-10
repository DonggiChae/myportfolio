import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium, faGoogle} from '@fortawesome/free-brands-svg-icons'

const Wrapper = styled.div`
  background: black;
  overflow-x:hidden;
  width: 100vw;
  height: 100vh;
`;

const ContactList = styled.main`
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Section = styled.section`
  padding: 3%;
`

function Contact() {
  return (
    <Wrapper>
      <ContactList>
        <Section>
          <a href="https://github.com/DonggiChae" target="_blank">
            <FontAwesomeIcon icon={faGithub} size='8x' />
          </a>
        </Section>
        <Section>
          <a href="https://medium.com/@chaedonggi" target="_blank">
            <FontAwesomeIcon icon={faMedium} size='8x' />
          </a>
        </Section>
        <Section>
          <a href="mailto:chaedonggi@gmail.com">
            <FontAwesomeIcon icon={faGoogle} size='8x' />
          </a>
        </Section>
      </ContactList>
    </Wrapper>
  );
};
export default Contact;