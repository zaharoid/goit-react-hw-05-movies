import styled from '@emotion/styled';

export const Header = styled.header`
  min-height: 20px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #a73fb5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const NavList = styled.ul`
  margin-left: 250px;
  display: flex;
  align-items: center;

  gap: 40px;
`;
