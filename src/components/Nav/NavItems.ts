import { v4 as uuid } from "uuid";

class NavItem {
  public id: string;
  public text: string;
  public path: string;

  constructor(text: string, path: string) {
    this.id = uuid();
    this.text = text;
    this.path = path;
  }
}

const navItems: NavItem[] = [
  new NavItem("About Us", "/about"),
  new NavItem("Tools", "/tools"),
  new NavItem("Blogs", "/blogs"),
  new NavItem("Other Projects", "/other-projects"),
];

export default navItems;
