function collect_same_elements(collection_a, object_b) {
    var k = 0;
    var equal = [];

    for (var i = 0; i < collection_a.length; i++)
        for (var j = 0; j < object_b.value.length; j++)
            if (collection_a[i].key === object_b.value[j])
                equal[k++] = collection_a[i].key;

    return equal;
}

module.exports = collect_same_elements;