import React, { useState } from "react";
import "./Value.css";

import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import data from "../../Utils/Accordion";
import { useScroll } from "framer-motion";
function Value() {
  const [className, setclassName] = useState(null);
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you <br />
            We believe a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, index) => (
              <AccordionItem className="accordionItem" key={index}>
                {/* <AccordionItemState>
                  {({ expanded }) =>
                    expanded
                      ? setclassName("expanded")
                      : setclassName("collapsed")
                  }
                </AccordionItemState> */}
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;
