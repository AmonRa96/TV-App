import classes from "./Nav.module.css";
import search from "../../assets/icons/search.png";
import home from "../../assets/icons/home.png";
import tvShows from "../../assets/icons/tvShows.png";
import movies from "../../assets/icons/movies.png";
import genres from "../../assets/icons/genres.png";
import watchLater from "../../assets/icons/watchLater.png";
import profPic from "../../assets/profile.png";


const MENU_ITEMS = [
{
img: search,
txt : "Search"
},
{
img: home,
txt : "Home"
},
{
img: tvShows,
txt : "TV Shows"
},
{
img: movies,
txt : "Movies"
},
{
img: genres,
txt : "Genres"
},
{
img: watchLater,
txt : "Watch Later"
},
]


export const Nav = () =>{

  return (
  <>
    <div className={classes.nav}>
    <div className={classes.navBar}>
      <div className={classes.profInfo}>
        <img className={classes.profPic} src={profPic} alt="profPic"/>
        <div className={classes.profName}>Daniel</div>
      </div>
      <div className={classes.iconsList}>
        {
        MENU_ITEMS.map((i)=>{
        return (
          <div className={classes.icons}>
            <img src={i.img} alt="icon" />
            <div className={classes.itemText}>{i.txt}</div>
          </div>
        )
        })
        }
      </div>
    </div>
    <div className={classes.navFooter}>
      <div>LANGUAGE</div>
      <div>GET HELP</div>
      <div>EXIT</div>
    </div>
    </div>
  <div className={classes.layer} />
  </>

)
}