module.exports = {
  command: 'make:helper',
  description: 'Generate a new helper',
  arguments: [
    {
      name: 'name',
      description: 'Helper name.',
      required: true,
    },
  ],
  options: [
    {
      name: 'force',
      alias: 'f',
      description: 'Should overwrite file if it exists',
      default: false,
    },
  ],
  async handler({ createFile, parser, template, variationsOf, defaultVariables }) {
    try {
      const { src } = use('paths/helpers');
      // Params
      const RAW_NAME = parser.getArgument(0).value;
      const FORCE = parser.getOption('force').value;

      // Definition
      const NAME = variationsOf(RAW_NAME);
      const FILES = [
        // [PATH, TEMPLATE]
        [src(NAME.CAMEL, `index.ts`), template('helper.index')],
      ];

      // Generate files
      FILES.forEach(([path, template]) => {
        createFile(path, use('TemplateEngine').render(template, defaultVariables({ NAME })), FORCE);
      });
    } catch (e) {
      if (e.message.endsWith('already exists.')) {
        console.error(
          `${e.message} Please choose a different name, path or use the --force flag to overwrite the existing file.`,
        );
      } else {
        console.error(`Something went wrong: ${e.message}`, e.stack);
      }

      throw new Error();
    }
  },
};
