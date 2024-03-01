const Index = async ({ params }: any) => {
  const { handle, language } = params;

  return (
    <>
      <div>
        <h1>Dynamic Travel Wiki Page</h1>
        <p>Language: {language}</p>
        <p>Handle: {handle}</p>
      </div>
    </>
  );
};

export default Index;
