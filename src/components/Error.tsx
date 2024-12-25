"use client";

interface CustomErrorProps {
  message: string;
  onClose: () => void;
}

const CustomError: React.FC<CustomErrorProps> = ({ message, onClose }) => {
  return (
    <div
      role="alert"
      className="fixed bottom-5 right-5 rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105 z-10"
    >
      <div className="flex items-start gap-4">
        <span className="text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900 dark:text-white">
            {" "}
            {message}{" "}
          </strong>
        </div>

        <button
          className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
          onClick={onClose}
        >
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomError;
