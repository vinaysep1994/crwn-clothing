import styled,{css} from "styled-components";
import { Link } from "react-router-dom";

export  const OptionsContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    margin-left:30px;
`;

export const HeaderContainer =styled.div`
height: 70px;
width: 105%;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
background-color:rgb(128, 182, 216);
`;

export const LogoContainer =styled(Link)`
      height: 100%;
      width: 100px;
      padding: 10px 15px;
      align-items: center;
      display: flex
`;

export const OptionsContainer=styled.div`
     width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`;

export  const OptinLink =styled(Link)`
${OptionsContainerStyles}
`;

