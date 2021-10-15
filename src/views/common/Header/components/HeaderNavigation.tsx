export const HeaderNavigation: React.FC = ({ children }) => {
  return (
    <nav className="navigation">
      <form>{children}</form>
    </nav>
  );
};
