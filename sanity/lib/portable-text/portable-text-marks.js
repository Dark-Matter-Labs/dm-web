export const linkComponent = ({ children, value }) =>
  value.blank == true ? (
    <>
      {value?.href !== 'undefined' && (
        <a
          className="font-SaansRegular text-base text-[#737EA5]"
          href={value?.href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="">{children}</span>
        </a>
      )}
    </>
  ) : (
    <>
      {value?.href !== 'undefined' && (
        <a
          className="font-SaansRegular text-base text-[#737EA5]"
          href={value?.href}
        >
          <span className="">{children}</span>
        </a>
      )}
    </>
  );

export const bold = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

export const italic = ({ children }) => (
  <span className="italic">{children}</span>
);
