const { cwd } = require('./.config/utilities');

module.exports = {
  providers: [require('./.config/cli/service-providers/PathsServiceProvider')],
  commands: [
    require('./.config/cli/commands/class'),
    require('./.config/cli/commands/helper'),
    require('./.config/cli/commands/test'),
  ],
  template: {
    'class': {
      index: cwd('.config/cli/commands/class/templates/class.mustache'),
      types: cwd('.config/cli/commands/class/templates/types.mustache'),
      test: cwd('.config/cli/commands/class/templates/test.mustache'),
    },
    'helper': {
      index: cwd('.config/cli/commands/helper/templates/helper.mustache'),
    },
    'test': {
      index: cwd('.config/cli/commands/test/templates/test.mustache'),
    },
  },
  paths: {
    src: cwd('src'),
  },
};
