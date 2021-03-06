import React from 'react';
import Headline from '../Reusable/Headline.jsx';
import SubSectionHowItWorks from './SubSectionHowItWorks.jsx';
import { Element as ScrollDest } from 'react-scroll';

const howItWorks1 = `After signing up, donors can enter in items
  they wish to donate to those in need. Once items are donated,
  a notification is sent out to all drivers of a pending donation.`;

const howItWorks2 = `Drivers receive notification of a pending donation and
  can choose to accept. Upon accepting, they will be given all of
  the information about the pending donation.`;

const howItWorks3 = `After the pick up of a donation has been completed,
  drivers deliver the donation to the nearest pre-determined organization recipient.`;

const SectionHowItWorks = () => (
  <ScrollDest name="howItWorks">
    <section className="how-it-works bg-white">
      <Headline
        value="How it works"
        className="how-it-works__title text-center text-grey-dark"
      />
      <div className="how-it-works__content">
        <SubSectionHowItWorks
          title="donating"
          imgSrc="images/package.svg"
          imgAlt="donation package"
        >
          {howItWorks1}
        </SubSectionHowItWorks>
        <SubSectionHowItWorks
          title="pickup"
          imgSrc="images/truck.svg"
          imgAlt="pickup truck"
        >
          {howItWorks2}
        </SubSectionHowItWorks>
        <SubSectionHowItWorks
          title="delivery"
          imgSrc="images/delivery.svg"
          imgAlt="delivery truck"
        >
          {howItWorks3}
        </SubSectionHowItWorks>
      </div>
    </section>
  </ScrollDest>
);

export default SectionHowItWorks;
