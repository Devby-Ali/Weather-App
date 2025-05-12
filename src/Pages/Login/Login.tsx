import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Login = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");
  const [languageShow, setLanguageShow] = useState<boolean>(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const userLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/");
  };

  const languageHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
    setLanguageShow(!languageShow);
  };

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (username.length >= 3 && password.length >= 10) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [username, password]);

  return (
    <>
      <section className="relative container flex-center flex-col bg-lightPrimary dark:bg-darkPrimary font-Roboto-regular overflow-x-hidden">
        <div className="flex-center w-full h-screen">
          <div className="flex w-full sm:w-9/12 lg:w-240 h-140 rounded-xl overflow-hidden shadow-Login mb-6">
            <form className="z-10 w-full lg:w-[506px] flex-center backdrop-blur-xs bg-sky-400/10 lg:bg-white dark:bg-sky-300/5 lg:dark:bg-box-dark">
              <div className="flex w-8/10 sm:w-6/10 md:w-5/10 flex-col justify-between h-90 mb-1.5">
                <div>
                  <h3 className="text-[26px] font-Roboto-bold text-darkText dark:text-lightText text-center mb-12">
                    {t("login.login")}
                  </h3>

                  <div className="flex flex-col gap-y-7">
                    <input
                      type="text"
                      name=""
                      id=""
                      onChange={usernameHandler}
                      value={username}
                      className={`w-full text-sm h-11 bg-transparent border rounded-sm px-4 outline-none placeholder-darkText/40 dark:placeholder:text-lightText/40 ${
                        username.length >= 3
                          ? "border-green-500 dark:border-emerald-400/60 text-green-500 dark:text-emerald-400"
                          : "border-zinc-500/60 text-red-300"
                      }`}
                      placeholder={t("login.username")}
                    />

                    <input
                      type="text"
                      name=""
                      id=""
                      onChange={passwordHandler}
                      value={password}
                      className={`w-full text-sm h-11 bg-transparent border rounded-sm px-4 outline-none placeholder-darkText/40 dark:placeholder:text-lightText/40 ${
                        password.length >= 10
                          ? "border-green-500 dark:border-emerald-400/60 text-green-500 dark:text-emerald-400"
                          : "border-zinc-500/60 text-red-300"
                      }`}
                      placeholder={t("login.password")}
                    />
                  </div>
                </div>

                <button
                  className={`h-10.5 text-lightText w-full rounded-sm shadow-md ${
                    isFormValid ? "bg-sky-600 cursor-pointer" : "bg-zinc-600/60"
                  }`}
                  onClick={userLogin}
                  disabled={!isFormValid}
                >
                  {t("login.login")}
                </button>
              </div>
            </form>
            <div className="hidden lg:block relative w-[454px] bg-[#D3E1E7] dark:bg-[#404961] p-10">
              <div className="absolute top-14 right-11">
                <img
                  className="filter-shadow-cloud"
                  src="/images/svgs/Moon-cloud-mid-rain.png"
                  alt=""
                />
              </div>
              <div className="absolute top-40.5 left-[35px]">
                <img
                  className="filter-shadow-cloud"
                  src="/images/svgs/Sun-cloud-angled-rain.png"
                  alt=""
                />
              </div>
              <div className="absolute bottom-[59px] right-11">
                <img
                  className="filter-shadow-cloud"
                  src="/images/svgs/Moon-cloud-fast-wind.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={languageHandler}
          className={`flex flex-col w-55 h-11 gap-y-0.5 tracking-wide -mt-22 ${
            languageShow && "mb-24"
          }`}
        >
          <p
            className={`${
              languageShow
                ? "text-active-blue"
                : "text-darkText dark:text-stone-300"
            } text-xs font-Roboto-light`}
          >
            Language
          </p>
          <div
            onClick={languageHandler}
            className={`w-full flex items-center justify-between text-darkText dark:text-lightText pb-1 cursor-pointer  border-b ${
              languageShow ? "border-b-active-blue" : "border-b-stone-400"
            }`}
          >
            <span className="select-none">{language}</span>
            <span className={`${languageShow && "rotate-180"} mr-1`}>
              <HiOutlineChevronDown />
            </span>
          </div>
          <ul
            className={`${
              languageShow ? "flex" : "hidden"
            } flex-col items-start w-full rounded-b-sm text-darkText dark:text-lightText bg-white dark:bg-box-dark space-y-0.5`}
          >
            <li
              onClick={() => {
                i18n.changeLanguage("fa")
                setLanguage("فارسی")
              }}
              className="w-full py-1 px-3 hover:bg-stoneCard dark:hover:bg-white/15 cursor-pointer"
            >
              فارسی
            </li>
            <li
              onClick={() => {
                i18n.changeLanguage("en")
                setLanguage("English")
              }}
              className="w-full py-1 px-3 hover:bg-stoneCard dark:hover:bg-white/15 cursor-pointer"
            >
              English
            </li>
          </ul>
        </div>
        <div className="z-0 lg:hidden h-full w-full">
          <div className="absolute top-25 -right-20 sm:right-0">
            <img
              className="filter-shadow-cloud"
              src="/images/svgs/Sun-cloud-angled-rain.png"
              alt=""
            />
          </div>
          <div className="absolute top-39/100 -left-20 sm:left-0">
            <img
              className="filter-shadow-cloud"
              src="/images/svgs/Moon-cloud-mid-rain.png"
              alt=""
            />
          </div>
          <div className="absolute bottom-20 -right-20 sm:right-0">
            <img
              className="filter-shadow-cloud"
              src="/images/svgs/Moon-cloud-fast-wind.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
