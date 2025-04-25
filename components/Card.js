export const Card = (props) => {
  return (
    <div className="p-2 bg-background-secondary rounded-md border-2 border-background-secondary 
                  hover:bg-background transition-all duration-300 ease-in-out
                  relative overflow-hidden hover:border-foreground-secondary drop-shadow-xl group
                  hover:scale-104 transform-gpu will-change-transform">
      {props.children}
    </div>
  );
};