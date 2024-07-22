import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    console.log(path , "7 use namvigate");
    navigate(path);
  };

  return navigateTo;
};

export default useNavigation;
