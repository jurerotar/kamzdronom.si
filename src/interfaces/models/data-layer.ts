export type DataLayerProperty =
  | 'title'
  | 'source'
  | 'updatedAt'
  | 'type';

export type DataLayer = Record<DataLayerProperty, string>
