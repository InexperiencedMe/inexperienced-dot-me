export const Card = (props) => {
  return (
    <div className="p-2 rounded-md border-2 hover:border-accent">
      {props.children}
    </div>
  );
};
