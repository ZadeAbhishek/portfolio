import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// -----------------------------
// Label Arrays (typed as const)
// -----------------------------
export const labelsFirst = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SASS',
  'Flask',
  'Django',
  'Python',
  'SQL',
  'PostgreSQL',
  'Node.js',
  'Postman',
  'C++',
  'C#',
  'Go',
  'Gin (Go)',
  'Lucene',
  'Kafka',
  'MongoDB',
] as const;

export const labelsSecond = [
  'Git',
  'GitHub Actions',
  'Docker',
  'Docker Compose',
  'Kubernetes',
  'Kind',
  'AWS',
  'Azure',
  'GCP',
  'Firebase',
  'Linux',
] as const;

export const labelsThird = [
  'OpenAI',
  'Groq',
  'Hugging Face',
  'Scikit‑Learn',
  'TensorFlow',
  'PyTorch',
  'Keras',
  'NLP',
  'Computer Vision',
  'Big Data',
  'Deep Learning',
  'Reinforcement Learning',
] as const;

// Utility type for label arrays
type Label = (typeof labelsFirst | typeof labelsSecond | typeof labelsThird)[number];

//---------------------------------
// Expertise Component (TSX, typed)
//---------------------------------
const Expertise: React.FC = () => {
  const renderChips = (labels: readonly Label[]) =>
    labels.map((label) => <Chip key={label} className="chip" label={label} />);

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* ---------- Full‑Stack Web ---------- */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full‑Stack Web Development</h3>
            <p>
              I design and ship end‑to‑end applications—including <em>Infinite Board</em> (a real‑time
              collaborative canvas), a cloud‑connected <em>Automated Ukulele</em> controller, a
              disaster‑management web app, <em>Coeus</em> (a Lucene‑based search engine), an adaptive
              gym‑workout recommendation platform, and a distributed multiplayer <em>Pac‑Man</em>
              game—using modern stacks such as React, NestJS/Node, Go‑Gin, Flask/Django, and
              PostgreSQL/MongoDB. My background spans user‑centric design (15 % boost in
              satisfaction at Zenture IT) and microservice architectures that cut data‑sync
              latency by 30 % at Jio Platforms.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {renderChips(labelsFirst)}
            </div>
          </div>

          {/* ---------- DevOps & Cloud ---------- */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps, Cloud &amp; Automation</h3>
            <p>
              I streamline delivery pipelines with GitHub Actions, Docker, Kubernetes, and Kind. In
              my Pac‑Man project I containerised Go‑Gin and React services, orchestrated them on
              Kubernetes, and leveraged Kafka for event streaming and auto‑scaling—achieving
              zero‑downtime deploys on GCP. Earlier at Jio, my automated loyalty reporting reduced
              manual effort by 40 % and boosted service reliability by 25 %.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {renderChips(labelsSecond)}
            </div>
          </div>

          {/* ---------- Machine Learning & AI ---------- */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Machine Learning &amp; AI</h3>
            <p>
              My MSc research focuses on a recurrent YOLOv8 framework for event‑based object
              detection, comparing ConvLSTM vs. ConvGRU for temporal feature extraction. Beyond
              vision, I have built NLP‑driven answer‑evaluation (IJTEAMS publication) and work with
              LLM pipelines (OpenAI, Hugging Face, Groq). I am comfortable with Scikit‑Learn,
              PyTorch, TensorFlow/Keras, and reinforcement‑learning libraries to prototype and
              productionise data‑driven solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {renderChips(labelsThird)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
