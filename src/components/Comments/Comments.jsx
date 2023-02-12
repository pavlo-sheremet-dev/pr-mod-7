import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";

export const Comments = ({ comments }) => {
  const filter = useSelector(selectFilter);

  const getFilterComments = useCallback(() => {
    console.log("first");
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filter.toLowerCase())
    );
  }, [comments, filter]);

  const filteredComments = useMemo(
    () => getFilterComments(comments, filter),
    [comments, filter]
  );

  // const filteredComments = getFilterComments(comments, filter);

  return (
    <Grid>
      {filteredComments &&
        filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
