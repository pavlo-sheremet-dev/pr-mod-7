import { useState } from "react";
import { Comments, Hero, Loader, Section } from "../components";
import { useGetCommentsQuery } from "../redux/commentApi";

export const Home = () => {
  const [isTrue, setIsTrue] = useState(false);
  const { data: comments, isFetching } = useGetCommentsQuery();

  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        <button
          type="button"
          onClick={() => {
            setIsTrue((p) => !p);
          }}
        >
          {" "}
          Button
        </button>
        <p>{String(isTrue)}</p>
        {comments?.length > 0 && <Comments comments={comments} />}
      </Section>
      {/* {isFetching && <Loader />} */}
    </>
  );
};
