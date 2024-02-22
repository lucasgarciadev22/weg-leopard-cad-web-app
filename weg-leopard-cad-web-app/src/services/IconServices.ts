import arcc from "../images/tool-icons/arcc.png";
import line from "../images/tool-icons/line.png";

//importar demais icones conforme popular site, e fazer o mesmo processo
export function getIcon(iconName: string) {
  switch (iconName) {
    case "arcc":
      return arcc;
    case "line":
      return line;
    default:
      throw new Error(`Ícone não encontrado para o nome '${iconName}'`);
  }
}
