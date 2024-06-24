export default function (plop) {
	// controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name in TitleCase'
      },
      {
        type: 'input',
        name: 'subfolder',
        message: 'Enter (optional) subfolder'
      },
    ],
  
    actions: [
      {
        type: 'add',
        path: 'components/{{lowerCase subfolder}}{{lowerCase name}}/{{lowerCase name}}.scss',
        templateFile: 'plop-templates/component/styles.hbs'
      },
      {
        type: 'add',
        path: 'components/{{lowerCase subfolder}}{{lowerCase name}}/{{name}}.stories.ts',
        templateFile: 'plop-templates/component/storybook.hbs'
      },
      {
        type: 'add',
        path: 'components/{{lowerCase subfolder}}{{lowerCase name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/reactfc.hbs'
      },
    ]
  });
};
