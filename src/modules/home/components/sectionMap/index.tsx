import { Element } from 'react-scroll';

const SectionMap = () => {
  return (
    <Element className="relative max-w-screen-xl mx-auto" name="sectionMap">
      <div className="absolute top-0 left-0 w-full h-16 bg-gray-50" />
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=11ZsH5yq1CFqG5rjZag8f8-WRmvrlFdU&ehbc=2E312F"
        width="100%"
        height="480"
        title="teste"
      ></iframe>
    </Element>
  );
};
export default SectionMap;
