import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Loading({ isLoading, children }: any) {
  return (
    <div>
      <div>
        {children}
      </div>

      <div className="flex items-center justify-center  " style={{ backgroundColor: "white", position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: isLoading ? "flex" : "none", ...(isLoading && { zIndex: 10000 }) }}>
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="animate-spin text-gray-500 text-3xl "
        />
      </div>
    </div>
  );
}

export default Loading;