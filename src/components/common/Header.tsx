import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Header>
      <Wrap>
        <Container>
          <Logo>
            <NavLink
              to='/'
            >kingsjw#</NavLink>
          </Logo>
          <Menu>
            <MenuItem>
              <NavLink
                to='/product'
                activeClassName='active'
              >상품목록</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to='/cart'
                activeClassName='active'
              >장바구니</NavLink>
            </MenuItem>
          </Menu>
        </Container>
      </Wrap>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 80px;
`;

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #f2f2f2;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 1;
`;

const Container = styled.div`
  width: ${ props => props.theme.wrapWidth };
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Menu = styled.ul`
  display: flex;
`;

const MenuItem = styled.li`
  font-size: 16px;
  margin-left: 27px;
  &:first-of-type{
    margin-left: 0;
  }
  a{
    display: block;
    color: inherit;
    text-decoration: none;
    color: #000;
    &.active{
      color: ${ props => props.theme.color.main };
    }
    &:hover{
      color: ${ props => props.theme.color.main };
    }
  }
`;

export default HeaderComponent;