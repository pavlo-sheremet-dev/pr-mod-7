import { Comments, Hero, Loader, Section } from "../components";
import { useGetCommentsQuery } from "../redux/commentApi";

export const Home = () => {
  const { data: comments, isFetching } = useGetCommentsQuery();

  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        {comments?.length > 0 && <Comments comments={comments} />}
      </Section>
      {/* {isFetching && <Loader />} */}
    </>
  );
};
