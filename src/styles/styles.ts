import {
  createTheme as createThemes,
  createStyles,
  makeStyles,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles";
import {
  StyleRules,
  StyleRulesCallback,
} from "@material-ui/core/styles/withStyles";
import { Theme } from "@material-ui/core";
import { Styles, WithStylesOptions } from "@material-ui/styles";

export const createTheme = createThemes;

/**
 * makeStylesをラップして、useStylesの戻りに型がつくようにしたもの
 * @param style
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUseStyles = <T extends Styles<Theme, any>>(
  style: T | ((theme: Theme) => T)
) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeStyles(style as any) as (props?: any) => { [K in keyof T]: string };

/**
 * これを通すとcreateUseStylesに渡す型チェックができる
 * @param style
 * @param options
 */
export const toStyles = createStyles;

// injectStylesのimportが特殊で自動importが嘘なのと、今後改善する気がするので、一斉に変更できるようにここを経由するようにします。
// eslint-disable-next-line
export const injectStyles = <ClassKey extends string>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: StyleRulesCallback<Theme, any, ClassKey> | StyleRules<ClassKey>,
  options?: WithStylesOptions<Theme>
) => {
  return withStyles(style, options);
};
export type InjectStyles = WithStyles;
