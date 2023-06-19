/* eslint-disable import/no-default-export */
export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white px-8 py-12 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Website Under Construction</h1>
        <p className="mb-6 text-lg text-gray-700">
          We are currently working on something amazing. Stay tuned!
        </p>
        <a
          href="https://discord.gg/a7Rv8CwbMX"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
        >
          Enter Discord for Updates
        </a>
      </div>
    </div>
  );
}
