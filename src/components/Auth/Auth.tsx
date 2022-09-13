import config from "../../config/config.json";

const Auth = () => {
  return (
    <div>
      <a
        href={`http://dauth.b1nd.com/login?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}`}
      >
        D-Auth 로그인
      </a>
    </div>
  );
};

export default Auth;
