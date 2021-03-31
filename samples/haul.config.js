import { withPolyfills, makeConfig } from "@haul-bundler/preset-0.60";

export default makeConfig({
  bundles: {
    index: {
      entry: withPolyfills('./index'),
      transform({ bundleName, env, runtime, config }){
        runtime.logger.info(`Altering Webpack config for bundle ${bundleName}`);
        config.resolve.alias = {
          ...config.resolve.alias,
        }
      }
    },
  },
});