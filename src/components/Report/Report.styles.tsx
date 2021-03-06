import styled from "styled-components";

export const ReportContainer = styled.div`
    justify-content: left;
    margin: auto;
    max-width: 710px;
    height: auto;
`;

export const H1 = styled.div`
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-transform: uppercase;
    color: #346EA6;
    padding-bottom: 30px;
    margin-top: 100px;
`;

export const H2 = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #346EA6;
    padding-bottom: 26px;
`;

export const ReportText = styled.p`
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding-bottom: 36px;
`;

export const ButtonLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 540px;
    margin-bottom: 40px;
    margin-left: -5px;
`;

export const ButtonBlue = styled.button`
    display: flex;
    border: 1px solid #346EA6;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 12px 23px;
    color: #346EA6;
    font-size: 16px;
    line-height: 19px;
    margin: 5px;
    background-color: transparent;
`;

export const ButtonBlueActive = styled.button`
    display: flex;
    border: 1px solid #346EA6;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 12px 23px;
    color: #FFFCF9;
    font-size: 16px;
    line-height: 19px;
    margin: 5px;
    background-color: #346EA6;
`;

export const ButtonYellowActive = styled.button`
    display: flex;
    border: 1px solid #F8DB57;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 12px 23px;
    color: #FFFCF9;
    font-size: 16px;
    line-height: 19px;
    margin: 5px;
    background-color: #F8DB57;
`;