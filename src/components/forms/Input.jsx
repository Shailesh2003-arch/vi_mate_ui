function Input(props) {
    return (
        <input
            {...props}
            className="
                w-full
                px-4
                py-3
                rounded-lg
                bg-zinc-800
                text-white
                border
                border-zinc-700
                outline-none
                focus:border-red-500
            "
        />
    );
}

export default Input;