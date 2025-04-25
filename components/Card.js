export const Card = (props) => {
  return (
    <div className="p-2 bg-background-secondary rounded-md border-2 border-background-secondary 
                  relative overflow-hidden hover:border-foreground-secondary drop-shadow-xl group
                  hover:scale-102 transition-transform duration-300 ease-in-out">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out 
                    bg-gradient-to-br from-foreground-secondary via-30% via-foreground-secondary to-transparent pointer-events-none"></div>
      {props.children}
    </div>
  );
};