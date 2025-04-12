export const Card = (props) => {
  return (
    <div className="p-2 bg-background-secondary rounded-md border-2 border-background
                    hover:border-accent hover:transition-colors duration-100 drop-shadow-2xl">
      {props.children}
    </div>
  );
};