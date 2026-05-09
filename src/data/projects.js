import alanTuring from '../assets/projects/covers/alan_turing.jpg';
import bedGroup from '../assets/projects/covers/bedgroupphoto.jpeg';
import eagleScout from '../assets/projects/covers/eaglescout.jpeg';
import sarcoGroup from '../assets/projects/covers/sarcogroupphoto.png';
import thermonator from '../assets/projects/covers/thermonatorbackpack.jpg';
import websocket from '../assets/projects/covers/websocketpresent.png';

export const projectsData = [
  {
    id: "mod-turing-test",
    title: "Modified \"Turing Test\" with an English Focus",
    date: "May 2025",
    category: "Generative AI",
    summary: "Recent improvements in Gen. AI writing has added interest to the question of: \"Can Gen. AI write as well as a human?\" This project was submitted as my final project for the class ENG316S.",
    role: "Project Lead, Test Creator",
    technologies: ["GPT-4o", "Google Forms", "Google Sheets"],
    outcome: "Test takers were not often able to differentiate between human and AI writing.",
    image: alanTuring,
    content: `# Modified "Turing Test" with an English Focus

**Status:** Completed  
**Last updated:** June 24, 2025

## Description

The goal of this project was to assess Generative AI's proficiency in creative writing compared to human output. The evaluation was conducted through a modified **"Turing Test"** designed to determine if readers can accurately differentiate between human and AI writers.

The study aimed to address two primary research questions:
1.  **"Can Gen. AI write as well as a human?"**
2.  **"Is the Turing Test still a relevant benchmark for measuring AI intelligence?"**

The test was distributed via a digital form, where participants read various creative pieces and attempted to identify the source. The project findings were compiled and presented as part of an **ENG316S** final project, featuring data visualizations on point distribution and participant familiarity with AI technologies.

> **Key Technologies:** GPT-4o, Google Forms, Google Sheets, Structured Content Management

### Contributors (Writers)
Grace Wu, Amir Easton, Neale Warren, Davy Lively, Patrick Hirsch, Toby Carter, Katie Tillman, Alex Kelley, Izaac Gomez, Eurydice Lunnemann, Aaron Milner, Tyler Kobida.

---

## Major Updates

*   **Collecting Content Writers** (April 20, 2025)  
    Recruited a diverse group of human volunteers to provide original short stories and creative prose for the control group of the test.

*   **Test Assembly** (April 27, 2025)  
    Curated the final selection of human and AI-generated media. Integrated the content into a structured assessment format to ensure a blind testing environment.

*   **Project Submission** (May 06, 2025)  
    Finalized data analysis and submitted the complete study for the ENG316S final requirement.`
  },
  {
    id: "chemical-sniffer",
    title: "Chemical \"Sniffing\" Robot Dog Attachment",
    date: "April 2025",
    category: "Robotics & IoT",
    summary: "Attachment containing a large array of sensors used to transmit critical readings via MQTT to provide live, accurate data of chemical leaks or chemical readings in contained spaces.",
    role: "Project Lead",
    technologies: ["CAD", "C++", "Various Hardware", "ESP-32", "MQTT"],
    outcome: "Project is still in development.",
    image: thermonator,
    content: `# Chemical "Sniffing" Robot Dog Attachment

**Status:** In-Progress  
**Last updated:** June 16, 2025

## Description

Developed in partnership with **Duke Energy**, this project involves the creation of an advanced air quality monitoring payload designed for quadruped robotic platforms (robot dogs). The device functions as a mobile sensor array, capable of "sniffing" out airborne chemicals in environments that may be hazardous or difficult for humans to access.

The primary objective is the detection and measurement of **hydrogen levels** to identify potential leaks within large-scale battery storage systems and industrial facilities. By mounting this IoT-enabled device on a mobile robot, facilities can automate safety inspections and achieve high-granularity environmental data.

### Key Impact:
*   **Operational Safety:** Enables leak detection in high-voltage or hazardous areas without human exposure.
*   **Real-Time Monitoring:** Utilizes the **MQTT** protocol for low-latency data transmission to centralized monitoring dashboards.
*   **Platform Agnostic:** Features a custom 3D-printed chassis designed to interface with various robotic "backpack" mounting systems.

> **Key Technologies:** ESP-32, MQTT, MQ-8 Hydrogen Sensors, 3D Printing, IoT, Robotics

## Major Updates

*   **Initial Design Period** (March 30, 2025)  
    Conceptualized the integration of gas sensor arrays with robotic power systems. Developed the first mock-ups for form-factor testing and center-of-gravity fittings.

*   **Prototype 1** (April 01, 2025)  
    Successful completion of the first functional 3D-printed attachment. This version established the mechanical interface for standard robotic mounting rails.

*   **Duke Energy Showcase** (May 08, 2025)  
    Presented the functional prototype at the grand opening of the Duke Energy Innovation Lab. Demonstrated the device's ability to transmit sensor data wirelessly during robotic movement.`
  },
  {
    id: "websocket-workshop",
    title: "WebSocket Workshop",
    date: "June 2025",
    category: "Education & IoT",
    summary: "An interactive, hands-on activity to teach participants about WebSocket technology and wiring simple circuits.",
    role: "Presenter",
    technologies: ["WebSocket", "PowerPoint", "Various Hardware"],
    outcome: "The Workshop was presented at Tech Olympics 2025, TSA, and STLP, receiving positive feedback at each event.",
    image: websocket,
    content: `# WebSocket Workshop

**Status:** Completed  
**Last updated:** June 16, 2025

## Description

The **WebSocket Workshop** is an interactive, hands-on educational experience designed to demystify real-time communication and IoT integration. This project bridges the gap between software and hardware by teaching participants how to build responsive systems using **WebSocket** technology and **ESP-32** microcontrollers.

Participants explore the fundamentals of wiring circuits and programming hardware to respond to instant data triggers. The curriculum is tailored for a diverse audience, providing students of all ages with a tangible entry point into modern engineering and IoT development.

### Key Impact:
*   **Accessibility:** Simplifies complex networking concepts for K-12 and high school students.
*   **Real-Time Interaction:** Demonstrates low-latency hardware control through a live workshop environment.
*   **Engagement:** Combines public speaking with technical mentorship to inspire the next generation of makers.

> **Key Technologies:** WebSocket, ESP-32, IoT, Circuit Design, Public Speaking

## Major Updates

*   **TSA Presentation** (January 31, 2025)  
    Successfully debuted the workshop for a high school audience, focusing on the foundational principles of real-time web protocols and basic electronics.

*   **Tech Olympics 2025** (February 15, 2025)  
    Facilitated the workshop at Tech Olympics 2025. Received high engagement and positive feedback for the "vibe-centric" approach to learning complex hardware-software stacks.

*   **STLP State Championship** (April 23, 2025)  
    Scaled the workshop to accommodate a broad K-12 demographic during the state championship event in Lexington, emphasizing modular learning and interactive hardware demos.`
  },
  {
    id: "sarco",
    title: "Search and Rescue Coordinator (SARCO)",
    date: "February 2024",
    category: "Embedded Systems",
    summary: "An attachment to standard hiking sticks allowing for precise, accurate GPS pins of clues found in Search and Rescue (SAR) operations. All pins are displayed on a self-updating website using the Google Maps API.",
    role: "Project Lead, Product Designer",
    technologies: ["3D Printing", "CAD", "Google Sites", "Google Sheets", "Python", "MicroPython", "Raspberry Pi", "GPS Module"],
    outcome: "A working prototype was submitted and placed 1st at Tech Olympics 2024 and the UC IT Expo 2024.",
    image: sarcoGroup,
    content: `# Search and Rescue Coordinator (SARCO)

**Status:** Completed  
**Last updated:** June 16, 2025

## Description

**SARCO** (Search and Rescue Coordinator) is a prototype device engineered to bridge the communication gap between field teams and mission control during urban search and rescue (SAR) operations. The system integrates a GPS module with a Raspberry Pi, housed in a custom 3D-printed enclosure that attaches to a standard hiking stick.

The device captures high-precision GPS coordinates and transmits them to a centralized database. This data is then visualized in real-time using the **Google Maps API**, enabling mission control to track multiple field teams on a single unified interface. 

### Key Impact:
*   **Precision:** Provides up to **30 feet greater accuracy** than standard modern smartphones.
*   **Efficiency:** Streamlines situational awareness by automating location reporting.
*   **Recognition:** Awarded **1st place** at both INTERalliance's 2024 Tech Olympics and the 2024 UC IT Expo.

> **Key Technologies:** SAR, 3D Printing, Microcontrollers, GPS, Google Maps API

## Major Updates

*   **Initial Design Period** (January 05, 2024)  
    Established core prototype objectives and technical requirements. Outlined a development timeline to align with spring technical competitions.

*   **Prototyping and Development** (January 29, 2024)  
    Finalized the mechanical hiking stick attachment and developed the front-end dashboard for map visualization.

*   **Tech Olympics 2024** (February 18, 2024)  
    Live demonstration of the SARCO prototype. Secured **1st place** in the technical competition.

*   **2024 UC IT Expo** (April 10, 2024)  
    Presented the refined system to university faculty and industry professionals, earning **1st place** honors.`
  },
  {
    id: "eagle-scout-project",
    title: "Eagle Scout Project",
    date: "October 2023",
    category: "Leadership & Community",
    summary: "A trail that contains wooden crosses with ceramic depictions of the Stations of the Cross at a local parish.",
    role: "Project Lead",
    technologies: ["Leadership", "Project Management", "Construction"],
    outcome: "Completed in a timely manner with 112 total man-hours and the cost remaining around $500.",
    image: eagleScout,
    content: `# Eagle Scout Project

**Status:** Completed  
**Last updated:** June 16, 2025

## Description

The core of this project involved the design and construction of a **Stations of the Cross trail** for a local parish. The scope included clearing a new trail, crafting custom wooden display cases for ceramic portrayals, and performing structural installation using cement.

A primary objective was **cost-effective project management**. By being resourceful with tools and donated materials, the total project cost was kept to approximately **$500**, requiring a total of **118 man-hours** to complete from planning to final installation.

> **Key Focus Areas:** Cost Management, Design, Leadership, Oral & Written Communication

## Major Updates

*   **Initial Project Proposal** (January 22, 2023)  
    Drafted a comprehensive project plan including logistical timelines, fundraising strategies, and estimated man-hour requirements for approval.

*   **Coordination of Site and Resource Collection** (July 23, 2023)  
    Executed trail clearing and excavation marking. Simultaneously began the assembly and weatherproofing of the wooden display cases.

*   **Project Completion** (August 2, 2023)  
    Final installation of all stations. Crosses were secured in cement foundations and the ceramic artworks were permanently mounted within the protective wooden cases.`
  },
  {
    id: "braille-education-device",
    title: "Braille Education Device (B.E.D.)",
    date: "February 2023",
    category: "Assistive Technology",
    summary: "A 3D printed base with servo motors that raise and lower to represent the Braille character.",
    role: "Lead Product Designer",
    technologies: ["3D Printing", "Raspberry Pi Pico", "Servos", "CAD"],
    outcome: "A prototype was submitted and placed 1st at Tech Olympics 2023.",
    image: bedGroup,
    content: `# Braille Education Device (B.E.D.)

**Status:** Completed  
**Last updated:** June 16, 2025

## Description

A prototype educational device for Braille (B.E.D.) that features a 3D-printed casing and servo motors controlled by a Raspberry Pi Pico. The design allows the servos to rise and fall, forming the corresponding Braille characters. 

The primary goal was to create a cost-effective and easy-to-implement solution for Braille education. The project was submitted and placed **1st place** at the 2023 [Tech Olympics](https://techolympics.org/). Local news outlet [Local 12 covered the event](https://local12.com/amp/news/local/high-school-tech-olympics-held-at-great-american-ballpark-high-school-technology-robotics-interalliance-greater-cincinnati-coding-school-braille-st-saint-henry-high-school-cincinnati-ohio) and the impact of the device.

> **Key Technologies:** Prototyping, 3D Printing, Microcontrollers, Braille Education

## Major Updates

*   **Initial Design Period** (January 12, 2023)  
    Began the initial prototype design and outlining objectives. A set timeline was outlined in accordance with the upcoming competition at Tech Olympics 2023.

*   **Prototyping and Development** (February 01, 2023)  
    Developed the hardware container and began work on the microcontroller integration and servo calibration.

*   **Tech Olympics 2023** (February 19, 2023)  
    Presented the prototype at Tech Olympics 2023 where it successfully demonstrated real-time Braille character generation and secured 1st place.`
  }
];