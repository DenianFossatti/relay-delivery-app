import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './';

export default {
  component: Modal,
  title: `Modal`,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal isOpen {...args} />;

export const Default = Template.bind({});
Default.args = {
  footerButton: {
    onCancelText: 'Cancelar',
    onConfirmText: 'Sim',
  },
  header: {
    icon: 'error',
    title: 'Deseja realmente sair?',
  },
};

export const Update = Template.bind({});
Update.args = {
  footerButton: {
    onCancelHide: true,
    onConfirmText: 'Ok',
  },
  header: {
    icon: 'like',
    title: 'Atualização instalada com sucesso!',
  },
  text: 'Pronto! Você já pode começar a usar o seu aplicativo :)',
};

export const FaceID = Template.bind({});
FaceID.args = {
  footerButton: {
    onCancelText: 'Não',
    onConfirmText: 'Sim',
  },
  header: {
    icon: 'faceid',
    title: 'Deseja usar biometria nos próximos acessos?',
  },
  testID: 'AskBiometric',
};

export const Warning = Template.bind({});
Warning.args = {
  footerButton: {
    onCancelText: 'No',
    onConfirmText: 'Yes',
  },
  header: {
    icon: 'warning',
    title: 'Are you sure?',
  },
};

export const Check = Template.bind({});
Check.args = {
  footerButton: {
    onConfirmText: 'OK',
  },
  header: {
    icon: 'check',
    title: 'Confirmation Modal',
  },
};
