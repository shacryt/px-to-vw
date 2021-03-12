import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <Wrapper className='fl-column fl-full-center'>
      <Link to='vw-to-px'>VW to PX</Link>
      <Link to='px-to-vw'>PX to VW</Link>
    </Wrapper>
  )
}

export default Home
