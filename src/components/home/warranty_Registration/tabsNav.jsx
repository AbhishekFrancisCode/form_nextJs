import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MainContainer } from "./tabNav-style";
import ProjectRegisteration from "./project_registration/page";
import ProjectStatus from "./project_status/page";
import TermsConditionsSection from "./terms-conditions/page";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography key={index}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabNavigationView = () => {
  const [value, setValue] = React.useState(2);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "Warranty Registration",
      Component: <ProjectRegisteration />,
    },
    {
      label: "Warranty Status",
      Component: <ProjectStatus />,
    },
    {
      label: "Terms & Conditions",
      Component: <TermsConditionsSection />,
    },
  ];

  // const smallScreen = useMediaQuery("(max-width: 480px)");
  const isPortrait = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <MainContainer>
      <Box
        sx={
          isPortrait
            ? {
                borderBottom: 1,
                borderColor: "divider",
                height: "60px",
                backgroundColor: "rgba(51, 51, 51, 0.10)",
              }
            : {
                borderBottom: 1,
                borderColor: "divider",
                height: "92px",
                backgroundColor: "rgba(51, 51, 51, 0.10)",
              }
        }
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            title: "indicator",
            sx: { backgroundColor: "#CE1E1E", height: 4 }, //width: "25% !important"
          }}
          sx={isPortrait ? { height: "60px" } : { height: "92px" }}
        >
          {tabs.map(({ label }, i) => (
            <Tab
              label={label}
              key={i}
              {...a11yProps(i)}
              sx={
                isPortrait
                  ? {
                      height: "58px",
                      width: "120px",
                      color: "#333",
                      textAlign: "center",
                      fontFamily: "Urbanist",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "0.5px",
                    }
                  : {
                      height: "88px",
                      width: "400px",
                      color: "#333",
                      textAlign: "center",
                      fontFamily: "Urbanist",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                      letterSpacing: "2px",
                    }
              }
            />
          ))}
        </Tabs>
      </Box>
      {isClient
        ? tabs.map(({ Component }, i) => (
            <CustomTabPanel value={value} index={i}>
              {Component}
            </CustomTabPanel>
          ))
        : []}
    </MainContainer>
  );
  // return (
  //   <div className="w-full">
  //     <Tabs
  //       defaultActiveKey="warranty"
  //       id="justify-tab"
  //       className="tab-pane active flex-grow-1 p-4"
  //       justify
  //     >
  //       <Tab eventKey="warranty" title="Warranty Registration">
  //         <ProjectRegisteration />
  //       </Tab>
  //       <Tab eventKey="status" title="Warranty Status">
  //         <ProjectStatus />
  //       </Tab>
  //       <Tab eventKey="tc" title="Tearms & Conditions">
  //         <TermsConditionsSection />
  //       </Tab>
  //     </Tabs>
  //     <Tab.Group>
  //               <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-4">
  //                   <Tab className="w-full py-2.5 text-sm font-medium leading-5 text-blue-700">Warranty & Registration</Tab>
  //                   <Tab className="w-full py-2.5 text-sm font-medium leading-5 text-blue-700">Warranty Status</Tab>
  //                   <Tab className="w-full py-2.5 text-sm font-medium leading-5 text-blue-700">Tearms & Conditions</Tab>
  //               </Tab.List>
  //               <Tab.Panels className="mt-2">
  //                   <Tab.Panel><ProjectRegisteration/></Tab.Panel>
  //                   <Tab.Panel><ProjectStatus/></Tab.Panel>
  //                   <Tab.Panel><TermsConditionsSection/></Tab.Panel>
  //               </Tab.Panels>
  //           </Tab.Group>
  //   </div>
  // );
};

export default TabNavigationView;
