import NotFound from "@/app/not-found";
import { AgeDemographics } from "@/components/Dashboard/Simulation/AgeDemographics";
import { CreditScore } from "@/components/Dashboard/Simulation/CreditScore";
import { EmploymentStatus } from "@/components/Dashboard/Simulation/EmploymentStatus";
import { FinancialBehavior } from "@/components/Dashboard/Simulation/FinancialBehavior";
import { GeographicLocation } from "@/components/Dashboard/Simulation/GeographicLocation";
import { HealthInsurance } from "@/components/Dashboard/Simulation/HealthInsurance";
import { MacroeconomicFactors } from "@/components/Dashboard/Simulation/MacroeconomicFactors";
import React from "react";

const page = ({ params }) => {
  const renderComponent = () => {
    switch (params.name) {
      case "credit-score":
        return <CreditScore />;
      case "macroeconomic-factors":
        return <MacroeconomicFactors />;
      case "financial-behavior":
        return <FinancialBehavior />;
      case "employment-status":
        return <EmploymentStatus />;
      case "geographic-location":
        return <GeographicLocation />;
      case "age-demographics":
        return <AgeDemographics />;
      case "health-insurance":
        return <HealthInsurance />;
      default:
        return <NotFound />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default page;
