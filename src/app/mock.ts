import { LoginInfoDef } from './object/login-info-def';
import { DataListDef } from './object/data-list-def';

// Loginできるユーザー、パスワードリスト
export const LOGININFOLIST: LoginInfoDef[] = [
    { loginid: 'test1', password: 'Test1'},
    { loginid: 'test2', password: 'Test2'},
];

// Listページに表示するデータリスト
export const DATALIST: DataListDef[] = [
    { id: 1, name: '山田　太郎', tel: '03-1111-1111', address: '東京都青ケ島村1-1-1' },
    { id: 2, name: '佐藤　二郎', tel: '03-2222-2222', address: '東京都無番地2-2-2' },
    { id: 3, name: '田中　三郎', tel: '03-3333-3333', address: '東京都休戸郷3-3-3' },
];
