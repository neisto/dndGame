import classes from '../components/Card/Card.module.css'

export default function Button({onClick, setIsAll}:any): React.ReactElement<any, any> {
    
    function handleMouseEnter() {
        setIsAll(true) ;        
      };
      
      const handleMouseLeave = () => {
        setIsAll(false);
      };

    return (
        <button className={classes.btnAll} onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></button>
    )
}