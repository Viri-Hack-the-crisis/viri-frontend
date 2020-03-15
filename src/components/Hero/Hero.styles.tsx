import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 1440px;
    height: 100px;
`;

export const HeroRight = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    margin-top: 100px;
`;

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    height: 100px;
    padding: 140px 0px;
`;

export const HeroPic = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const H1 = styled.div`
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    text-transform: uppercase;
    color: #346EA6;
    padding-bottom: 30px;
`;

export const H2 = styled.div`
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-transform: capitalize;
    color: #346EA6;
    padding-bottom: 16px;
`;

export const ButtonAction = styled.button`
    max-width: 345px;
    background-color: #1DE1CE;
    color: #ffffff;
    border-radius: 20px;
    border: none;
    padding: 28px 60px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 30px;
`;

export const HeroText = styled.p`
    font-size: 16px;
    line-height: 19px;
    max-width: 540px;
`;