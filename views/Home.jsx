import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Comments, Hero, Loader, Section } from "../components";
import { useComments } from "../src/hooks/useComments";
import { fetchComments } from "../src/redux/operations/operations";

export const Home = () => {
  const { comments, error, isLoading } = useComments();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        <Comments />
      </Section>
    </>
  );
};
