import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: calc(100vh - 10px);
 h1{  
   text-align: center;
   font-size: 15px;
   animation: fadeIn 1s alternate infinite;
  }
`;
export const Spinner = styled.div`
 border: 8px solid ${props => props.theme.TransparentBackground};
 box-shadow: 0px 0px 5px ${props => props.theme.darkTransparent};
 border-left-color:  ${props => props.theme.secondary};
 height: 130px;
 width: 130px;
 border-radius: 50%;
 position: absolute;
 animation: spin 1s linear infinite;
 @keyframes spin{
     to{transform: rotate(360deg)}
 }
  
`;
