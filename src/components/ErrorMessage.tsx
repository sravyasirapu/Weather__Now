interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4">
      {message}
    </div>
  );
}
