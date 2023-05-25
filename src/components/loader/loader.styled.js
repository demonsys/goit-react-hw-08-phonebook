import styled from 'styled-components';

export const LoaderEl = styled.div`
border: 5px solid #f3f3f3;
animation: spin 1s linear infinite;
border-top: 5px solid #555;
border-radius: 50%;
width: 50px;
height: 50px;
margin-left: 30px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
