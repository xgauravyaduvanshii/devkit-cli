export interface Ctx {
  args: string[];
  stdin: string;
}

export interface Command {
  name: string;
  summary: string;
  run(ctx: Ctx): number | Promise<number>;
}
