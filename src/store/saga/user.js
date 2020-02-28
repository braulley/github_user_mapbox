import { call, put, select } from 'redux-saga/effects';
import api from '../../config/api';
import { success, error } from '../actions/user';
import { toast } from 'react-toastify';


export function* addUser(action) {
    try {

        const { data } = yield call(api.get,`${action.payload.username}`);
        console.log('datao',data)

        const isDuplicated = yield select(state => state.user.data.find(user => user.id === data.id));

        if (isDuplicated) {
            yield put(error('Usuário Duplicado!'));
            toast.warn('Usuário Duplicado!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }else {
            const repositoryData = {
                id: data.id,
                name: data.name,
                login: data.login,
                url: data.avatar_url,
                longitude: action.payload.location.longitude,
                latitude: action.payload.location.latitude ,            
            };
    
            yield put(success(repositoryData));
    
            toast.success("Usuário adicionado com Sucesso !", {
                position: toast.POSITION.TOP_CENTER
            });
        }         
        
    } catch (err) {
        console.log('err', err);
        yield put(error('Usuário não pode ser adicionado.'));

        toast.error("Usuário não pôde se adicionado !", {
            position: toast.POSITION.TOP_LEFT
        });
    }
    
}