import { schema } from 'normalizr';

const starship = new schema.Entity('starships', {}, {idAttribute: 'url'})
export const entity = new schema.Array(starship)