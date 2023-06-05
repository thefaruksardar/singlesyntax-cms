import Homepage from "../components/site/homepage";

const Page = ({ searchParams: { p } }) => {
  return (
    <div>
      <Homepage page={p} />
    </div>
  );
};
export default Page;
