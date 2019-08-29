import { createBEM, Bem } from './bem';
import { createComponent, Component } from './component';
import { createI18N, Translate } from './i18n';

type CreateNamespaceReturn = [
  Component,
  Bem,
  Translate
];

export function createNamespace(name: string): CreateNamespaceReturn {
  name = 'x-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}
