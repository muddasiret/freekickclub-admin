import type { Schema, Attribute } from '@strapi/strapi';

export interface TypeType extends Schema.Component {
  collectionName: 'components_type_types';
  info: {
    displayName: 'type';
  };
  attributes: {
    category: Attribute.Enumeration<['test 1', 'test 2']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'type.type': TypeType;
    }
  }
}
