// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import type { IRuntimeConfig as Plugin0 } from '/Users/xwj/creatorVerve/src/.umi/plugin-antd/runtimeConfig.d'
import type { IRuntimeConfig as Plugin1 } from '/Users/xwj/creatorVerve/src/.umi/plugin-initialState/runtimeConfig.d'
import type { IRuntimeConfig as Plugin2 } from '/Users/xwj/creatorVerve/src/.umi/plugin-layout/runtimeConfig.d'
import type { IRuntimeConfig as Plugin3 } from '/Users/xwj/creatorVerve/src/.umi/plugin-request/runtimeConfig.d'
interface IDefaultRuntimeConfig {
  onRouteChange?: (props: { routes: any, clientRoutes: any, location: any, action: any, isFirst: boolean }) => void;
  patchRoutes?: (props: { routes: any }) => void;
  patchClientRoutes?: (props: { routes: any }) => void;
  render?: (oldRender: () => void) => void;
  rootContainer?: (lastRootContainer: JSX.Element, args?: any) => void;
  [key: string]: any;
}
export type RuntimeConfig = IDefaultRuntimeConfig & Plugin0 & Plugin1 & Plugin2 & Plugin3

export function defineApp(config: RuntimeConfig): RuntimeConfig {
  return config;
}
