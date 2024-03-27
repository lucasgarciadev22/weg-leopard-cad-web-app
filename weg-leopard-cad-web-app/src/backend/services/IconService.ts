import arcc from "../../images/tool-icons/arcc.png";
import arc3pt from "../../images/tool-icons/arc3pt.png";
import line from "../../images/tool-icons/line.png";
import xline from "../../images/tool-icons/construction_line.png";
import circle from "../../images/tool-icons/cirrad.png";
import ellipsec from "../../images/tool-icons/ellipsec.png";
import ellipseax from "../../images/tool-icons/ellipseaxis.png";
import ellipseac from "../../images/tool-icons/ellipsearc.png";
import mline from "../../images/tool-icons/multiline.png";
import point from "../../images/tool-icons/point.png";
import polygon from "../../images/tool-icons/polygon.png";
import pline from "../../images/tool-icons/polyline.png";
import rect from "../../images/tool-icons/rectangle.png";
import ray from "../../images/tool-icons/ray.png";
import spline from "../../images/tool-icons/spline.png";
import array from "../../images/tool-icons/arrrec.png";
import block from "../../images/tool-icons/block.png";
import breakt from "../../images/tool-icons/break.png";
import breakpt from "../../images/tool-icons/breakatpt.png";
import copy from "../../images/tool-icons/copyob.png";
import chamfer from "../../images/tool-icons/chamfe.png";
import erase from "../../images/tool-icons/erase.png";
import explode from "../../images/tool-icons/explode.png";
import extend from "../../images/tool-icons/extend.png";
import fillet from "../../images/tool-icons/fillet.png";
import fill from "../../images/tool-icons/gradient.png";
import join from "../../images/tool-icons/join.png";
import mirror from "../../images/tool-icons/mirror.png";
import move from "../../images/tool-icons/move.png";
import region from "../../images/tool-icons/region.png";
import rotate from "../../images/tool-icons/rotate.png";
import scale from "../../images/tool-icons/scale.png";
import stretch from "../../images/tool-icons/stretch.png";
import trim from "../../images/tool-icons/trim.png";
import diml from "../../images/tool-icons/dimlinear.png";
import dimal from "../../images/tool-icons/dimaligned.png";
import diman from "../../images/tool-icons/dimangular.png";
import dimrad from "../../images/tool-icons/dimradius.png";
import dimdia from "../../images/tool-icons/dimdiameter.png";
import text from "../../images/tool-icons/single_dtext.png";
import mtext from "../../images/tool-icons/mtext.png";
import revcl from "../../images/tool-icons/revcloud.png";
import revclrec from "../../images/tool-icons/revcloud.png";
import table from "../../images/tool-icons/table.png";

export function getIcon(iconName: string) {
  switch (iconName) {
    case "arcc":
      return arcc;
    case "arc3pt":
      return arc3pt;
    case "line":
      return line;
    case "xline":
      return xline;
    case "circle":
      return circle;
    case "ellipsec":
      return ellipsec;
    case "ellipseax":
      return ellipseax;
    case "ellipseac":
      return ellipseac;
    case "mline":
      return mline;
    case "point":
      return point;
    case "polygon":
      return polygon;
    case "pline":
      return pline;
    case "rect":
      return rect;
    case "ray":
      return ray;
    case "spline":
      return spline;
    case "array":
      return array;
    case "block":
      return block;
    case "breakt":
      return breakt;
    case "breakpt":
      return breakpt;
    case "copy":
      return copy;
    case "chamfer":
      return chamfer;
    case "erase":
      return erase;
    case "explode":
      return explode;
    case "extend":
      return extend;
    case "fillet":
      return fillet;
    case "fill":
      return fill;
    case "join":
      return join;
    case "mirror":
      return mirror;
    case "move":
      return move;
    case "region":
      return region;
    case "rotate":
      return rotate;
    case "scale":
      return scale;
    case "stretch":
      return stretch;
    case "trim":
      return trim;
    case "diml":
      return diml;
    case "dimal":
      return dimal;
    case "diman":
      return diman;
    case "dimrad":
      return dimrad;
    case "dimdia":
      return dimdia;
    case "text":
      return text;
    case "mtext":
      return mtext;
    case "revcl":
      return revcl;
    case "revclrec":
      return revclrec;
    case "table":
      return table;

    default:
      throw new Error(`Ícone não encontrado para o nome '${iconName}'`);
  }
}
