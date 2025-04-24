interface FormErrorMessageProps {
  message?: string;
}

export default function FormErrorMessage({ message }: FormErrorMessageProps) {
  if (!message) return null;

  return (
    <p role="alert" className="text-red-500 text-sm mt-1">
      {message}
    </p>
  );
}
