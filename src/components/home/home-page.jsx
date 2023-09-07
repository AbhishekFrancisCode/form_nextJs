import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import Footer from "../../layout/footer/footer";
import Layout from "../../layout/layout";
import Navbar from "./navbar/navbar";
import WarrantyRegistration from "./warranty_Registration/imageBarTop/warrantyReg";
import TabNavigation from "./warranty_Registration/tabsNav";
import ContactBar from "./contact-us/contactBar";
import Together from "./together/together";

const HomePage = () => {
  const router = useRouter();
  const { p } = router.query;
  useEffect(() => {
    const element = document.getElementById("form");
    if (p == "work-together" && element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [p]);
  return (
    <Layout headText="Home">
      <Navbar />
      <Together/>
      {/* <WarrantyRegistration />
      <TabNavigation /> */}
      <ContactBar />
      <Footer />
    </Layout>
  );
};

export default HomePage;
