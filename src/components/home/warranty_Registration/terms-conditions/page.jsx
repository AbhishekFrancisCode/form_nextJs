import Link from "next/link";
import React from "react";
import polygon from "../../../../../public/assets/polygon21.svg";
import { NavbarContainer, NavImage } from "../../navbar/navbar";
import {
  MainContainer,
  HeadingTextContaner,
  HeadingSubTextContaner,
  Content,
  ContentHeading,
  ContentBox,
  RowContainer,
  Content1,
  Content2,
  Content3,
  RowContent,
  RowContentBox,
  RowContentImage,
  RowContentText,
  SubContent,
  SubDetailContent,
  TableContainer,
} from "./terms-conditions-styles";
import Footer from "../../../../layout/footer/footer";

const TermsConditionsSection = () => {
  return (
    <MainContainer>
      <HeadingTextContaner>finemake technologies pvt. ltd.</HeadingTextContaner>
      <HeadingSubTextContaner>Terms & Conditions</HeadingSubTextContaner>
      <div className="py-1 mb-3 mt-5">
        <ContentHeading>simply put</ContentHeading>
        <Content>Every company has its terms. These are ours.</Content>

        <ContentHeading>Modular Services</ContentHeading>
        <Content>
          All Finemake products which are manufactured in the factory will be
          covered under Modular Services. These are covered from any defect or
          damage under this warranty policy.
        </Content>

        <ContentHeading>Modular wardrobe & storage</ContentHeading>
        <Content>
          Finemake warranty protects your modular wardrobe and storage against
          any defects in materials and workmanship for a period of up to 10
          years from the date of possession. If the product is found to be
          defective upon inspection by a company authorized representative, the
          defective part will be repaired or replaced, in accordance with the
          claim terms below.
        </Content>

        <TableContainer>
          <RowContainer mobile>
            <ContentBox mobile>
              <Content1>Products</Content1>
              <Content2>warranty</Content2>
              <Content3>exceptions</Content3>
            </ContentBox>
          </RowContainer>
          <RowContainer>
            <ContentBox>
              <Content1 smalltext>Cabinets, Shutters,Drawers & Panels</Content1>
              <Content2 smalltext lowercase>
                10 years warranty100% replacement - free of cost
              </Content2>
              <Content3 smalltext lowercase>
                <ul>
                  <li>
                    Only bends that are less than 4mm will be attended by
                    Finemake.
                  </li>
                  <li>
                    Does NOT cover damage caused by misuse, negligence, normal
                    wear & tear.
                  </li>
                </ul>
              </Content3>
            </ContentBox>
          </RowContainer>
          <RowContainer>
            <ContentBox>
              <Content1 smalltext>Accessories/ hardware</Content1>
              <Content2 smalltext lowercase>
                As per Manufacturer’s Warranty
              </Content2>
              <Content3 smalltext lowercase>
                <ul>
                  <li>Rusting is NOT covered under warranty.</li>
                  <li>
                    Does NOT cover damage caused by misuse, negligence, normal
                    wear & tear.
                  </li>
                </ul>
              </Content3>
            </ContentBox>
          </RowContainer>
        </TableContainer>
        <ContentHeading>warranty Details</ContentHeading>
        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                Finemake will honor its warranty only when:
              </RowContentText>
            </RowContentBox>
          </RowContent>
          <SubContent className="px-6">
            <li>
              The product supplied and installed is properly maintained and used
              for normal domestic use.
            </li>
            <li>
              The product is still at its original installed position and
              location.
            </li>
            <li>The warranty has not expired</li>
            <li>Receipt of complete payments from the partner</li>
          </SubContent>
        </div>

        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                Finemake does not warrant against and is not responsible for (i)
                any condition of the Product attributable to; or (ii) any damage
                to Products caused by any of the following:
              </RowContentText>
            </RowContentBox>
          </RowContent>
          <SubContent className="px-6">
            <li>
              Wear and tear suffered through normal use (including scratches,
              dents and cuts) or damage caused by impacts or accidents.
            </li>
            <li>
              Rusting of channels, hinges and other metallic parts. These could
              be damaged due to household chemicals and sprays & hence care to
              be taken while using such products around hardware and
              accessories.
            </li>
            <li>
              Water leakage and seepage within the building structure and
              continuous dampness of the surface beyond.
            </li>
            <SubDetailContent className="px-4">
              <li>(seventy two) hours for BWP grade plywood (IS710)</li>
              <li>(forty eight) hours for BWR grade plywood (IS303) and</li>
              <li>
                (Twenty four) hours for exterior grade PB and HDHMR materials.
              </li>
            </SubDetailContent>
            <li>
              Degradation, discoloration, damage, fading etc. in colour, grain,
              or texture of natural wood materials, laminates and other
              materials due to exposure to intensive or excessive light,
              sunlight, moisture or heat or other environmental factors.
            </li>
            <li>
              Use of inappropriate chemicals, detergents, abrasives or other
              inappropriate cleaning agents that can damage the wooden surface
              of the Products or rust accessories.
            </li>
            <li>
              Mistreatment, negligent use, misuse, insufficient or improper care
              (including but not limited to exposure to harsh weather
              conditions).
            </li>
            <li>
              Alterations, modifications or use of Products which is beyond or
              inconsistent with supplied Product instructions and not been
              authorized by Finemake.
            </li>
            <li>Damage or stains due to water leakage and/or seepage.</li>
            <li>
              Damage caused by any Force majeure event (such as flooding,
              hurricane, earthquake, lightning, etc.), environmental condition
              (such as air pollution, solvent exposure etc.), or staining from
              foreign substances (such as dirt, grease, oils, etc.)
            </li>
            <li>
              Normal incidental deterioration like nicks, cuts, scratches and
              abrasions which are resulting from normal use during the standard
              life of the product.
            </li>
          </SubContent>
        </div>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              Finemake warrants to the B2B partner that all Products will be
              free from any manufacturing defect.
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              The warranty only applies if the Products are properly installed,
              maintained and used for normal domestic use.
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              The warranty will not be applicable in case of movement of
              material from the originally installed site to another site.
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              The warranty period for (i) hardware (ii) accessories that are
              used in all our Products will be the same as that offered by the
              original equipment manufacturer.
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                If a defect occurs within the respective warranty period, the
                B2B partner must notify FineMake in writing and, upon
                confirmation of the defect by an authorized Finemake
                representative, Finemake’s sole responsibility shall be, at its
                option to either:
              </RowContentText>
            </RowContentBox>
          </RowContent>
          <SubContent className="px-6">
            <li>Arrange for the repair of defective product; or</li>
            <li>Arrange a replacement of defective product</li>
          </SubContent>
        </div>

        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                The scope of Finemake warranty cannot be changed or broadened by
                any authorized representative of the Finemake nor its B2B
                partner.{" "}
              </RowContentText>
            </RowContentBox>
          </RowContent>
        </div>

        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                {" "}
                Repair(s) and/or replacement(s) are subject to the current
                product offerings of styles and construction options within the
                FineMake product line, at the time of the claim. If a claim is
                filed after the Finemake product becomes obsolete or
                discontinued, Finemake will replace the affected component with
                a replacement component of a similar style based on availability
                at the time of the claim.{" "}
              </RowContentText>
            </RowContentBox>
          </RowContent>
        </div>

        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                Any decision regarding repair of the said component (in part or
                whole) solely lies with the authorized Finemake representative.
                The decision will be made following an inspection by the
                representative whether to repair at site, or return product to
                the factory for refurbishing/ replacement.{" "}
              </RowContentText>
            </RowContentBox>
          </RowContent>
        </div>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              Liability: Finemake will make all efforts to replace/ repair the
              said defect within a reasonable period of time. Finemake will not
              be liable for any direct/indirect loss to the user due to the
              defect or delay in providing the service, or any fault arising due
              to design, application or installation. In no event shall the
              liability of Finemake, under this warranty, exceed the purchase
              price of the product or its replacement.{" "}
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              The warranty is not renewed, in case Finemake replaces the modular
              cabinets or components in part or whole during the said warranty
              period. The replaced parts will continue to be covered under our
              warranty only till the remainder of the period as indicated in its
              respective table. Barring components which carry a lifetime
              warranty, the warranty for any product under any circumstances
              will not exceed a period of 3 year (for semi-modular products).
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              10 years for modular wardrobes, storage & for kitchens from the
              date of delivery.
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              The terms and conditions are governed by the laws of India.
              Bengaluru courts shall have exclusive jurisdiction to settle any
              claim or dispute which might arise out of or in connection with
              these terms and conditions.
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <div className="p-6 m-4">
          <h5>Things you should know about shutter bends</h5>
        </div>

        <RowContent>
          <RowContentBox>
            <RowContentImage src={polygon} alt="pointer" priority={true} />
            <RowContentText>
              Bend is a natural process which occurs due to weather conditions,
              moisture levels in the atmosphere and usage. As an industry
              practice, Finemake permits a tolerance of 4mm for shutter bend.
              Any bend which is more than 4mm will be corrected either by
              adjustment of hinges, dismantling of shutters and/or fixing of
              straighteners at the back of the shutter (at customer location or
              taking it back to the factory).
            </RowContentText>
          </RowContentBox>
        </RowContent>

        <div>
          <RowContent>
            <RowContentBox>
              <RowContentImage src={polygon} alt="pointer" priority={true} />
              <RowContentText>
                Corrections will be done as per following scenarios:{" "}
              </RowContentText>
            </RowContentBox>
          </RowContent>
          <SubContent className="px-6">
            <li>
              {" "}
              If the bend is &lt=4mm, no action needed. There will not be any
              functional issue in the product.
            </li>
            <li>
              If the bend is &gt=4mm, then the following steps will be taken to
              correct the same:
            </li>
            <SubDetailContent className="px-4">
              <li>
                Adjust hinges to see if the bend can be brought to within the
                tolerance limit of 4mm. If deemed necessary, fix magnetic
                catchers to tighten the ends.
              </li>
              <li>
                {" "}
                If Step 1 doesn't bring the bend within 4mm, then remove the
                shutter and bring it to the factory to correct the bend.
              </li>
              <li>
                If necessary, apply straighteners at the backside of the shutter
                to correct the bend.
              </li>
            </SubDetailContent>
          </SubContent>
        </div>
      </div>
    </MainContainer>
  );
};

export default TermsConditionsSection;
