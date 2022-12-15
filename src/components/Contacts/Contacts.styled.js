import styled from 'styled-components';

export const ContactList = styled.ul`
  font: normal 20px 'Bitter', serif;
  color: #2a88ad;
  margin-bottom: 5px;
`;

export const Item = styled.li`
  display: 'flex';
  gap: 10px;
`;

export const ContactBtn = styled.button`
  background: #2a88ad;
  padding: 8px 20px 8px 20px;
  border-radius: 5px;
  -webkit-0border-radius: 5px;
  -moz-border-radius: 5px;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12);
  font: normal 30px 'Bitter', serif;
  -moz-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
  -webkit-box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
  box-shadow: inset 0px 2px 2px 0px rgba(255, 255, 255, 0.17);
  border: 1px solid #257c9e;
  font-size: 10px;
  margin-left: 15px;
`;
