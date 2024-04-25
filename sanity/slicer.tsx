// import React, { ComponentClass, FunctionComponent } from 'react'

// export default function Slicer({
//   sections,
//   components,
//   locale,
// }: {
//   sections?: ({ _type: string; _key: string } & { [x in string]: any })[]
//   components: { [name in string]: FunctionComponent<any> | ComponentClass<any, any> }
//   locale: string
//  }) {

//   return (
//     <>
//       {sections?.map((section) => (
//         <React.Fragment key={section._key}>
//           {components[section._type] &&
//             React.createElement(components[section?._type], {
//               data: section,
//               locale,
//               key: section._key,
//             })}
//         </React.Fragment>
//       ))}
//     </>
//   )
// }

// import React, { useState, useEffect } from 'react';

// interface Section {
//   _type: string;
//   _key: string;
//   [x: string]: any;
// }

// interface Props {
//   sections: Section[];
//   components: { [name: string]: React.ComponentType<any> };
//   locale: string;
// }

// const Slicer: React.FC<Props> = ({ sections, components, locale }) => {
//   const [visibleSections, setVisibleSections] = useState(3);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.scrollY;
//       if (currentPosition > scrollPosition) {
//         setVisibleSections(sections.length);
//       }
//       setScrollPosition(currentPosition);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [sections, scrollPosition]);

//   return (
//     <>
//       {sections.slice(0, visibleSections).map((section) => (
//         <React.Fragment key={section._key}>
//           {components[section._type] &&
//             React.createElement(components[section._type], {
//               data: section,
//               locale,
//               key: section._key,
//             })}
//         </React.Fragment>
//       ))}
//     </>
//   );
// };

// export default Slicer;
import React, { ComponentClass, FunctionComponent, useState, useEffect } from 'react';

interface Section {
  _type: string;
  _key: string;
  [x: string]: any;
}

interface ComponentMap {
  [name: string]: FunctionComponent<any> | ComponentClass<any, any>;
}

interface Props {
  sections?: Section[];
  components: ComponentMap;
  locale: string;
}

const Slicer: React.FC<Props> = ({ sections = [], components, locale }) => {
  const [visibleSections, setVisibleSections] = useState<Section[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      // Initially load the first three sections
      setVisibleSections(sections.slice(0, 3));
      setLoaded(true);
    }
  }, [sections, loaded]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      if (bottom && visibleSections.length < sections.length) {
        // Load additional sections when user scrolls to bottom
        const nextSections = sections.slice(visibleSections.length, visibleSections.length + 3);
        setVisibleSections(prevSections => [...prevSections, ...nextSections]);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, visibleSections]);

  return (
    <>
      {visibleSections.map(section => (
        <React.Fragment key={section._key}>
          {components[section._type] &&
            React.createElement(components[section._type], {
              data: section,
              locale,
              key: section._key,
            })}
        </React.Fragment>
      ))}
    </>
  );
};

export default Slicer;
