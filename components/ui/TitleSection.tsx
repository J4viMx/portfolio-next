const TitleSection = ({ text }: { text: string }) => {
  return (
    <div className="font-lato mx-auto flex max-w-full  items-center px-5 py-20 pb-0 md:px-0">
      <h2 className="mb-4 max-w-4xl text-lg  text-white md:text-4xl">{text}</h2>
      <div className="ml-4 grow border-t border-gray-500"></div>
    </div>
  );
};
export default TitleSection;
