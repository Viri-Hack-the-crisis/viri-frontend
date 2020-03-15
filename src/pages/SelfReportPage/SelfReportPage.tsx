import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StoreContext } from "../../state/store";

import { ReportContainer } from "../../components/Report/Report.styles";
import { H1 } from "../../components/Report/Report.styles";
import { H2 } from "../../components/Report/Report.styles";
import { ReportText } from "../../components/Report/Report.styles";
import { ButtonLine } from "../../components/Report/Report.styles";
import { ButtonBlue } from "../../components/Report/Report.styles";

interface Props {}

const SelfReportPage = (props: Props) => {
  const { userLoggedIn } = useContext(StoreContext);
  const history = useHistory();

  useEffect(() => {
    if (!userLoggedIn) {
      history.replace("/");
    }
  }, [history, userLoggedIn]);

  return (
    <ReportContainer>
      <div>
        <div>
          <H1>Self-check</H1>
          <ReportText>Run a quick self-assessment test to understand if you have potentially been infected by Corona Virus and anonymously notify people about potential infection with whom you have been close contact within 2-weeks.</ReportText>
        </div>
        <div>
          <H2>Have you had any of the following symptoms in the last 2 weeks:</H2>
          <ButtonLine>
            <ButtonBlue>Dry cough</ButtonBlue>
            <ButtonBlue>Fatique</ButtonBlue>
            <ButtonBlue>Fever</ButtonBlue>
            <ButtonBlue>Shortness of breath</ButtonBlue>
            <ButtonBlue>Other</ButtonBlue>
            <ButtonBlue>None</ButtonBlue>
          </ButtonLine>
        </div>
        <div>
          <H2>Have you had contact with someone experiencing symptoms in the last 2 weeks?</H2>
          <ButtonLine>
            <ButtonBlue>Yes</ButtonBlue>
            <ButtonBlue>No</ButtonBlue>
            <ButtonBlue>I dont't know</ButtonBlue>
          </ButtonLine>
        </div>
      </div>
      <div>
        <H1>Result</H1>
        <div>
          <H2>Chance you are affected:</H2>
          <ButtonLine>
            <ButtonBlue>Low</ButtonBlue>
            <ButtonBlue>Moderate</ButtonBlue>
            <ButtonBlue>High</ButtonBlue>
          </ButtonLine>
        </div>
        <div>
          <H2>Based on the result we recommend:</H2>
          <ButtonLine>
            <ButtonBlue>Seek medical help</ButtonBlue>
            <ButtonBlue>Stay home</ButtonBlue>
          </ButtonLine>
        </div>
      </div>
    </ReportContainer>
  );
};

export default SelfReportPage;
