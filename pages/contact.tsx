import type { NextPage } from 'next'
import styled from 'styled-components';


const Contact: NextPage = () => {

  return (
    <Section>
      <h1>CONTACT</h1>
      <p>Would you like to rent your office out?</p>
      <p>Do you have any other questions?</p>
      <p>Do not hesitate to contact us!</p>
      <Form >
      <input
        type="text"
        placeholder="Your name"
        name="name"
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <textarea
        placeholder="Tell me everything..."
        name="message"
        required
      />
      <button
        type="submit"
        value="Download CTA"
      >
        send
      </button>
    </Form>
    </Section>
  )
}

export default Contact;

const Section = styled.section`
  padding: 0.5rem;
  height: calc(100vh - 130px);
  overflow: scroll;
  background-image: url("images/paper.png");
  background-size: auto 100%;
  background-size: cover;

  @media only screen and (min-width: 1200px) {
    overflow: hidden;
  }


  h1 {
    text-align: center;
    font-size: 1.7rem;
    color: #E1FDFF;
    margin-bottom: 0.8rem;

    @media only screen and (min-width: 576px) {
      margin-bottom: 2rem;
    }
  }

  p {
    color: white;
    text-align: center;
    font-weight: 500;
    margin: 0.5rem;

    @media only screen and (min-width: 576px) {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 0.5rem 3rem;
  }
`

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2rem auto;

  @media only screen and (min-width: 576px) {
    margin-top: 4rem;
    height: 400px;
    width: 400px;
  }

  input,
  textarea {
    padding: 1rem 1.2rem;
    margin-bottom: 0.7rem;
    background-color: rgba(255, 255, 255, 0.705);
    border: none;
    box-shadow: inset 2px 2px 5px #b8b9be,inset -8px -8px 15px #fff!important;
    border-radius: 0.8rem;
  }

  textarea {
    padding-bottom: 4rem;
  }

  button {
    width: 9rem;
    height: 3rem;
    margin: 1rem auto;
    background-color: #F5F5F5;
    border: none;
    border-radius: 15px;
    line-height: 3rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: #4D535F;
    padding-left: 0;
    cursor: pointer;
  }
`