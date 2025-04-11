export const Card = (props) => {
  return (
    <div className="p-2 rounded-md border-2 hover:border-accent hover:transition-colors">
      {props.children}
    </div>
  );
};
