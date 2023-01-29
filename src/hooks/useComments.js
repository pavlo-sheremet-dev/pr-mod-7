import { useSelector } from "react-redux";
import {
  selectComments,
  selectError,
  selectIsLoading,
} from "../redux/selectors";

export const useComments = function () {
  const comments = useSelector(selectComments);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return { comments, isLoading, error };
};
