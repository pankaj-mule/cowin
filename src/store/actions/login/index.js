import AppURL from '../../../utils/AppURL';
import { Post } from '../../methods';

export const login = async params => {
    try {
        const response = await Post(AppURL.getmdmmetadatainbox,
            params
        ).then(res => res.json());

        let data = [];
        if (response?.Status?.Message === 'SUCCESS') {
            data = response.userInfo.data;
        }

        return data;
    } catch (error) {
    }
};
