export function ReviewList({ review }) {
  return (
    <>
      <div
        className="text-[#885133]"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <p>{review?.description}</p>
      </div>
    </>
  );
}
