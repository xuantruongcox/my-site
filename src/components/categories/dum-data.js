class Category {
    constructor(title, description, icon, link){
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.link = link;
    }
}

export default [
  new Category(
    "pixel perfect",
    "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    "custom-icon-pen-tool",
    { label: "learn more", path: "/" }
  ),
  new Category(
    "vector shapes",
    "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    "custom-icon-vector",
    { label: "learn more", path: "/" }
  ),
  new Category(
    "google fonts",
    "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    "custom-icon-font-design",
    { label: "learn more", path: "/" }
  ),
  new Category(
    "easy layers",
    "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    "custom-icon-layers",
    { label: "learn more", path: "/" }
  ),
  new Category(
    "bootstrap grid",
    "Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet",
    "custom-icon-list",
    { label: "learn more", path: "/" }
  ),
];