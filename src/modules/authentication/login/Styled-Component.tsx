import styled from "styled-components";
export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.7), 0 0 10px rgba(9, 9, 121, 0.5);
  position: relative;
  overflow: hidden;
  width: 60vw;
  max-width: 100%;
  min-height: 80%;
  height: 60%;
  z-index: 1;
  @media (max-width: 768px) {
    width: 80vw;
    min-height: 70vh;
    padding: 10px;
    box-shadow:none
  }
`;
export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;
export const Form = styled.form`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;
export const Title = styled.h1`
  font size: 2rem
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Input = styled.input`
  background-color: #eee;
  color: #17193B
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const Button = styled.button`
  border-radius: 20px;
  background-color: #17193B;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top:8px
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 10px;
  }
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 30px 0;
  }
`;
export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Overlay = styled.div`
  background: radial-gradient(farthest-side ellipse at 10% 0, #333867 20%, #17193B);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;
export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

