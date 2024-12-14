import Image from "next/image";
import React from "react";
import responive from "../../public/responsive-app.png";
import api from "../../public/api.png";
import frontend from "../../public/mobile-development.png";
import cms from "../../public/cms.png";
import deployment from "../../public/deployment.png";

const Services = () => {
  return (

    <>
      <section id="services" className="services">
        <div className="services-container">
          <div className="heading-container">
            <h1>Services</h1>
          </div>
          <div className="row1">
            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image
                    className="img"
                    src={responive}
                    alt="responsive-design"
                  />
                </div>
                <div className="title-heading">Responsive Design</div>
              </div>
              <div className="description">
                <p>
                Designing layouts that adapt perfectly to any screen size for&#10;a smooth user experience on all devices&#46;
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image className="img" src={api} alt="api-integration" />
                </div>
                <div className="title-heading">API Integration</div>
              </div>
              <div className="description">
                <p>
                Seamlessly integrating third&#45;party APIs to enhance your&#10;application&rsquo;s functionality and user experience&#46;
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image
                    className="img" src={frontend} alt="mobile-development"/>
                </div>
                <div className="title-heading">Frontend Development</div>
              </div>
              <div className="description">
                <p>
                Building interactive&#44; user&#45;friendly interfaces that engage&#10;your users and deliver a seamless experience&#46;
                </p>
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image className="img" src={cms} alt="cms-development" />
                </div>
                <div className="title-heading">CMS Development</div>
              </div>
              <div className="description">
                <p>
           Custom content management systems that give you complete
                  control over your website content without the hassle&#46;      
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="title">
                <div className="title-img">
                  <Image
                    className="img"
                    src={deployment}
                    alt="ecommerce-website"
                  />
                </div>
                <div className="title-heading">Deployment & Launch</div>
              </div>
              <div className="description">
                <p>
                  Developing custom e&#45;commerce platforms with secure payment
                  integration and smooth shopping experiences&#46;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
