export const Card = (props) => {
  return (
    <div className="p-2 bg-background-secondary rounded-md border-2 border-background-secondary
                    hover:border-foreground-secondary transition-all ease-in-out duration-100 drop-shadow-xl hover:scale-[1.01] ">
      {props.children}
    </div>
  );
};