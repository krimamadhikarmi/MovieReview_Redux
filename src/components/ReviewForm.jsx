import { useState } from "react";

export function ReviewForm({ addReview }) {
  const [newReview, setNewReview] = useState("");

  return (
    <>
      <form>
        <div className="flex flex-col md:flex-row mt-10 mx-4">
          <div className="flex-grow md:w-64 mb-2 md:mr-4 ">
            <input
              type="text"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Enter Your Review"
              className="w-full text-[#885133] px-2 py-2 border border-amber-400 bg-amber-400 rounded-xl focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex-grow-0 md:w-auto ml-0 md:ml-2">
            <button
              className="w-full md:w-auto px-4 py-2 text-white bg-[#885133] hover:bg-amber-900 focus:outline-none rounded-xl overflow-hidden"
              style={{
                fontFamily: "Ojuju, sans-serif",
              }}
              onClick={(e) => addReview(e, newReview, setNewReview)}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
