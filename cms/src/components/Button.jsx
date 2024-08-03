export default function Button({ buttonHandler, buttonText }) {
  return (
    <>
      <button onClick={buttonHandler} className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        {buttonText}
      </button>
    </>
  );
}
