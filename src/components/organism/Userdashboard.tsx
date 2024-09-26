import LoginBox from "../molecules/LoginBox";
import InputBox from "../atom/inputBox/inputBox";

const UserDashboard = () => {
  return (
    <div>
      <InputBox label="Welcome! Please log in" variant="outlined" />
      <LoginBox />
    </div>
  );
};

export default UserDashboard;
