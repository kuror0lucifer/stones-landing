import { useEffect, useState } from 'react';
import { ContactBlock } from './components/contact-block';
import { ContentItemConnector } from './components/content-item/content-item-connector';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Materials } from './components/materials';
import { WelcomeItem } from './components/welcome-item';
import axios from 'axios';

type HeaderData = {
  line1: string;
  subline: string;
};

type NavData = {
  block1: string;
  block2: string;
  block3: string;
};
type ServicesData = {
  title: string;
  subtitle: string;
  text: string;
  image: string;
};

type MaterialsData = {
  name: string;
  image: string;
};

type ContactData = {
  title: string;
  subtitle: string;
  phone_number: string;
  button_text: string;
};

type FooterData = {
  text: string;
  address: string;
  phone_number: string;
  email: string;
};

export const AppConnector = () => {
  const [headerData, setHeaderData] = useState<HeaderData[]>([]);
  const [navData, setNavData] = useState<NavData[]>([]);
  const [servicesData, setServicesData] = useState<ServicesData[]>([]);
  const [materialsData, setMaterialsData] = useState<MaterialsData[]>([]);
  const [contactData, setContactData] = useState<ContactData[]>([]);
  const [footerData, setFooterData] = useState<FooterData[]>([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/header/')
      .then(response => {
        setHeaderData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке header:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/navigation/')
      .then(response => {
        setNavData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке header:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/services/')
      .then(response => {
        setServicesData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке header:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/materials/')
      .then(response => {
        setMaterialsData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке header:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/contact/')
      .then(response => {
        setContactData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке header:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/footer/')
      .then(response => {
        setFooterData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке header:', error);
      });
  }, []);

  const isReady =
    headerData.length > 0 &&
    navData.length > 0 &&
    servicesData.length > 0 &&
    materialsData.length > 0 &&
    contactData.length > 0 &&
    footerData.length > 0;
  return (
    // <Background>
    <div className='w-full h-auto bg-[#21201E]'>
      <div className='w-full'>
        <div
          className='bg-cover bg-center'
          style={{
            backgroundImage: `
      linear-gradient(to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 75%,
        rgba(33, 32, 30, 0.5) 80%,
        rgba(33, 32, 30, 0.8) 85%,
        #21201E 90%
      ),
      url('/bg.jpg')
    `,
          }}
        >
          {isReady && (
            <>
              <Header
                block1={navData[0].block1}
                block2={navData[0].block2}
                block3={navData[0].block3}
              />
              <WelcomeItem
                subline={headerData[0].subline}
                title={headerData[0].line1}
              />
            </>
          )}
        </div>

        <div
          className='flex flex-col gap-50 md:px-58'
          id='services'
        >
          {isReady &&
            servicesData.map((item, i) => (
              <ContentItemConnector
                imgPosition={i % 2 === 0 ? 'left' : 'right'}
                subtitleText={item.subtitle}
                contentText={item.text}
                titleText={item.title}
              />
            ))}
        </div>
      </div>

      {isReady && <Materials materials={materialsData} />}

      {isReady && (
        <ContactBlock
          buttonText={contactData[0].button_text}
          text={contactData[0].subtitle}
          title={contactData[0].title}
          phone_number={contactData[0].phone_number}
        />
      )}

      {isReady && (
        <Footer
          title={footerData[0].text}
          nav={navData}
          address={footerData[0].address}
          contact={footerData[0].phone_number}
          email={footerData[0].email}
        />
      )}
    </div>
    // </Background>
  );
};
