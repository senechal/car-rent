import { CHANGE_SORT_BY } from '@utils/actionTypes'

export const changeSortBy = (key, order) => {
    return {
        type: CHANGE_SORT_BY,
        key, order,
    }
}