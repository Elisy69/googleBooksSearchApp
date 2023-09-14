import LoadingIcon from "../assets/svg/Loading";

function Loading() {
  return (
    <div className="self-center w-[10rem] h-10 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm transition ease-in-out duration-150">
      <LoadingIcon />
      Lodaing...
    </div>
  );
}

export default Loading;
