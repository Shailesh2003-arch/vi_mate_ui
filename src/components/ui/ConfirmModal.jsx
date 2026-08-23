// function ConfirmModal({
//   isOpen,
//   title,
//   description,
//   confirmText = "Confirm",
//   cancelText = "Cancel",
//   onConfirm,
//   onClose,
//   isLoading = false,
// }) {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="
//         fixed
//         inset-0
//         z-50
//         flex
//         items-center
//         justify-center
//         bg-black/70
//         backdrop-blur-sm
//       "
//     >
//       <div
//         className="
//           w-full
//           max-w-md
//           rounded-2xl
//           border
//           border-zinc-800
//           bg-zinc-900
//           p-6
//           shadow-2xl
//         "
//       >
//         <h2 className="text-xl font-semibold text-white">
//           {title}
//         </h2>

//         <p className="mt-3 text-zinc-400">
//           {description}
//         </p>

//         <div className="mt-8 flex justify-end gap-3">

//           <button
//             onClick={onClose}
//             disabled={isLoading}
//             className="
//               rounded-lg
//               bg-zinc-800
//               px-4
//               py-2
//               transition-colors
//               hover:bg-zinc-700
//               disabled:opacity-50
//             "
//           >
//             {cancelText}
//           </button>

//           <button
//             onClick={onConfirm}
//             disabled={isLoading}
//             className="
//               rounded-lg
//               bg-red-600
//               px-4
//               py-2
//               font-medium
//               transition-colors
//               hover:bg-red-500
//               disabled:opacity-50
//             "
//           >
//             {isLoading ? "Deleting..." : confirmText}
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }


import { useEffect } from "react";

function ConfirmModal({
  isOpen,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onClose,
  isLoading = false,
}) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !isLoading) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isLoading, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => {
        if (!isLoading) onClose();
      }}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        animate-in
        fade-in
        duration-200
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          p-6
          shadow-2xl
          animate-in
          zoom-in-95
          duration-200
        "
      >
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <p className="mt-3 leading-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            disabled={isLoading}
            className="
              rounded-lg
              bg-zinc-800
              px-5
              py-2
              transition-all
              hover:bg-zinc-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="
              rounded-lg
              bg-red-600
              px-5
              py-2
              font-medium
              transition-all
              hover:bg-red-500
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {isLoading ? "Deleting..." : confirmText}
          </button>

        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
