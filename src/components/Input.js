import styled from "styled-components";

const Input = styled.input`
  border: ${(props) => props.theme.boxBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.bgColor};
  height: 30px;
  padding: 0px 13px;
  font-size: 12px;
  margin-bottom: 3px;
`;

// const Input = ({
//   name,
//   className,
//   placeholder,
//   type,
//   value,
//   onChange,
//   required = true,
// }) => (
//   <Container
//     name={name}
//     className={className}
//     placeholder={placeholder}
//     type={type}
//     value={value}
//     onChange={onChange}
//     required={required}
//   />
// );

export default Input;
