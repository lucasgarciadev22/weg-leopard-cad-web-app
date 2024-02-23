import React from "react";
import ReactMarkdown from "react-markdown";

const About: React.FC = () => {
  const markdownContent = `
## About

**WEG Leopard CAD** is a *Computer-Aided Design (CAD)* application designed for electrical projects, particularly focusing on **planar 2D documents**. It utilizes a *SWIG (Simplified Wrapper and Interface Generator)* bridge to interact with its underlying open-source library, which is primarily written in \`C++\`.

At its core, WEG Leopard CAD provides a user-friendly interface for creating and editing electrical schematics and diagrams in a \`2D\` space. It offers a range of tools and features tailored to the needs of electrical engineers and designers, facilitating the creation of detailed and accurate project documentation.

With its emphasis on planar designs and electrical projects, WEG Leopard CAD streamlines the process of **designing circuits, wiring diagrams, and other electrical components**. Its integration with the SWIG bridge allows for seamless communication between the application and the underlying library, ensuring efficient and reliable performance.

### Development Phase

WEG Leopard CAD is currently in the alpha development phase, indicating that it is still undergoing active development and refinement. While its current focus is on planar 2D documents for electrical projects, there are plans to expand its features and capabilities in the future.

### Future Directions

One potential direction for expansion is to include support for **mechanical drawing functionality**. This would involve incorporating tools and features specifically tailored to mechanical engineering tasks, such as designing parts, assemblies, and mechanical systems. By broadening its scope to encompass mechanical drawing, WEG Leopard CAD could become a more versatile and comprehensive CAD solution, catering to a wider range of engineering disciplines.

Additionally, there may be plans to introduce support for \`3D\` modeling and visualization capabilities. This would enable users to create three-dimensional representations of their designs, allowing for more detailed and immersive visualization of projects. By adding 3D functionality, WEG Leopard CAD could provide users with enhanced tools for conceptualizing, designing, and analyzing complex structures and systems in three-dimensional space.

Overall, as **WEG Leopard CAD continues to evolve and mature**, it has the potential to expand its features beyond its current focus on electrical projects. By incorporating mechanical drawing functionality and possibly venturing into 3D modeling, the application aims to become a more comprehensive and versatile CAD solution for engineers and designers across various disciplines.
`;

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default About;
