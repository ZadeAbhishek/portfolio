import React from 'react';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import '../assets/styles/Project.scss';

interface ProjectItem {
  title: string;
  description: string;
  img: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    title: 'City Disaster Management (Advanced Software Engineering)',
    description:
      'React + Node.js platform with Firebase realtime updates, deployed on Microsoft Azure for resilient disaster response and asset tracking.',
    img: mock01,
    link: 'https://github.com/ZadeAbhishek/CS7CS3-Response-to-City-Disaster',
  },
  {
    title: 'Google Summer of Code 2021 — CircuitVerse Touch Upgrade',
    description:
      'Implemented full touch support & responsive UI for CircuitVerse digital‑logic simulator, boosting mobile engagement by 35 %.',
    img: mock02,
    link: 'https://summerofcode.withgoogle.com/archive/2021/projects/5739434628087808',
  },
  {
    title: 'Coeus — Lucene‑Powered Search Engine (2024)',
    description:
      'Java + Apache Lucene engine with BM25 / LM Dirichlet ranking and custom analyzers for sub‑100 ms search.',
    img: mock03,
    link: 'https://github.com/ZadeAbhishek/coeus-2024',
  },
  {
    title: 'VBAD‑MASS — Voice‑Based Answer Detection (BE Final‑Year Project)',
    description:
      'Python/NLP pipeline that transcribes student answers and evaluates them via TF‑IDF & cosine similarity; paper published in IJTEAMS.',
    img: mock04,
    link: 'https://github.com/ZadeAbhishek/VBAD-MASS',
  },
  {
    title: 'NutriFit Genie — Adaptive Fitness Recommender',
    description:
      'Context‑bandit RL engine personalising meal & workout plans; React, Node.js, and MongoDB stack.',
    img: mock05,
    link: 'https://github.com/NutriFitGenie/adaptive_application',
  },
  {
    title: 'Distributed‑Systems Pac‑Man (Multiplayer)',
    description:
      'Go‑Gin backend, React canvas frontend, Kafka bus, and Kubernetes auto‑scaling for smooth global play.',
    img: mock06,
    link: 'https://github.com/clairegregg/dist_systems_group_M',
  },
  {
    title: 'IoT‑Based Ukulele (ESP32 + Firebase)',
    description:
      'Servo‑driven strumming & flex‑sensor fretting controlled via Firebase; demonstrates cloud‑edge sync.',
    img: mock07,
    link: 'https://github.com/IOT-group8',
  },
  {
    title: 'Connect4 & Tic‑Tac‑Toe AI (Q‑Learning vs Minimax)',
    description:
      'RL agents trained to defeat minimax baselines; Python visual analytics of learning curves.',
    img: mock08,
    link: 'https://github.com/ZadeAbhishek/CS7IS2-Artificial-Intelligence-Assigment-2',
  },
  {
    title: 'Infinite Board — Real‑Time Collaborative Canvas',
    description:
      'CRDT‑based drawing board with WebSockets peer mesh enabling latency‑tolerant co‑editing.',
    img: mock09,
    link: 'https://github.com/ZadeAbhishek/Infiboard',
  },
  {
    title: 'MQTT‑IoT App (Flutter + Mosquitto)',
    description:
      'Cross‑platform dashboard to monitor & control household sensors via secure MQTT.',
    img: mock10,
    link: 'https://github.com/ZadeAbhishek/mqqt',
  },
  {
    title: 'DSA‑DEV — Personal DSA Code Vault',
    description:
      'Lightweight repository where I store and benchmark my data‑structure & algorithm prep code.',
    img: mock11,
    link: 'https://github.com/ZadeAbhishek/DSA-Dev',
  },
];

const Project: React.FC = () => (
  <div className="projects-container" id="projects">
    <h1>Personal Projects</h1>
    <div className="projects-grid">
      {projects.map(({ title, description, img, link }) => (
        <div className="project" key={title}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <h2>{title}</h2>
          </a>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
