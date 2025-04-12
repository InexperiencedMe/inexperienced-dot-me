export const Card = (props) => {
  return (
    <div className="p-2 bg-background-secondary rounded-md border-2 border-background-secondary
                    hover:border-foreground-secondary hover:transition-colors duration-100 drop-shadow-xl">
      {props.children}
    </div>
  );
};