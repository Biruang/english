import React from 'react';
import styled from "styled-components";

const CenteredLayout: React.FC = ({children}) => {
    return(
        <Layout>
            {children}
        </Layout>
    )
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CenteredLayout;
