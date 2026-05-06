import { useState } from "react";

function EyeIcon({ show }) {
  if (show) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2.5 12s3.7-6 9.5-6 9.5 6 9.5 6-3.7 6-9.5 6-9.5-6-9.5-6z" />
        <circle cx="12" cy="12" r="2.3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 12s3.7-6 9.5-6c2.2 0 4.1.8 5.8 1.9M21.5 12s-3.7 6-9.5 6c-2.2 0-4.1-.8-5.8-1.9" />
      <path d="M4 4l16 16" />
    </svg>
  );
}

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF7FF] via-[#F3FAFF] to-[#FFF7EA] px-3 py-4 sm:px-5 sm:py-6">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl sm:h-72 sm:w-72"></div>
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-orange/25 blur-3xl sm:h-72 sm:w-72"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-soft sm:rounded-[2rem]">
        <main className="flex w-full items-center px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-[520px]">
            <img
              src="/Logo-image.png"
              alt="Digifunzi logo"
              className="mx-auto mb-6 h-auto w-44 max-w-full object-contain sm:mb-7 sm:w-52 md:w-60"
            />

            <h2 className="text-center text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
              Sign in to your account
            </h2>
            <p className="mt-2.5 text-center text-base text-slate-500 sm:mt-3 sm:text-lg">Welcome back to Digifunzi.</p>

            <form className="mt-6 space-y-4.5 sm:mt-8 sm:space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="email" className="mb-2 block text-base font-bold text-[#11344D] sm:text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[#CEE4F2] bg-[#F9FCFF] px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 sm:rounded-2xl sm:px-5 sm:text-lg"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-base font-bold text-[#11344D] sm:text-lg">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full rounded-xl border border-[#CEE4F2] bg-[#F9FCFF] px-4 py-3 pr-11 text-base outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 sm:rounded-2xl sm:px-5 sm:pr-12 sm:text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-brand-blue"
                  >
                    <EyeIcon show={showPassword} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-sm font-bold text-brand-blue hover:underline sm:text-base">
                  Forgot password ?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand-orange px-8 py-3 text-lg font-extrabold text-brand-ink shadow-md shadow-orange-300/40 transition hover:bg-[#FFAA2A] active:translate-y-px sm:py-4 sm:text-2xl"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600 sm:mt-7 sm:text-lg">
              New to Digifunzi?{" "}
              <a href="#" className="font-extrabold text-brand-blue hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </main>
      </div>

      <p className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-center text-xs text-slate-500 sm:bottom-5 sm:block sm:text-base">
        &copy; 2026 Digifunzi
      </p>
    </div>
  );
}
