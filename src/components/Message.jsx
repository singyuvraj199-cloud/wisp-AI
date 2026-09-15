const Message = ({ role, content }) => {
  return (
    <div
      className={
        role === "user"
          ? "self-end flex flex-col gap-5 cursor-default mb-2 select-none"
          : "self-start mt-2 mb-4 flex flex-col w-full"
      }
    >
      <p
        className={
          role === "user"
            ? "border border-transparent rounded-2xl mb-2 bg-blue-50 px-4 py-2 shadow-sm"
            : ""
        }
      >
        {content}
      </p>
    </div>
  );
};

export default Message;