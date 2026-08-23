import { formatDistanceToNow } from "date-fns";
import { BiLike, BiDislike } from "react-icons/bi";
import ConfirmModal from "../ui/ConfirmModal.jsx";


import { useState } from "react";
import { useUpdateComment } from "../../hooks/useUpdateComment.js";
import { useDeleteComment } from "../../hooks/useDeleteComment.js";
import { useCurrentUser } from "../../hooks/useCurrentUser.js";
// function CommentItem({ comment }) {
//   return (
//     <div className="flex gap-4">

//       {/* Avatar */}
//       <img
//         src={comment.owner.avatar}
//         alt={comment.owner.username}
//         className="
//           h-10
//           w-10
//           rounded-full
//           object-cover
//           flex-shrink-0
//         "
//       />

//       {/* Content */}
//       <div className="flex-1">

//         {/* Header */}
//         <div className="flex items-center gap-2">

//           <h4
//             className="
//               font-medium
//               text-white
//             "
//           >
//             @{comment.owner.username}
//           </h4>

//           <span
//             className="
//               text-sm
//               text-zinc-500
//             "
//           >
//             {formatDistanceToNow(new Date(comment.createdAt), {
//               addSuffix: true,
//             })}
//           </span>

//         </div>

//         {/* Comment Text */}
//         <p
//           className="
//             mt-1
//             whitespace-pre-wrap
//             text-zinc-200
//           "
//         >
//           {comment.text}
//         </p>

//         {/* Actions */}
//         <div
//           className="
//             mt-3
//             flex
//             items-center
//             gap-5
//             text-zinc-400
//           "
//         >

//           <button
//             className="
//               flex
//               items-center
//               gap-1
//               transition-colors
//               hover:text-white
//             "
//           >
//             <BiLike size={18} />
//             <span>{comment.likes}</span>
//           </button>

//           <button
//             className="
//               flex
//               items-center
//               gap-1
//               transition-colors
//               hover:text-white
//             "
//           >
//             <BiDislike size={18} />
//             <span>{comment.dislikes}</span>
//           </button>

//           <button
//             className="
//               text-sm
//               font-medium
//               transition-colors
//               hover:text-white
//             "
//           >
//             Reply
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

function CommentItem({ comment, videoId }) {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { data: currentUser } = useCurrentUser();

const isOwner =
  currentUser?._id === comment.owner._id;
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(comment.text);

    const { mutate: updateComment, isPending: isUpdating } =
        useUpdateComment();

    const { mutate: deleteComment, isPending: isDeleting } =
        useDeleteComment();

    const handleUpdate = () => {
        if (!text.trim()) return;

        updateComment({
            commentId: comment._id,
            text,
            videoId,
        });

        setIsEditing(false);
    };

    const handleDelete = () => {
  deleteComment(
    {
      commentId: comment._id,
      videoId,
    },
    {
      onSuccess: () => {
        setShowDeleteModal(false);
      },
    }
  );
};

    return (
        <div className="flex gap-4">

            <img
                src={comment.owner.avatar}
                alt={comment.owner.username}
                className="h-10 w-10 rounded-full object-cover"
            />

            <div className="flex-1">

                <div className="flex items-center gap-2">
                    <h4 className="font-medium text-white">
                        @{comment.owner.username}
                    </h4>

                    <span className="text-sm text-zinc-500">
                        {formatDistanceToNow(
                            new Date(comment.createdAt),
                            { addSuffix: true }
                        )}
                    </span>
                </div>

                {isEditing ? (
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={3}
                        className="
                            mt-2
                            w-full
                            rounded-lg
                            border
                            border-zinc-700
                            bg-zinc-900
                            p-3
                            text-white
                            outline-none
                            focus:border-blue-500
                        "
                    />
                ) : (
                    <p className="mt-1 whitespace-pre-wrap text-zinc-200">
                        {comment.text}
                    </p>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-5 text-zinc-400">

                    <button className="flex items-center gap-1 hover:text-white">
                        <BiLike />
                        <span>{comment.likes}</span>
                    </button>

                    <button className="flex items-center gap-1 hover:text-white">
                        <BiDislike />
                        <span>{comment.dislikes}</span>
                    </button>

                    <button className="hover:text-white">
                        Reply
                    </button>

               {isOwner && (
    !isEditing ? (
        <>
            <button
                onClick={() => setIsEditing(true)}
                className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:text-blue-400
                "
            >
                Edit
            </button>

            <button
                disabled={isDeleting}
                onClick={() => setShowDeleteModal(true)}
                className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:text-red-400
                "
            >
                Delete
            </button>
        </>
    ) : (
        <>
            <button
                disabled={isUpdating}
                onClick={handleUpdate}
                className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:text-green-400
                "
            >
                Save
            </button>

            <button
                onClick={() => {
                    setText(comment.text);
                    setIsEditing(false);
                }}
                className="
                    text-sm
                    font-medium
                    transition-colors
                    hover:text-zinc-200
                "
            >
                Cancel
            </button>
        </>
    )
)}

                </div>

            </div>

<ConfirmModal
  isOpen={showDeleteModal}
  title="Delete Comment"
  description="Are you sure you want to delete this comment? This action cannot be undone."
  confirmText="Delete"
  cancelText="Cancel"
  onConfirm={handleDelete}
  onClose={() => setShowDeleteModal(false)}
  isLoading={isDeleting}
/>
        </div>
        
    );
}

export default CommentItem;