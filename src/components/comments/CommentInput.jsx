import { useState } from "react";

function CommentInput({ onSubmit, isPending }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSubmit(text.trim());

    setText("");
  };

  return (
    <div className="space-y-3">

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        rows={3}
        className="
          w-full
          rounded-lg
          bg-zinc-900
          border
          border-zinc-700
          p-3
          text-white
          resize-none
          outline-none
          focus:border-blue-500
        "
      />

      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={() => setText("")}
          className="
            rounded-full
            px-4
            py-2
            text-zinc-300
            hover:bg-zinc-800
          "
        >
          Cancel
        </button>

        <button
          disabled={isPending || !text.trim()}
          onClick={handleSubmit}
          className="
            rounded-full
            bg-blue-600
            px-5
            py-2
            font-medium
            text-white
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isPending ? "Posting..." : "Comment"}
        </button>

      </div>

    </div>
  );
}

export default CommentInput;