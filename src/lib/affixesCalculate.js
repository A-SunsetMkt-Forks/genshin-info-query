function setArray(relArray) {
    // 圣遗物id数组
    return relArray.map((rel) => rel.set.id);
}

function countArray(setArray, id) {
    let cnt = 0;
    for (let i = 0; i < setArray.length; i++) {
        if (setArray[i] == id) cnt++;
    }
    return cnt;
}

export default function (rels, id) {
    return countArray(setArray(rels), id);
}
