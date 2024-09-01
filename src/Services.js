import React from "react";
import "./Services.css";
import service from "./images/services.jpg";
import servicesimage from "./images/carousel1.jpg";
import Carousel from "./Carousel";
import home from './images/home.png'

function Services() {
  const elements = [
    {
      image:home,
      title: "Home Loans",
      paragraph:
        "At Alphaa Financial Solutions, we specialize in guiding you through every step of your home loan journey. lpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way.",
      link: "KNOW MORE",
    },
    {
        image:home,
        title: "Refinancing",
        paragraph:
          "Refinancing is the process of replacing an existing loan with a new one, typically to take advantage of better terms.",
      },
      {
        image:home,
        title: "Self Managed Super fund SMSF",
        paragraph:
          "At Alphaa Financial Solutions, we offer expert guidance on Self-Managed Super Fund (SMSF) loans to help you maximize your investment potential. Whether you’re looking to acquire residential or commercial property through your SMSF, our team provides tailored advice and innovative financing solutions to suit your needs.",
        link: "KNOW MORE",
      },
      {
        image:home,
        title: "Personal loans",
        paragraph:
          "At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs. Whether you’re looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you. ",
        link: "KNOW MORE",
      },
      {
        image:home,
        title: "Our Story",
        paragraph:
          "At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you’re seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth. ",
        link: "KNOW MORE",
      },
  ];
  const elements2 = [
    {
        image:home,
        title: "First home buyer",
        paragraph:
          "A first-time homebuyer is an individual or household purchasing a home for the first time. ",
        link: "KNOW MORE",
      },
      {
        image:home,
        title: "Investment Property",
        paragraph:
          "An investment property is a real estate asset purchased with the intention of generating income or profit, ",
        link: "KNOW MORE",
      },
      {
        image:home,
        title: "Asset finance",
        paragraph:
          "At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease. Whether you’re looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.",
        link: "KNOW MORE",
      },
      {
        image:home,
        title: "Expat Loans",
        paragraph:
          "At Alphaa Financial Solutions, we offer specialized expat loan services designed to meet the unique needs of expatriates. Whether you’re looking to purchase a property, invest, or manage financial obligations in a new country, our expert team provides tailored solutions and comprehensive support. ",
        link: "KNOW MORE",
      },
  ]
  return (
    <div className="services">
      <div className="service-head">
        <img className="services-image" src={service} alt="home"></img>
        <h5 className="services-heading">Services</h5>
        <h1 className="services-heading2">Our Services</h1>
      </div>
      <div className="services-body">
        <div className="grid">
        <div className="grid1">
          {elements.map((item, i) => {
            return (
              <div className="grid-box">
                 <div className="grid-heading">
                    <img src={item.image} className="service-images" alt="image"></img>
                    <div><h5>{item.title}</h5></div>
                 </div>
                 <div>
                 <p>{item.paragraph}</p>
                 </div>
              </div>
            );
          })}
          </div>
          <div className="grid1">
          {elements2.map((item, i) => {
            return (
                <div className="grid-box">
                 <div className="grid-heading">
                    <img src={item.image} className="service-images" alt="image"></img>
                    <div><h5>{item.title}</h5></div>
                 </div>
                 <div>
                 <p>{item.paragraph}</p>
                 </div>
              </div>
            );
          })
          }
          </div>
        </div>
        <div className="images">
          <img className="services-side-images" src={servicesimage}></img>
        </div>
      </div>
    </div>
  );
}

export default Services;
