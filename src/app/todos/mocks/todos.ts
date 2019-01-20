import { Todo } from '../models/todo.model';

export const MOCKED_TODOS: Todo[] = [
  {
    id: 1,
    title: 'Mettre en place l\'environement',
    completed: true,
    description: 'Installer les dépendances pour le mini projet'
  }, {
    id: 2,
    title: 'Coder la US 1 pour le test des Todos',
    completed: true,
    description: 'As a user I would like to list my current todos'
  }, {
    id: 3,
    title: 'Coder la US 2 pour le test des Todos',
    completed: true
  }, {
    id: 4,
    title: 'Coder la US 3 pour le test des Todos',
    completed: false
  }, {
    id: 5,
    title: 'Coder la US 4 pour le test des Todos',
    completed: false
  }, {
    id: 6,
    title: 'Un todo à faire',
    completed: false
  }, {
    id: 7,
    title: 'Un autre todo',
    completed: false
  }
];
