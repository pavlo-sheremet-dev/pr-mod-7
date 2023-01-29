import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Comments, Hero, Loader, Section } from "../components";
import { useComments } from "../hooks/useComments";
import { fetchComments } from "../redux/comments/operations";

export const Home = () => {
  const { error, isLoading } = useComments();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  useEffect(() => {
    if (!error) return;

    toast.error(error);
  }, [error]);

  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        {isLoading ? <Loader /> : <Comments />}
      </Section>
    </>
  );
};
