import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const EducationTimeline: React.FC = () => (
  <div id="education">
    <div className="items-container">
      <h1>Education</h1>
      <VerticalTimeline>
        {/* MSc — Trinity College Dublin */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fff', color: 'rgb(39,40,34)' }}
          contentArrowStyle={{ borderRight: '7px solid #fff' }}
          date="Sep 2024 – Aug 2025 (expected)"
          iconStyle={{ background: '#0d6efd', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">MSc Computer Science (Intelligent Systems)</h3>
          <h4 className="vertical-timeline-element-subtitle">Trinity College Dublin · Dublin, Ireland</h4>
          <p>
            Coursework in AI, Distributed Systems, Optimisation, and Advanced Machine Learning; dissertation on recurrent YOLOv8 for event‑based object detection.
          </p>
        </VerticalTimelineElement>

        {/* BE — AISSMS Institute of Information Technology / SPPU */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2018 – May 2022"
          iconStyle={{ background: '#0d6efd', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">BE Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">AISSMS Institute of Information Technology · Pune, India</h4>
          <p>
            GPA 8.76/10 · Honors in Data Science · Final‑year project published in IJTEAMS (Voice‑based Answer Evaluation using NLP & ML).
          </p>
        </VerticalTimelineElement>

        {/* HSCE — Janata Mahavidyalaya Chandrapur */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Apr 2016 – Feb 2018"
          iconStyle={{ background: '#0d6efd', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary Certificate (Science)</h3>
          <h4 className="vertical-timeline-element-subtitle">Janata Mahavidyalaya · Chandrapur, India</h4>
          <p>Physics, Chemistry, Mathematics, and Computer Science track.</p>
        </VerticalTimelineElement>

        {/* CBSE — Mount Carmel Convent High School */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Mar 2004 – Mar 2016"
          iconStyle={{ background: '#0d6efd', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Central Board of Secondary Education</h3>
          <h4 className="vertical-timeline-element-subtitle">Mount Carmel Convent High School · Chandrapur, India</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </div>
);

export default EducationTimeline;
