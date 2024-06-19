import { RxDashboard } from "react-icons/rx";
import { FaServicestack, FaTruckPickup } from "react-icons/fa6";
import { MdOutlineEvent } from "react-icons/md";

export const dataSimulation = [
  {
    linkText: `Credit Score`,
    linkTo: "/dashboard/simulation/credit-score",
    linkIcon: <RxDashboard />,
    description:
      "This simulation focuses on predicting future credit scores based on historical data and trends. By inputting the initial credit score, we can project how various macroeconomic factors, such as inflation rates and GDP growth, may influence credit scores over time. The results will help in understanding the potential risks and variations in creditworthiness.",
  },
  {
    linkText: `Macroeconomic Factors `,
    linkTo: "/dashboard/simulation/macroeconomic-factors",
    linkIcon: <RxDashboard />,
    description:
      "This simulation analyzes how various macroeconomic factors, such as inflation rates, GDP growth, and unemployment rates, influence credit risk. By modeling these economic indicators, we can project their impact on credit scores and understand the broader economic conditions affecting financial stability. The results provide valuable insights into how external economic environments shape creditworthiness over time.",
  },
  {
    linkText: `Financial Behavior`,
    linkTo: "/dashboard/simulation/financial-behavior",
    linkIcon: <RxDashboard />,
    description:
      "This simulation examines the impact of financial behavior on credit risk. Factors such as spending habits, savings patterns, and debt management are analyzed to predict changes in credit scores. By understanding these behaviors, we can gain insights into how personal finance decisions affect overall credit health.",
  },
  {
    linkText: `Employment Status`,
    linkTo: "/dashboard/simulation/employment-status",
    linkIcon: <RxDashboard />,
    description:
      "Employment status is a critical factor in assessing credit risk. This simulation evaluates how changes in employment, such as job loss or income fluctuations, can affect credit scores. By simulating various employment scenarios, we can better understand the financial stability and credit risk associated with different employment conditions.",
  },
  {
    linkText: `Geographic Location`,
    linkTo: "/dashboard/simulation/geographic-location",
    linkIcon: <RxDashboard />,
    description:
      "Geographic location can significantly influence credit risk due to varying economic conditions, cost of living, and regional employment rates. This simulation analyzes how different locations impact credit scores, helping to identify regional trends and potential risks associated with residing in specific areas.",
  },
  {
    linkText: `Age Demographics `,
    linkTo: "/dashboard/simulation/age-demographics",
    linkIcon: <RxDashboard />,
    description:
      "Age demographics play a crucial role in credit risk assessment. This simulation explores how age-related factors, such as financial maturity, retirement planning, and lifecycle events, impact credit scores. By analyzing different age groups, we can identify trends and risks unique to various stages of life.",
  },
  {
    linkText: `Health Insurance`,
    linkTo: "/dashboard/simulation/health-insurance",
    linkIcon: <RxDashboard />,
    description:
      "Health insurance coverage can have significant financial implications, affecting credit risk. This simulation investigates how health insurance status and related medical expenses influence credit scores. By understanding the correlation between health insurance and financial stability, we can better assess the credit risk associated with healthcare costs.",
  },
];
