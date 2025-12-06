export default function Register() {
  return (
    <>
      <div class="min-h-screen flex fle-col items-center justify-center">
        <div class="py-6 px-4">
          <div class="grid lg:grid-cols-2 items-center gap-6 max-w-6xl w-full">
            <div class="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-lg:mx-auto">
              <form class="space-y-6">
                <div class="mb-12">
                  <h1 class="text-slate-900 text-3xl font-semibold">Sign Up</h1>
                  <p class="text-slate-600 text-[15px] mt-6 leading-relaxed">
                    Sign up to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>

                <div class="mb-4">
                  <label class="text-slate-900 text-sm font-medium mb-2 block">
                    Username
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      class="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter username"
                    />
                  </div>
                </div>
                <div>
                  <label class="text-slate-900 text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      required
                      class="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter user name"
                    />
                  </div>
                </div>
                <div>
                  <label class="text-slate-900 text-sm font-medium mb-2 block">
                    Password
                  </label>
                  <div class="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      class="w-full text-sm text-slate-900 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div class="mt-12">
                  <button
                    type="button"
                    class="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                  >
                    Sign up
                  </button>
                  <p class="text-sm mt-6 text-center text-slate-600">
                    Have an account{" "}
                    <a
                      href="/login"
                      class="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div class="max-lg:mt-8">
              <img
                src="https://readymadeui.com/login-image.webp"
                class="w-full aspect-71/50 max-lg:w-4/5 mx-auto block object-cover"
                alt="login img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
