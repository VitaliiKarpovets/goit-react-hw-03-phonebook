import styled from "styled-components";

export const Form = styled.form`
  border: 1px solid black;
  width: 400px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.187;
  background-color: tomato;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 20px;
  :first-child {
    padding-top: 15px;
  }
`;

export const FormInput = styled.input`
  width: 200px;
`;

export const FormButton = styled.button`
  margin: 0 0 20px 20px;
  width: 100px;
  height: 30px;
`;
