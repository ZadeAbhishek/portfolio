import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const Timeline: React.FC = () => (
  <div id="history">
    <div className="items-container">
      <h1>Career History</h1>
      <VerticalTimeline>
        {/* Open‑Source Developer — CircuitVerse */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: 'rgb(39,40,34)' }}
          contentArrowStyle={{ borderRight: '7px solid #fff' }}
          date="Feb 2021 – Present"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Core Team Member (GSoC Mentor)</h3>
          <h4 className="vertical-timeline-element-subtitle">CircuitVerse · Remote</h4>
          <p>
            Led front‑end enhancements, introduced GIF/video recording, and resolved critical
            usability bugs elevating engagement across a 20k user community.
          </p>
        </VerticalTimelineElement>

        {/* Graduate Engineer Trainee — Jio Platforms */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2023 – Aug 2024"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Graduate Engineer Trainee</h3>
          <h4 className="vertical-timeline-element-subtitle">Jio Platforms · Hyderabad, India</h4>
          <p>
            Built NestJS microservices (+25 % reliability), automated loyalty reporting (−40 % manual effort), and cut data‑sync latency by 30 % with a custom Node.js extension.
          </p>
        </VerticalTimelineElement>

        {/* GSoC Mentor — CircuitVerse */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 – Sep 2023"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Google Summer of Code Mentor</h3>
          <h4 className="vertical-timeline-element-subtitle">CircuitVerse · Remote</h4>
          <p>
            Guided students on the “Vue JS Simulator” track code reviews, architecture, and CI ensuring deliverables met open‑source quality standards.
          </p>
        </VerticalTimelineElement>

        {/* Frontend Developer Intern — Zenture IT Solutions */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2021 – Jan 2022"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Frontend Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Zenture IT Solutions · Pune, India</h4>
          <p>
            Delivered user centric React features and responsive UI, raising satisfaction scores by 15 % and standardising cross device layouts.
          </p>
        </VerticalTimelineElement>

        {/* GSoC Frontend Developer — CircuitVerse */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 – Aug 2021"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Google Summer of Code Frontend Dev</h3>
          <h4 className="vertical-timeline-element-subtitle">CircuitVerse · Remote</h4>
          <p>
            Enabled touch‑compatibility and responsive layouts for the simulator, improving mobile usability for 5 k+ active users.
          </p>
        </VerticalTimelineElement>

        {/* Motion Graphic Designer — Frozen Creation */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 – Aug 2021"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Motion Graphics Designer & Editor</h3>
          <h4 className="vertical-timeline-element-subtitle">Frozen Creation · Pune, India</h4>
          <p>
            Produced and edited promotional videos for local clients, honing visual storytelling and cross functional collaboration skills.
          </p>
        </VerticalTimelineElement>

        {/* Head of Media — IEEE AISSMS IOIT SB */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2021 – Mar 2022"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Head of Media</h3>
          <h4 className="vertical-timeline-element-subtitle">IEEE AISSMS IOIT SB · Pune, India</h4>
          <p>
            Boosted social media reach by crafting data driven content strategies, managing a 10k member community, and coordinating a five person creative squad.
          </p>
        </VerticalTimelineElement>

        {/* Head of Media — ITSA */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2020 – Aug 2022"
          iconStyle={{ background: '#5000ca', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">Head of Media</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Information Technology Student Association<br />
            Pune, India
          </h4>
          <p>
            Led a 40 member media team, orchestrated branding campaigns, and increased event engagement by 30 % through multimedia storytelling.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </div>
);

export default Timeline;
