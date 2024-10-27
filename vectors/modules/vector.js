export function points_to_vector(list1, list2) {
    let list = []
    list[0] = list2[0] - list1[0];
    list[1] = list2[1] - list1[1];
    list[2] = list2[2] - list1[2];
    return list;
}