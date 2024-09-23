import React from "react";
import "../Pages_sub1.css";

const Page1Sub1: React.FC = () => {
  return (
    <div className="pages_sub1">
      <div className="content-container">

        <h1>Millennium Elephant Foundation</h1>

        <p>
        MEF identifies mistreated elephants and subsequently works to relocate them onto the sanctuary grounds, 
          a process that involves paying the elephant owners a monthly wage. The organization then covers all medical, food bills, 
          and a salary for the mahout. The elephant owners are not obligated to cover any of the costs, 
          as many of them turn to MEF when they are no longer capable of coping with the immense expenses required by keeping an elephant.
           The average daily expenditure on an elephant amounts to around 7000 rupees, over $50.
            Many of the elephants are recovered from the logging industry, within which poor living and working conditions can cause tusk injuries, potentially resulting in breakages, nerve damage, and gum disease. The other elephants MEF rescues come from the different ways in which elephants are kept in captivity in Sri Lanka: elephants that individual people keep in their home gardens, temple-owned elephants which are often neglected when not used for religious purposes.
        </p>

      </div>
    </div>
  );
};

export default Page1Sub1;
