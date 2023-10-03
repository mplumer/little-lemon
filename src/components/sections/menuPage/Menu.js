import MenuImage from "../../../assets/menu.jpg";

export default function Menu() {
  return (
    <div className="menu-container">
      <img
        className="menu-image"
        src={MenuImage}
        alt="Little Lemon Ingredients"
      ></img>
    </div>
  );
}