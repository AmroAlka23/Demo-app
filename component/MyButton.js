export function MyButton({ _onClick, children, theme }) {
  return (
    <button onClick={_onClick} style={theme}>
      {children}
    </button>
  );
}
