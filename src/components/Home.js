import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Card, Col, ShowModal, Modal } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';
import {useState} from 'react';

function Home() {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setShowLanguageSwitcher(false);
  };

  return (
    <>
         {showLanguageSwitcher && (
        <LanguageSwitcher changeLanguage={changeLanguage} />
      )}
      <button onClick={() => setShowLanguageSwitcher(!showLanguageSwitcher)}>
        Change Language
      </button>
<Container className="mt-5">
<Container className="bg-primary text-white text-center p-5">
<h3 className="text-center">{t('welcome_message')}</h3>
</Container>
<Row className="mt-5">
<Col md={4}>
<Card>
<Card.Header> Webinars and Workshops</Card.Header>
<Card.Body>
<Card.Text>{t('promoting_collaboration')}</Card.Text>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card>
<Card.Header> Academic Publications</Card.Header>
<Card.Body>
<Card.Text>{t('documenting_knowledge')}</Card.Text>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card>
<Card.Header> Digital Resources</Card.Header>
<Card.Body>
<Card.Text>{t('creating_online_repositories')}</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>
<Row className="mt-5">
<Col md={4}>
<Card>
<Card.Header>Membership Benefits</Card.Header>
<Card.Body>
<Card.Text>{t('opportunities_for_researchers')}</Card.Text>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card>
<Card.Header>Become a Member</Card.Header>
<Card.Body>
<Card.Text>{t('call_to_action')}</Card.Text>
</Card.Body>
</Card>
</Col>
</Row>
{/* <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Language Switcher</Modal.Title>
</Modal.Header>
<Modal.Body>
<LanguageSwitcher changeLanguage={changeLanguage} />
</Modal.Body>
</Modal> */}
</Container>
</>
);
}

export default Home;