import ComContainer from "@/components/common/Container";

const TestPage = () => {
  return (
    <ComContainer
      className="test-page"
      type="page"
      css={{
        position: "relative",
      }}
    >
      This is box
      <input style={{ position: "absolute", bottom: 100 }} />
    </ComContainer>
  );
};

export default TestPage;
