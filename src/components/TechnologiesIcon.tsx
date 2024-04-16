import React from "react";

interface TechnologiesIcon {
  iconUrl: string;
  borderIconHeighSize: number;
  borderIconWidthSize: number;
  iconHeighSize: number;
  padding?: string;
  isHome?: boolean;
}

const TechnologiesIcon: React.FC<TechnologiesIcon> = ({
  iconUrl,
  borderIconWidthSize,
  borderIconHeighSize,
  isHome,
}) => {
  return (
    <>
      {isHome ? (
        <div
          className={`w-${borderIconWidthSize} h-${borderIconHeighSize} rounded-full shadow shadow-slate-200 mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125`}
        >
          {iconUrl === "mysql.svg" ? (
            <img
              src={iconUrl}
              alt="..."
              className={`h-7 w-max align-middle border-none`}
            />
          ) : iconUrl === "unity.svg" ? (
            <img
              src={iconUrl}
              alt="..."
              className={`h-8 pr-1 w-max align-middle border-none`}
            />
          ) : (
            <img
              src={iconUrl}
              alt="..."
              className={`h-8 w-max align-middle border-none`}
            />
          )}
        </div>
      ) : (
        <div
          className={`mb-8 w-20 h-20 rounded-full shadow shadow-slate-200 mx-2 flex items-center justify-center hover:bg-slate-100 transition duration-300 ease-in-out hover:scale-125`}
        >
          {iconUrl === "python.svg" ? (
            <img
              src={iconUrl}
              alt="..."
              className={`h-14 w-max align-middle border-none`}
            />
          ) : (
            <img
              src={iconUrl}
              alt="..."
              className={`h-8 w-max align-middle border-none`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default TechnologiesIcon;
