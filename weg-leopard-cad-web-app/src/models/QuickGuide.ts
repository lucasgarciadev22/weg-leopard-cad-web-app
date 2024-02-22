export enum SubsectionType {
  TOOL_SUBSECTION = "tool-subsection",
  COMMAND_LIST_SUBSECTION = "command-list-subsection",
}

export interface Subsection {
  type: SubsectionType;
  name: string;
  text: string[];
  icon: string;
}

export interface ToolSubsection extends Subsection {
  shortcuts: string;
  steps: string[];
}

export interface CommandListSubsection extends Subsection {
  commands: string[];
}

export interface Section {
  header: string;
  description: string;
  subsections: Subsection[];
}
