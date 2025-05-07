import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/CertificationCards.scss';

interface Cert {
  title: string;
  provider: string;
  date?: string;
  link?: string;
}

const certifications: Cert[] = [
  {
    title: 'Machine Learning A‑Z™: Hands‑On Python & R in Data Science',
    provider: 'Udemy',
    date: 'Issued 2020',
    link: 'https://www.udemy.com/certificate/UC-1c738c4e-919f-4e25-a489-d42a0870f834/',
  },
  {
    title: 'Basic Image Classification with TensorFlow',
    provider: 'Coursera / Google',
    date: 'Issued 2021',
    link: 'https://www.coursera.org/account/accomplishments/verify/ERGGFT8XR7PP',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++',
    provider: 'Udemy',
    date: 'Issued 2019',
    link: 'https://drive.google.com/file/d/1NmKHBRVMKt5A9m-WcvyvqNcNZ8xzdynG/view',
  },
  {
    title: 'Cloud Engineering with Google Cloud',
    provider: 'Coursera',
    date: 'Issued 2022',
    link: 'https://drive.google.com/file/d/1mYeWbCCerwZmqA6SYFfUDYdVu9jeO_yX/view',
  },
  {
    title: 'Problem Solving with Creative & Critical Thinking',
    provider: 'edX',
    date: 'Issued 2021',
  },
  {
    title: 'Introduction to Programming Using JavaScript',
    provider: 'Microsoft / edX',
    date: 'Issued 2018',
  },
  {
    title: 'Essential Google Cloud Infrastructure: Foundation',
    provider: 'Coursera',
    date: 'Issued 2022',
  },
  {
    title: 'C++ Programming Certification',
    provider: 'HackerRank',
    date: 'Issued 2020',
  },
];

const CertificationCards: React.FC = () => (
  <div id="certifications" className="certifications-section">
    <h1>Certifications</h1>
    <div className="cert-grid">
      {certifications.map(({ title, provider, date, link }) => (
        <div className="cert-card" key={title}>
          <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
          {link ? (
            <h3 className="cert-title">
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h3>
          ) : (
            <h3 className="cert-title">{title}</h3>
          )}
          <p className="cert-provider">{provider}</p>
          {date && <p className="cert-date">{date}</p>}
        </div>
      ))}
    </div>
  </div>
);

export default CertificationCards;
