import CommentItem from "./CommentItem.jsx";

function CommentsList({ comments, videoId }) {
  if (!comments.length) {
    return (
      <p className="text-zinc-400">
        No comments yet. Be the first one!
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {comments.map((comment) => (
        <CommentItem
          key={comment._id}
          comment={comment}
          videoId={videoId}
        />
      ))}

    </div>
  );
}

export default CommentsList;