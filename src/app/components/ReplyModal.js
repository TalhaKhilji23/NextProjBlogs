import React, { useState, useEffect } from "react";

const ReplyModal = ({ closeModal, parentCommentId, onSubmitReply }) => {
  const [replyText, setReplyText] = useState("");

  // Log state changes
  useEffect(() => {
    console.log("Reply Text:", replyText);
  }, [replyText]);

  const handleReplySubmit = () => {
    // Implement your submit logic here, e.g., call API to submit reply
    onSubmitReply(replyText); // Pass replyText back to parent component
    
    setReplyText(""); // Clear replyText state after submission
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full md:w-[540px] rounded-lg p-8">
        <h2 className="text-lg font-bold mb-4">Reply to Comment</h2>
        <textarea
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter your reply here..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={handleReplySubmit}
          >
            Submit Reply
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
