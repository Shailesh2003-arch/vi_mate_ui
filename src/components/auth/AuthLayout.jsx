function AuthLayout({ title, children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950">
            <div className="w-full max-w-md bg-zinc-900 rounded-2xl p-8 shadow-xl border border-zinc-800">

                <h1 className="text-3xl font-bold text-center text-white mb-8">
                    {title}
                </h1>

                {children}

            </div>
        </div>
    );
}

export default AuthLayout;