import ReactMarkdown from "react-markdown";
const Message = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div
      className={`flex max-w-2xl flex-col  ${
        isUser ? "self-end " : "self-start"
      }`}
    >
      <div
        className={`px-2 py-2 ${
          isUser
            ? "rounded-l-full rounded-tr-full border border-transparent px-4 py-1 select-none bg-blue-100"
            : "text-justify"
        }`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Message;
