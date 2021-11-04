import { DataListDef } from '../../services/list/data-list-def';

export const featureName = 'list';

export interface State {
  loading: boolean;
  dataList: DataListDef[];
  error?: any;
}

