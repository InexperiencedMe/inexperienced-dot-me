export const Card = (props) => {
  return (
    <div
      className="p-2 min-w-0 rounded-lg bg-secondary dark:bg-dark-secondary drop-shadow-md  
                transition duration-100 border-2 border-foreground-secondary 
                hover:border-accent"
    >
      {props.children}
    </div>
  );
};
