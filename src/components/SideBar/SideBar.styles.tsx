import styled from "styled-components";

export const SideBarContainer = styled.div`
  align-items: flex-start;
  background-color: rgba(255, 252, 249, 0.9);
  color: #346ea6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
  height: 94vh;
  position: absolute;
  top: 6vh;
  width: 15em;
  z-index: 99999;
`;

export const CheckYourselfContainer = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6em;
`;

export const LocationAndInfectionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const SelectedAreaContainer = styled.div`
  margin: 4em 0em;
`;

export const SideBarButton = styled.button`
  background: #346ea6;
  border-radius: 21px;
  border: 0;
  color: #fffcf9;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 1em 2em;
  width: 100%;
`;
