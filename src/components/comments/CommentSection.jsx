import { useComments } from "../../hooks/useComment.js";
import { useAddComment } from "../../hooks/useAddComment.js";
import CommentsList from "./CommentList.jsx";

import CommentInput from "./CommentInput.jsx";


function CommentSection({ videoId }) {
  const {
    data: commentsData,
    isLoading,
    isError,
    error,
  } = useComments(videoId);

  const {
    mutate: addComment,
    isPending,
  } = useAddComment();

  const handleAddComment = (text) => {
    addComment({
      videoId,
      text,
    });
  };

  if (isLoading) {
    return (
      <div className="mt-8 text-zinc-400">
        Loading comments...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-8 text-red-500">
        {error?.message || "Failed to load comments."}
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">

      <h2 className="text-xl font-semibold text-white">
        {commentsData?.totalDocs || 0} Comments
      </h2>

      <CommentInput
        onSubmit={handleAddComment}
        isPending={isPending}
      />

      <CommentsList
        comments={commentsData?.docs || []}
      />

    </div>
  );
}

export default CommentSection;